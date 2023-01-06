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

const GenerationSelect = ({ onSuperClose }: { onSuperClose: () => void }) => {
  const [generations, setGenerations] = useState<Generation[]>([]);
  const generationsObj = generations.reduce(
    (acc, cur) => ({ ...acc, [cur.key]: { name: cur.name } }),
    {
      "0": { name: "all - national" },
    }
  );
  const [loading, setLoading] = useState(false);
  const selectedGeneration = useAppSelector(selectGeneration);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getGenerations = async () => {
      setLoading(true);
      const db = await openDatabase();
      const sql = await readSqlFile("generations");
      db.transaction((t) => {
        t.executeSql(sql, [], (_, res) => {
          setGenerations(res.rows._array);
          setLoading(false);
        });
      });
    };
    getGenerations();
  }, []);
  return (
    <View>
      <Selection
        isInnerModal={true}
        loading={loading}
        data={generationsObj}
        selectedKey={selectedGeneration === "" ? "0" : selectedGeneration}
        onSelect={(selection) =>
          dispatch(setGeneration(selection === "0" ? "" : selection))
        }
        title="Generation"
        onSuperClose={onSuperClose}
      />
    </View>
  );
};

export default GenerationSelect;
