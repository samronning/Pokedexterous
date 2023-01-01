import { View, ActivityIndicator } from "react-native";
import colors, { alpha } from "../colors";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { selectLoading, setLoading } from "../slices/loading";

const Loading = () => {
  const loading = useAppSelector(selectLoading);
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: alpha("dark", "thick"),
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        display: loading ? "flex" : "none",
      }}
    >
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};
export default Loading;
