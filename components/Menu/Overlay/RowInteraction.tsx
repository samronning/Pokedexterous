import { View, StyleSheet, Platform } from "react-native";
import Search from "./Search";
import FilterModal from "./Filter/FilterModal";
import SortModal from "./Sort/SortModal";
import ViewModal from "./View/ViewModal";
import colors, { alpha } from "../../../colors";
import { Page } from "../../../App";

/*
This component determines which (if any) overlays to display depending on the page
*/
const RowInteraction = ({ page }: { page: Page }) => {
  return (
    <View style={styles.overlayMenu}>
      <View style={styles.rowInteractionButtons}>
        <ViewModal />
        <FilterModal />
        <SortModal page={page} />
      </View>
      <Search page={page} />
    </View>
  );
};
const styles = StyleSheet.create({
  overlayMenu: {
    position: "absolute",
    paddingBottom: 10,
    bottom: -10,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  rowInteractionButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});

export default RowInteraction;
