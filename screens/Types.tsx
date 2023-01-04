import { View } from "react-native";
import colors from "../colors";
import TypeSelect from "../components/Types/TypeSelect";
const Types = () => {
  return (
    <View style={{ backgroundColor: colors.light, flex: 1 }}>
      <TypeSelect />
    </View>
  );
};
export default Types;
