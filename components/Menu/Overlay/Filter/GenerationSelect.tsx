import { Text, View } from "react-native";
import Selection from "../../../Common/Selection";
import { useState, useEffect } from "react";
import readSqlFile from "../../../../sql/readSql";
import openDatabase from "../../../../db";
import { useAppSelector, useAppDispatch } from "../../../../hooks/redux";
import { selectGeneration, setGeneration } from "../../../../slices/generation";

type Generation = {
  name: string;
  key: string;
};

const GenerationSelect = () => {
  const [generations, setGenerations] = useState<Generation[]>([]);
  const selectedGeneration = useAppSelector(selectGeneration);
  const dispatch = useAppDispatch();
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
      {generations.length > 0 && (
        <Selection
          data={[{ key: "0", name: `all - national` }, ...generations]}
          selectedIndex={
            selectedGeneration === "" ? 0 : Number(selectedGeneration)
          }
          onSelect={(selection) =>
            dispatch(setGeneration(selection === 0 ? "" : selection))
          }
          title="Generation"
        />
      )}
    </View>
  );
};

export default GenerationSelect;
