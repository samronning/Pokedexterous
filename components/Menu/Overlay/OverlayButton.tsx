import { Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../../../colors";
import sizes from "../../../sizes";
import commonstyles from "../../../commonstyles";
type OverlayButtonProps = {
  text: string;
  iconName: "sort" | "filter" | "eye";
  onPress: () => void;
};
const OverlayButton = (props: OverlayButtonProps) => {
  const { text, iconName, onPress } = props;
  return (
    <Pressable onPress={onPress}>
      <FontAwesome
        name={iconName}
        color={colors.primary}
        borderRadius={30}
        size={sizes.icon.medium}
      />
      <Text style={commonstyles.primaryCenteredText}>{text}</Text>
    </Pressable>
  );
};
export default OverlayButton;
