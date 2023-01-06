import { View } from "react-native";
import colors from "../colors";
import SelectedTypesDisplay from "../components/Types/SelectedTypesDisplay";
const Types = () => {
  return (
    <View style={{ backgroundColor: colors.light, flex: 1 }}>
      <SelectedTypesDisplay />
    </View>
  );
};
export default Types;
