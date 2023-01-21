import { View, StyleSheet } from "react-native";
import FilterModal from "./Filter/FilterModal";
import SortModal from "./Sort/SortModal";
import ViewModal from "./View/ViewModal";
import colors from "../../../colors";

/*
This component determines which (if any) overlays to display depending on the page
*/
const RowInteraction = () => {
  return (
    <View style={styles.overlayMenu}>
      <View style={styles.rowInteractionButtons}>
        <ViewModal />
        <FilterModal />
        <SortModal />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  overlayMenu: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 5,
  },
  rowInteractionButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});

export default RowInteraction;
