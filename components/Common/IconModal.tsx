import IconButton, { IconButtonProps } from "./IconButton";
import CommonModal from "./CommonModal";
import { useState, useEffect } from "react";

type IconModalProps = Omit<IconButtonProps, "onPress"> & {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  onPress?: IconButtonProps["onPress"];
  children: any;
  title: string;
};

const IconModal = (props: IconModalProps) => {
  const {
    open,
    setOpen,
    children,
    title,
    size,
    color,
    highlightColor,
    iconName,
    onPress,
  } = props;
  const [isOpen, setIsOpen] = useState(open || false);
  useEffect(() => {
    setIsOpen(open || false);
  }, [open]);
  return (
    <>
      <CommonModal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        title={title}
        onRequestClose={() => {
          setOpen && setOpen(false);
          setIsOpen(false);
        }}
      >
        {children}
      </CommonModal>
      <IconButton
        onPress={(e) => {
          onPress && onPress(e);
          setOpen && setOpen(true);
          setIsOpen(true);
        }}
        iconName={iconName}
        text={title}
        color={color}
        highlightColor={highlightColor || color}
        size={size}
      />
    </>
  );
};
export default IconModal;
