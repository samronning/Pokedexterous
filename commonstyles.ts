import { StyleSheet } from "react-native";
import colors from "./colors";

const commonstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: colors.errorText,
  },
  bottomRightOverlay: {
    flex: 1,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  primaryCenteredText: {
    color: colors.primary,
    textAlign: "center",
  },
  lightCenteredText: {
    color: colors.light,
    textAlign: "center",
  },
});
export default commonstyles;
