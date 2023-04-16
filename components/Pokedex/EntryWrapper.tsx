import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import PokemonDetails from "./PokemonDetails";

const EntryWrapper = (props: {
  children: React.ReactElement[] | React.ReactElement;
}) => {
  const { children } = props;
  const [detailsOpen, setDetailsOpen]: [boolean, React.Dispatch<boolean>] =
    useState(false);
  if (detailsOpen) {
    return <PokemonDetails />;
  }
  return <View style={styles.entryContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  entryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default EntryWrapper;
