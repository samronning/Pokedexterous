import types from "./Types";
import { View, Text } from "react-native";
import colors from "../../colors";

type TypeName = keyof typeof types;
type TypeBoxProps = { typeName: TypeName; secondary?: boolean };
const TypeBox = (props: TypeBoxProps) => {
  const { typeName, secondary } = props;
  return (
    <View
      style={{
        backgroundColor: types[typeName].color,
        margin: 5,
        padding: 10,
        borderRadius: 20,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.white }}>{typeName.toUpperCase()}</Text>
    </View>
  );
};

type TypeRenderProps = { typeName1: TypeName; typeName2?: TypeName };
const TypeRender = (props: TypeRenderProps) => {
  const { typeName1, typeName2 } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TypeBox typeName={typeName1} />
      {typeName2 && (
        <Text style={{ fontSize: 40, fontWeight: "bold", color: colors.white }}>
          /
        </Text>
      )}
      {typeName2 && <TypeBox typeName={typeName2} />}
    </View>
  );
};
export default TypeRender;
