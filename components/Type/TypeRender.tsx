import types from "./Types";
import { memo } from "react";
import { View, Text } from "react-native";
import colors from "../../colors";
import sizes from "../../sizes";

type TypeId = keyof typeof types;
type TypeBoxProps = { typeId: TypeId };
const TypeBox = memo((props: TypeBoxProps) => {
  const { typeId } = props;
  return (
    <View
      style={{
        backgroundColor: types[typeId].color,
        marginVertical: 2,
        width: 80,
        padding: 3,
        paddingHorizontal: 5,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        borderColor: colors.black,
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
});

type TypeRenderProps = { typeId1: TypeId; typeId2?: TypeId };
const TypeRender = (props: TypeRenderProps) => {
  const { typeId1, typeId2 } = props;
  return (
    <View
      style={{
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
export default memo(TypeRender);
