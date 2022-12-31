import types from "./Types";
import { View, Text } from "react-native";
import colors from "../../colors";
import sizes from "../../sizes";

type TypeId = keyof typeof types;
type TypeBoxProps = { typeId: TypeId };
const TypeBox = (props: TypeBoxProps) => {
  const { typeId } = props;
  return (
    <View
      style={{
        backgroundColor: types[typeId].color,
        margin: 5,
        padding: 10,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
      }}
    >
      <Text
        style={{
          color: types[typeId].darkText ? colors.black : colors.white,
          fontSize: sizes.fonts.tiny,
          fontWeight: "bold",
        }}
      >
        {types[typeId].name.toUpperCase()}
      </Text>
    </View>
  );
};

type TypeRenderProps = { typeId1: TypeId; typeId2?: TypeId };
const TypeRender = (props: TypeRenderProps) => {
  const { typeId1, typeId2 } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TypeBox typeId={typeId1} />
      {typeId2 && <TypeBox typeId={typeId2} />}
    </View>
  );
};
export default TypeRender;
