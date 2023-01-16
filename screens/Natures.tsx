import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import readSqlFile from "../sql/readSql";
import openDatabase from "../db";
import NatureListItem from "../components/Natures/NatureListItem";
type Nature = {
  nature: string;
  increased_stat: string;
  decreased_stat: string;
};
const Natures = () => {
  const [natures, setNatures] = useState<Nature[]>([]);
  useEffect(() => {
    const getNatures = async () => {
      const db = await openDatabase();
      const sql = await readSqlFile("natures");
      db.transaction((t) => {
        t.executeSql(sql, [], (_, res) => {
          setNatures(res.rows._array);
        });
      });
    };
    getNatures();
  }, []);
  return (
    <ScrollView>
      {natures.map((nature) => {
        return <NatureListItem key={nature.nature} nature={nature} />;
      })}
    </ScrollView>
  );
};

export { Nature };
export default Natures;

const styles = StyleSheet.create({});
