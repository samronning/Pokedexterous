import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import EntryRender from "../components/Pokedex/EntryRender";
import { PokedexEntry } from "../components/Pokedex/Entry";
import commonstyles from "../commonstyles";
import { SQLTransaction } from "expo-sqlite";
import openDatabase from "../db";
import readSqlFile from "../sql/readSql";
import { selectGeneration } from "../slices/generation";
import { useAppSelector } from "../hooks/redux";

const Pokedex = () => {
  const [pokedexEntries, setPokedexEntries] = useState<PokedexEntry[]>([]);
  const selectedGeneration = useAppSelector(selectGeneration);
  useEffect(() => {
    const doQuery = async () => {
      try {
        console.log("before await");
        const db = await openDatabase();
        const sqlStatement = await readSqlFile("selectPokedex");
        db.transaction(
          (sqlTransaction: SQLTransaction) => {
            sqlTransaction.executeSql(
              sqlStatement,
              [selectedGeneration],
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
    doQuery();
  }, [selectedGeneration]);
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
