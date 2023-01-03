import { Text, View } from "react-native";
import sizes from "../../sizes";

type GlossaryItemProps = {
  heading: string;
  children: any;
  size?: "small" | "medium" | "large";
  direction?: "column" | "row";
};
const GlossaryItem = (props: GlossaryItemProps) => {
  const { heading, children, direction, size } = props;
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
        }}
      >
        {heading[0].toUpperCase() + heading.slice(1)}:{" "}
      </Text>
      {children}
    </View>
  );
};

export default GlossaryItem;
