import IconButton, { IconButtonProps } from "../IconButton";
import colors, { alpha } from "../../../colors";

type OverlayButtonProps = Pick<
  IconButtonProps,
  "onPress" | "iconName" | "text"
>;
const OverlayButton = (props: OverlayButtonProps) => {
  return (
    <IconButton
      {...props}
      color="primary"
      highlightColor="primary"
    ></IconButton>
  );
};
export default OverlayButton;
