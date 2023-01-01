import { useState, useEffect, Dispatch } from "react";
import { View, Text } from "react-native";
import EntryRender from "../components/Pokedex/EntryRender";
import { PokedexEntry } from "../components/Pokedex/Entry";
import { SQLTransaction } from "expo-sqlite";
import openDatabase from "../db";
import readSqlFile from "../sql/readSql";
import { selectGeneration } from "../slices/generation";
import { selectSearch } from "../slices/search";
import { useAppSelector } from "../hooks/redux";
import { debounce } from "lodash";

const doQuery = async (
  selectedGeneration: number | string,
  searchTerm: string,
  setPokedexEntries: Dispatch<PokedexEntry[]>
) => {
  try {
    console.log("before await");
    const db = await openDatabase();
    const sqlStatement = await readSqlFile("selectPokedex");
    db.transaction(
      (sqlTransaction: SQLTransaction) => {
        sqlTransaction.executeSql(
          sqlStatement,
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
  useEffect(() => {
    debouncedDoQuery(selectedGeneration, searchTerm, setPokedexEntries);
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
