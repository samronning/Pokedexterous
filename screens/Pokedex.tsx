import { useState, useEffect, Dispatch } from "react";
import { View, Text } from "react-native";
import EntryRender from "../components/Pokedex/EntryRender";
import { PokedexEntry } from "../components/Pokedex/Entry";
import { SQLTransaction } from "expo-sqlite";
import openDatabase from "../db";
import readSqlFile from "../sql/readSql";
import { selectGeneration } from "../slices/generation";
import { selectSearch } from "../slices/search";
import { selectSort, SortColumn, SortDirection } from "../slices/sort";
import { setLoading } from "../slices/loading";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { debounce } from "lodash";
import { AppDispatch } from "../store";

const doQuery = async (
  selectedGeneration: number | string,
  searchTerm: string,
  sortColumn: SortColumn,
  sortDirection: SortDirection,
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
          [selectedGeneration, selectedGeneration, searchTerm, searchTerm],
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
  const searchTerm = useAppSelector(selectSearch);
  const sortObj = useAppSelector(selectSort);
  const dispatch = useAppDispatch();
  useEffect(() => {
    debouncedDoQuery(
      selectedGeneration,
      searchTerm,
      sortObj.column,
      sortObj.direction,
      setPokedexEntries,
      dispatch
    );
  }, [selectedGeneration, searchTerm, sortObj]);
  return (
    <View>
      <EntryRender pokedexEntries={pokedexEntries} />
    </View>
  );
};
export default Pokedex;
