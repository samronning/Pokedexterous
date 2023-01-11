import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { TypeName } from "../Type/Types";
import readSqlFile from "../../sql/readSql";
import openDatabase from "../../db";
import EfficacyDisplay from "./EfficacyDisplay";

type TypeEfficacyRow = {
  damage_factor: number;
  attacker_name: TypeName;
  defender_name: TypeName;
};

type TypeEfficacyObject = Partial<Record<TypeName, number>>;

const efficaciesReducer = (
  searchType: (selectedType: TypeName) => boolean,
  searchStrategy: "attack" | "defend"
) => {
  return (acc: TypeEfficacyObject, cur: TypeEfficacyRow) => {
    //For Attacking
    if (searchStrategy === "attack") {
      //When the attacker is not the selected type, just return the accumulation
      if (!searchType(cur.attacker_name)) return acc;
      //When the attacker is the selecter type, add the defender name and the damage factor to the accumulation
      return { ...acc, [cur.defender_name]: cur.damage_factor };
    }
    //For defending, when the defender is the selected type(s)
    if (searchType(cur.defender_name)) {
      //When there is already information on the defender, multiply it
      if (acc[cur.attacker_name] !== undefined) {
        const multiplied =
          Number(acc[cur.attacker_name]) * Number(cur.damage_factor);
        return { ...acc, [cur.attacker_name]: multiplied };
      }
      //There isn't information yet, so just create it
      return { ...acc, [cur.attacker_name]: cur.damage_factor };
    }
    //Otherwise, just send the accumulation
    return acc;
  };
};

type TypeEfficacyProps = { firstType: TypeName; secondType: TypeName };
const TypeEfficacy = ({ firstType, secondType }: TypeEfficacyProps) => {
  const [attackingEfficacies, setAttackingEfficacies] = useState([{}, {}]);
  const [defendingEfficacies, setDefendingEfficacies] = useState({});
  useEffect(() => {
    const doQuery = async () => {
      const db = await openDatabase();
      const sql = await readSqlFile("typeEfficacyByTypeName");
      db.transaction((t) => {
        t.executeSql(
          sql,
          [firstType, firstType, secondType, secondType],
          (_, res) => {
            const efficacies: TypeEfficacyRow[] = res.rows._array;
            const newFirstAttackingEfficacies = efficacies.reduce(
              efficaciesReducer((search) => search === firstType, "attack"),
              {}
            );
            const newSecondAttackingEfficacies = efficacies.reduce(
              efficaciesReducer((search) => search === secondType, "attack"),
              {}
            );
            const newDefendingEfficacies = efficacies.reduce(
              efficaciesReducer(
                (search) => search === firstType || search === secondType,
                "defend"
              ),
              {}
            );
            setAttackingEfficacies([
              newFirstAttackingEfficacies,
              newSecondAttackingEfficacies,
            ]);
            setDefendingEfficacies(newDefendingEfficacies);
          }
        );
      });
    };
    doQuery();
  }, [firstType, secondType]);
  return (
    <View style={styles.viewContainer}>
      <ScrollView style={{ width: "90%" }}>
        <EfficacyDisplay
          leadType={firstType}
          secondaryType={secondType}
          data={defendingEfficacies}
        />
        <EfficacyDisplay leadType={firstType} data={attackingEfficacies[0]} />
        <EfficacyDisplay leadType={secondType} data={attackingEfficacies[1]} />
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </View>
  );
};

export default TypeEfficacy;
export { TypeEfficacyObject };

const styles = StyleSheet.create({
  bold: { fontWeight: "bold" },
  viewContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
