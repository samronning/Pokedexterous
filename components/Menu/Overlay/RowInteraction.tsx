import { View, StyleSheet } from "react-native";
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
  switch (page) {
    case "Natures" || "Types":
      return null;
    default:
      return (
        <View style={styles.overlayMenu}>
          <Search page={page} />
          <View style={styles.rowInteractionButtons}>
            <ViewModal />
            <FilterModal />
            <SortModal page={page} />
          </View>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  overlayMenu: {
    position: "absolute",
    bottom: 0,
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
