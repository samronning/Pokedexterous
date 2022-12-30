import { Text, View } from "react-native";
import Selection from "../../../Common/Selection";
import { useState, useEffect } from "react";
import readSqlFile from "../../../../sql/readSql";
import openDatabase from "../../../../db";

type Generation = { region_id: number; name: string; key: string };

const GenerationSelect = () => {
  const [generations, setGenerations] = useState<Generation[]>([]);
  useEffect(() => {
    const getGenerations = async () => {
      const db = await openDatabase();
      const sql = await readSqlFile("generations");
      db.transaction((t) => {
        t.executeSql(sql, [], (_, res) => {
          setGenerations(res.rows._array);
        });
      });
    };
    getGenerations();
  }, []);
  return (
    <View style={{ flexDirection: "row" }}>
      <Text>Generation: </Text>
      {generations.length > 0 && (
        <Selection data={[{ key: "0", name: "All" }, ...generations]} />
      )}
    </View>
  );
};

export default GenerationSelect;
