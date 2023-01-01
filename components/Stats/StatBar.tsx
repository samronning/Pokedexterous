import { View, Text } from "react-native";
import colors from "../../colors";

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
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: colors.light, marginLeft: 5 }}>{name}: </Text>
      {value && (
        <View
          style={{
            backgroundColor: assessment ? statRange[assessment].color : "",
            width: value / 4,
            height: 3,
          }}
        />
      )}
      <Text style={{ color: colors.light }}>{value}</Text>
    </View>
  );
};

export default StatBar;
