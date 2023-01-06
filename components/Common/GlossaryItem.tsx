import { Text, View } from "react-native";
import sizes from "../../sizes";

type GlossaryItemProps = {
  heading: string;
  children: any;
  size?: "small" | "medium" | "large";
  direction?: "column" | "row";
  underline?: boolean;
};
const GlossaryItem = (props: GlossaryItemProps) => {
  const { heading, children, direction, size, underline } = props;
  return (
    <View
      style={{
        flexDirection: direction || "column",
        alignItems: "center",
      }}
    >
      <Text
        style={{
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
