import { Pressable, Text, PressableProps } from "react-native";
import colors from "../../colors";

type PressableTextButtonProps = PressableProps & {
  text: string;
  color?: string;
  border?: boolean;
  disabled?: boolean;
};
const PressableTextButton = (props: PressableTextButtonProps) => {
  const { text, border, color, ...other } = props;
  return (
    <Pressable
      style={{
        backgroundColor: color,
        borderWidth: border ? 2 : 0,
        borderRadius: 5,
        borderColor: colors.primary,
        padding: 5,
      }}
      {...other}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};
export default PressableTextButton;
