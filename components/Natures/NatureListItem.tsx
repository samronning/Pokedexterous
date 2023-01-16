import { StyleSheet, Text, View } from "react-native";
import { Nature } from "../../screens/Natures";
import React from "react";
import colors from "../../colors";
import commonstyles from "../../commonstyles";
import Icon from "../Common/Icon";
type NatureListItemProps = { nature: Nature };
const NatureListItem = (props: NatureListItemProps) => {
  const { nature } = props;
  return (
    <View style={styles.container}>
      <View style={styles.natureNameContainer}>
        <Text style={commonstyles.darkSubtitle}>
          {nature.nature.toUpperCase()}
        </Text>
      </View>
      {nature.increased_stat && (
        <View style={styles.valuesContainer}>
          <View style={styles.valueContainer}>
            <Icon size="tiny" iconName={"arrow-up"} color="primary" />
            <Text style={{ ...commonstyles.darkText, maxWidth: 57 }}>
              {nature.increased_stat.split("-")}
            </Text>
          </View>
          <View style={styles.valueContainer}>
            <Icon size="tiny" iconName={"arrow-down"} color="primary" />
            <Text style={{ ...commonstyles.darkText, maxWidth: 57 }}>
              {nature.decreased_stat.split("-")}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default NatureListItem;

const styles = StyleSheet.create({
  container: {
    ...commonstyles.entryContainer,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valueContainer: {
    margin: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  natureNameContainer: { marginVertical: 10, marginLeft: 5 },
  valuesContainer: { flexDirection: "row" },
});
