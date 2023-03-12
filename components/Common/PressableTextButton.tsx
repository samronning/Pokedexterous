import { Pressable, Text, PressableProps } from "react-native";
import colors from "../../colors";

type PressableTextButtonProps = PressableProps & {
  text: string;
  color?: string;
  textColor?: string;
  border?: boolean;
  disabled?: boolean;
};
const PressableTextButton = (props: PressableTextButtonProps) => {
  const { text, border, color, textColor, ...other } = props;
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
      <Text style={{ color: textColor}}>{text}</Text>
    </Pressable>
  );
};
export default PressableTextButton;
