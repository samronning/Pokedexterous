import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TypeName } from "../Type/Types";
import { TypeEfficacyObject } from "./TypeEfficacy";
import { TypeBox } from "../Type/TypeRender";
import sizes from "../../sizes";
import colors from "../../colors";

type EfficacyGroupProps = { data: TypeEfficacyObject };
const EfficacyGroup = (props: EfficacyGroupProps) => {
  const { data } = props;
  const efficacyArray = Object.entries(data);
  return (
    <View style={styles.efficacyGroupContainer}>
      {efficacyArray.map((entry) => {
        const [type, efficacy] = entry;
        return (
          <TypeBox
            style={styles.typeBoxStyle}
            key={type}
            typeName={type as TypeName}
            efficacy={efficacy}
          />
        );
      })}
    </View>
  );
};

type GroupKey = "high" | "medium" | "low";
type EfficacyGroups = Record<GroupKey, TypeEfficacyObject>;
const groupByEfficacy = (obj: TypeEfficacyObject) => {
  return Object.entries(obj).reduce(
    (acc: EfficacyGroups, [k, v]) => {
      if (v > 1) {
        return { ...acc, high: { ...acc["high"], [k]: v } };
      }
      if (v === 1) {
        return { ...acc, medium: { ...acc["medium"], [k]: v } };
      }
      return { ...acc, low: { ...acc["low"], [k]: v } };
    },
    { high: {}, medium: {}, low: {} }
  );
};

type EfficacyBodyProps = {
  data: TypeEfficacyObject;
  isDefense?: boolean;
  display?: boolean;
};
const EfficacyBody = (props: EfficacyBodyProps) => {
  const { data, isDefense, display } = props;
  const groupedEfficacies: EfficacyGroups = groupByEfficacy(data);
  const highText = isDefense ? "Frail Against" : "Strong Against";
  const mediumText = "Average Damage";
  const lowText = isDefense ? "Sturdy Against" : "Weak Against";
  type GroupDef = { text: string; dataKey: GroupKey };
  const [lowDef, mediumDef, highDef] = [
    { text: lowText, dataKey: "low" },
    { text: mediumText, dataKey: "medium" },
    { text: highText, dataKey: "high" },
  ] as Array<GroupDef>;
  const order = isDefense
    ? [lowDef, highDef, mediumDef]
    : [highDef, lowDef, mediumDef];
  return (
    <View>
      {display ? (
        order.map(({ text, dataKey }) => {
          return (
            <View key={text}>
              <Text style={styles.efficacyGroupHeadingText}>{text}</Text>
              <EfficacyGroup data={groupedEfficacies[dataKey]} />
            </View>
          );
        })
      ) : (
        <Text>Select A Type</Text>
      )}
    </View>
  );
};

type HeadingProps = { leadType: TypeName; secondaryType?: TypeName };
const Heading = (props: HeadingProps) => {
  const { leadType, secondaryType } = props;
  const headingText = secondaryType ? "Defending" : "Attacking";
  return (
    <View style={styles.headingContainer}>
      <View style={styles.headingTypeContainer}>
        <TypeBox style={styles.typeBoxStyle} typeName={leadType} />
        {secondaryType && (
          <TypeBox style={styles.typeBoxStyle} typeName={secondaryType} />
        )}
      </View>
      <Text style={styles.headingText}>{headingText}</Text>
    </View>
  );
};

type EfficacyDisplayProps = {
  leadType: TypeName;
  secondaryType?: TypeName;
  data: TypeEfficacyObject;
};
const EfficacyDisplay = (props: EfficacyDisplayProps) => {
  const { leadType, secondaryType, data } = props;
  return (
    <View style={styles.efficacyDisplayContainer}>
      <Heading leadType={leadType} secondaryType={secondaryType} />
      <EfficacyBody
        display={leadType !== "none"}
        isDefense={Boolean(secondaryType)}
        data={data}
      />
    </View>
  );
};

export default EfficacyDisplay;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    paddingBottom: 2,
  },
  typeBoxStyle: {
    marginHorizontal: 2,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: sizes.fonts.large,
  },
  headingTypeContainer: {
    flexDirection: "row",
  },
  efficacyDisplayContainer: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  efficacyGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  efficacyGroupHeadingText: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
});
