import { StyleSheet } from "react-native";
import colors from "./colors";
import sizes from "./sizes";

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
  title: {
    color: colors.light,
    fontWeight: "bold",
    fontSize: sizes.fonts.huge,
    marginHorizontal: 10,
  },
  darkSubtitle: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: sizes.fonts.large,
  },
  darkText: {
    color: colors.black,
    fontSize: sizes.fonts.medium,
  },
  entryContainer: {
    backgroundColor: colors.light,
    borderRadius: 10,
    margin: 5,
    marginTop: 0,
  },
});
export default commonstyles;
