import { useState, useEffect, Dispatch } from "react";
import { View } from "react-native";
import EntryRender from "../components/Pokedex/EntryRender";
import { PokedexEntry } from "../components/Pokedex/Entry";
import { SQLTransaction } from "expo-sqlite";
import openDatabase from "../db";
import readSqlFile from "../sql/readSql";
import { selectGeneration } from "../slices/generation";
import { selectSort, SortColumn, SortDirection } from "../slices/sort";
import { setLoading } from "../slices/loading";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { debounce } from "lodash";
import { AppDispatch } from "../store";
import Search from "../components/Menu/Search";
import RowInteraction from "../components/Menu/RowInteraction/RowInteraction";
import FilterIndicator from "../components/Menu/FilterIndicator";
import pokedexCategories from "../components/Menu/RowInteraction/Sort/Categories/Pokedex";
import { TypeName } from "../components/Type/Types";
import { selectType } from "../slices/type";

const doQuery = async (
  selectedGeneration: number | string,
  searchTerm: string,
  sortColumn: SortColumn,
  sortDirection: SortDirection,
  type1: TypeName | "",
  type2: TypeName | "",
  setPokedexEntries: Dispatch<PokedexEntry[]>,
  dispatch: AppDispatch
) => {
  try {
    dispatch(setLoading(true));
    const db = await openDatabase();
    const sqlStatement = await readSqlFile("selectPokedex");
    db.transaction(
      (sqlTransaction: SQLTransaction) => {
        sqlTransaction.executeSql(
          sqlStatement + ` order by ${sortColumn} ${sortDirection}`,
          [
            selectedGeneration,
            selectedGeneration,
            searchTerm,
            searchTerm,
            type1,
            type2,
          ],
          (_, res) => {
            setPokedexEntries(res.rows._array);
            dispatch(setLoading(false));
          }
        );
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("success");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const debouncedDoQuery = debounce(doQuery, 800);

const Pokedex = () => {
  const [pokedexEntries, setPokedexEntries] = useState<PokedexEntry[]>([]);
  const selectedGeneration = useAppSelector(selectGeneration);
  const types = useAppSelector(selectType);
  const setNoneToEmpty = (type: TypeName): TypeName | "" =>
    type === "none" ? "" : type;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const sortObj = useAppSelector(selectSort);
  const dispatch = useAppDispatch();
  useEffect(() => {
    debouncedDoQuery(
      selectedGeneration,
      searchTerm,
      sortObj.column,
      sortObj.direction,
      setNoneToEmpty(types.type1),
      setNoneToEmpty(types.type2),
      setPokedexEntries,
      dispatch
    );
  }, [selectedGeneration, searchTerm, sortObj, types.type1, types.type2]);
  return (
    <View style={{ flex: 1 }}>
      <FilterIndicator category={pokedexCategories} />
      <EntryRender pokedexEntries={pokedexEntries} />
      <RowInteraction />
      <Search term={searchTerm} setTerm={setSearchTerm} />
    </View>
  );
};
export default Pokedex;
