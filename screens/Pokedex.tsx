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
import { useAppSelector } from "../hooks/redux";
import { debounce } from "lodash";

const doQuery = async (
  selectedGeneration: number | string,
  searchTerm: string,
  sortColumn: SortColumn,
  sortDirection: SortDirection,
  setPokedexEntries: Dispatch<PokedexEntry[]>
) => {
  try {
    console.log("before await");
    const db = await openDatabase();
    const sqlStatement = await readSqlFile("selectPokedex");
    db.transaction(
      (sqlTransaction: SQLTransaction) => {
        sqlTransaction.executeSql(
          sqlStatement + `sort by ${sortColumn} ${sortDirection}`,
          [selectedGeneration, selectedGeneration, searchTerm, searchTerm],
          (_, res) => {
            setPokedexEntries(res.rows._array);
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
  useEffect(() => {
    debouncedDoQuery(
      selectedGeneration,
      searchTerm,
      sortObj.column,
      sortObj.direction,
      setPokedexEntries
    );
  }, [selectedGeneration, searchTerm]);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <EntryRender pokedexEntries={pokedexEntries} />
    </View>
  );
};
export default Pokedex;
