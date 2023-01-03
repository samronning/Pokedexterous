import { View, Text } from "react-native";
import colors from "../../colors";
import sizes from "../../sizes";

const statRange = {
  bad: { color: colors.red },
  okay: { min: 41, color: colors.yellow },
  good: { min: 81, color: colors.green },
};

type StatBarProps = { value: number | undefined; name: string };
const StatBar = (props: StatBarProps) => {
  const { value, name } = props;
  const assessment =
    value &&
    (value < statRange.okay.min
      ? "bad"
      : value < statRange.good.min
      ? "okay"
      : "good");
  return (
    <View
      style={{
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 70,
      }}
    >
      <Text
        style={{
          color: colors.black,
          marginHorizontal: 3,
          fontWeight: "bold",
          fontSize: sizes.fonts.tiny,
        }}
      >
        {name}
      </Text>
      {value && (
        <View
          style={{
            backgroundColor: assessment ? statRange[assessment].color : "",
            borderWidth: 1,
            borderColor: colors.black,
            width: 8,
            borderRadius: 10,
            height: value / 4,
          }}
        />
      )}
      <Text style={{ color: colors.black, fontSize: sizes.fonts.tiny }}>
        {value}
      </Text>
    </View>
  );
};

export default StatBar;
