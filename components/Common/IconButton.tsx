import { Pressable, GestureResponderEvent } from "react-native";
import colors, { alpha } from "../../colors";
import Icon, { IconProps, IconName } from "./Icon";

type IconButtonProps = {
  margin?: number;
  highlightColor?: keyof typeof colors;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
} & IconProps;
const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    text,
    animatedTransform,
    iconName,
    color,
    highlightColor,
    size,
    bold,
    border,
    margin,
    onPress,
  } = props;
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{
        color: alpha(highlightColor || color, "thin"),
        radius: 100,
      }}
      style={{
        marginHorizontal: margin || 2,
        paddingHorizontal: 2,
      }}
    >
      <Icon
        color={color}
        text={text}
        animatedTransform={animatedTransform}
        iconName={iconName}
        bold={bold}
        border={border}
        size={size}
      />
    </Pressable>
  );
};

export default IconButton;
export { IconButtonProps, IconName };
