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
});
export default commonstyles;
