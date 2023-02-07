import { Text, View, ViewStyle } from "react-native";
import colors, { Color } from "../../colors";
import sizes from "../../sizes";

type GlossaryItemProps = {
  heading: string;
  children: any;
  size?: "small" | "medium" | "large";
  direction?: "column" | "row";
  underline?: boolean;
  color?: Color;
  margin?: ViewStyle["margin"];
  justifyContent?: ViewStyle["justifyContent"];
};
const GlossaryItem = (props: GlossaryItemProps) => {
  const {
    heading,
    children,
    direction,
    size,
    underline,
    color,
    margin,
    justifyContent,
  } = props;
  return (
    <View
      style={{
        flexDirection: direction || "column",
        alignItems: "center",
        margin: margin,
        justifyContent: justifyContent,
        width: "100%",
      }}
    >
      <Text
        style={{
          color: colors[color || "black"],
          fontWeight: "bold",
          fontSize: size ? sizes.fonts[size] : sizes.fonts.medium,
          paddingBottom: size ? sizes.fonts[size] / 3 : sizes.fonts.medium / 3,
          textDecorationLine: underline ? "underline" : "none",
        }}
      >
        {heading}
        {!underline && ": "}
      </Text>
      {children}
    </View>
  );
};

export default GlossaryItem;
