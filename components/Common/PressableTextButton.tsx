import { Pressable, Text, PressableProps } from "react-native";
import colors from "../../colors";

type PressableTextButtonProps = PressableProps & {
  text: string;
  disabled?: boolean;
};
const PressableTextButton = (props: PressableTextButtonProps) => {
  const { text, ...other } = props;
  return (
    <Pressable
      style={{
        borderWidth: 2,
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
