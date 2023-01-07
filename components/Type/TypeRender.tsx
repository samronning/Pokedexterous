import types, { TypeName } from "./Types";
import { memo } from "react";
import { View, Text } from "react-native";
import colors from "../../colors";
import sizes from "../../sizes";

type TypeBoxProps = { typeName: TypeName };
const TypeBox = memo((props: TypeBoxProps) => {
  const { typeName } = props;
  return (
    <View
      style={{
        backgroundColor: types[typeName].color,
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
          color: types[typeName].darkText ? colors.black : colors.white,
          fontSize: sizes.fonts.tiny,
          fontWeight: "bold",
        }}
      >
        {typeName.toUpperCase()}
      </Text>
    </View>
  );
});

type TypeRenderProps = { typeName1: TypeName; typeName2?: TypeName };
const TypeRender = (props: TypeRenderProps) => {
  const { typeName1, typeName2 } = props;
  return (
    <View
      style={{
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TypeBox typeName={typeName1} />
      {typeName2 && <TypeBox typeName={typeName2} />}
    </View>
  );
};
export { TypeBox };
export default memo(TypeRender);
