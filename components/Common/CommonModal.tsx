import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import commonstyles from "../../commonstyles";
import IconButton from "./IconButton";
import colors from "../../colors";
import sizes from "../../sizes";

type CommonModalProps = typeof Modal.prototype.props & {
  title: string;
  isInnerModal?: boolean;
  onSuperClose?: () => void;
};
const CommonModal = (props: CommonModalProps) => {
  const {
    title,
    children,
    onRequestClose,
    onSuperClose,
    isInnerModal,
    ...other
  } = props;
  return (
    <Modal {...other}>
      <View style={styles.outerContainer}>
        <Pressable
          style={{ flex: 1 }}
          onPress={
            onSuperClose
              ? (e) => {
                  onRequestClose && onRequestClose(e);
                  onSuperClose();
                }
              : onRequestClose
          }
        ></Pressable>
        <View style={styles.modalContainer}>
          <View style={styles.modalTopContainer}>
            <Text style={styles.modalTitleText}>{title}</Text>
            <View style={isInnerModal ? styles.floatLeft : styles.floatRight}>
              <IconButton
                color="light"
                onPress={onRequestClose}
                text={isInnerModal ? "Back" : "Close"}
                size="small"
                iconName={isInnerModal ? "arrow-left" : "close"}
              />
            </View>
          </View>
          <View style={styles.modalContentContainer}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  modalContainer: {
    position: "absolute",
    height: "50%",
    width: "100%",
    bottom: 0,
  },
  modalTopContainer: {
    ...commonstyles.centeredView,
    backgroundColor: colors.primary,
    flex: 1,
    width: "100%",
  },
  modalContentContainer: {
    ...commonstyles.centeredView,
    backgroundColor: colors.light,
    flex: 6,
    width: "100%",
  },
  modalTitleText: {
    fontWeight: "bold",
    color: colors.light,
    fontSize: sizes.fonts.large,
  },
  floatRight: { position: "absolute", right: 0 },
  floatLeft: { position: "absolute", left: 0 },
});

export default CommonModal;
