import IconButton, { IconButtonProps } from "./IconButton";
import CommonModal from "./CommonModal";
import { useState } from "react";

type IconModalProps = Omit<IconButtonProps, "onPress"> & {
  onPress?: IconButtonProps["onPress"];
  children: any;
  title: string;
};

const IconModal = (props: IconModalProps) => {
  const { children, title, color, highlightColor, iconName, onPress } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <CommonModal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        title={title}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        {children}
      </CommonModal>
      <IconButton
        onPress={() => {
          onPress && onPress();
          setIsOpen(true);
        }}
        iconName={iconName}
        text={title}
        color={color}
        highlightColor={highlightColor || color}
      />
    </>
  );
};
export default IconModal;
