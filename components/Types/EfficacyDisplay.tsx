import { StyleSheet, Text, View } from "react-native";
import Alert from "../Common/Alert";
import React from "react";
import { TypeName } from "../Type/Types";
import { TypeEfficacyObject } from "./TypeEfficacy";
import { TypeBox } from "../Type/TypeRender";
import sizes from "../../sizes";
import colors from "../../colors";
import commonstyles from "../../commonstyles";
import { isEmpty } from "lodash";

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
  type GroupDef = { text: string; groupKey: GroupKey };
  const [lowSchema, mediumSchema, highSchema] = [
    { text: lowText, groupKey: "low" },
    { text: mediumText, groupKey: "medium" },
    { text: highText, groupKey: "high" },
  ] as Array<GroupDef>;
  const order = isDefense
    ? [lowSchema, highSchema, mediumSchema]
    : [highSchema, lowSchema, mediumSchema];
  return (
    <View>
      {display ? (
        order.map(({ text, groupKey }) => {
          return (
            !isEmpty(groupedEfficacies[groupKey]) && (
              <View key={text}>
                <Text style={styles.efficacyGroupHeadingText}>{text}</Text>
                <EfficacyGroup data={groupedEfficacies[groupKey]} />
              </View>
            )
          );
        })
      ) : (
        <Alert kind="warning">Nothing selected.</Alert>
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
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    paddingBottom: 2,
    paddingHorizontal: 10,
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
    ...commonstyles.entryContainer,
  },
  efficacyGroupContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingBottom: 10,
  },
  efficacyGroupHeadingText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
