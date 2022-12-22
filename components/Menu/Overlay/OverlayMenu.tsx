import { View, StyleSheet } from "react-native";
import FilterModal from "./Filter/FilterModal";
import SortModal from "./Sort/SortModal";
import ViewModal from "./View/ViewModal";
import { alpha } from "../../../colors";

type OverlayMenuContainerProps = {
  children: any;
};
const OverlayMenuContainer = (props: OverlayMenuContainerProps) => {
  const { children } = props;
  return (
    <View style={styles.bottomRightOverlay}>
      <View style={styles.OverlayMenu}>{children}</View>
    </View>
  );
};

type OverlayMenuProps = {
  page: string;
};
/*
This component determines which (if any) overlays to display depending on the page
*/
const OverlayMenu = (props: OverlayMenuProps) => {
  const { page } = props;
  switch (page) {
    case "Natures" || "Types":
      return null;
    default:
      return (
        <OverlayMenuContainer>
          <ViewModal />
          <FilterModal />
          <SortModal />
        </OverlayMenuContainer>
      );
  }
};

const styles = StyleSheet.create({
  bottomRightOverlay: {
    flex: 1,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  OverlayMenu: {
    margin: 10,
    alignItems: "center",
  },
});

export default OverlayMenu;
