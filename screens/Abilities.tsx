import { useState, useEffect } from "react";
import readSqlFile from "../sql/readSql";
import openDatabase from "../db";
import { View, Text, FlatList } from "react-native";
import React from "react";
import AbilityEntry from "../components/Abilities/AbilityEntry";

type Ability = {
  generation_id: number;
  name: string;
  effect: string;
  short_effect: string;
};
const Abilities = () => {
  const [abilities, setAbilities] = useState<Ability[]>([]);
  useEffect(() => {
    const getAbilities = async () => {
      const db = await openDatabase();
      const sql = await readSqlFile("abilities");
      db.transaction((t) => {
        t.executeSql(sql, [], (_, res) => {
          setAbilities(res.rows._array);
        });
      });
    };
    getAbilities();
  }, []);
  return (
    <View>
      <FlatList
        data={abilities}
        keyExtractor={(ability) => ability.name}
        renderItem={({ item }) => <AbilityEntry ability={item} />}
      />
    </View>
  );
};
export { Ability };
export default Abilities;
