import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import TypeSelecting from "./TypeSelecting";
import { TypeName } from "../Type/Types";

type Props = {};

const SelectedTypesDisplay = (props: Props) => {
  const [firstType, setFirstType] = useState<TypeName | "none">("none");
  const [secondType, setSecondType] = useState<TypeName | "none">("none");
  useEffect(() => {
    firstType === "none" && setSecondType("none");
  }, [firstType]);
  return (
    <View>
      <TypeSelecting
        firstType={firstType}
        secondType={secondType}
        onSelectFirstType={setFirstType}
        onSelectSecondType={setSecondType}
      />
    </View>
  );
};

export default SelectedTypesDisplay;

const styles = StyleSheet.create({});
