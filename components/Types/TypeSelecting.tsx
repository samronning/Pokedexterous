import { StyleSheet, Text, View } from "react-native";
import React, { Dispatch } from "react";
import { TypeName } from "../Type/Types";
import TypeSelector from "./TypeSelector";
import GlossaryItem from "../Common/GlossaryItem";

type TypeSelectProps = {
  firstType: TypeName;
  secondType: TypeName;
  onSelectFirstType: Dispatch<TypeName>;
  onSelectSecondType: Dispatch<TypeName>;
};
const TypeSelecting = (props: TypeSelectProps) => {
  const { firstType, secondType, onSelectFirstType, onSelectSecondType } =
    props;
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      {[
        {
          isFirstType: true,
          selectedType: firstType,
          otherType: secondType,
          heading: "Selected type 1",
          onSelect: onSelectFirstType,
        },
        {
          isFirstType: false,
          otherType: firstType,
          selectedType: secondType,
          heading: "Selected type 2",
          onSelect: onSelectSecondType,
        },
      ].map(({ heading, ...other }) => (
        <View key={heading} style={{ margin: 5 }}>
          <GlossaryItem direction="column" heading={heading} underline>
            <TypeSelector title={heading} {...other} />
          </GlossaryItem>
        </View>
      ))}
    </View>
  );
};

export default TypeSelecting;
const styles = StyleSheet.create({});
