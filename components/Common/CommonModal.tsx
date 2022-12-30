import { Modal, View, Text, StyleSheet } from "react-native";
import commonstyles from "../../commonstyles";
import IconButton from "./IconButton";
import colors from "../../colors";

type CommonModalProps = typeof Modal.prototype.props & {
  title: string;
  isInnerModal?: boolean;
};
const CommonModal = (props: CommonModalProps) => {
  const { title, children, onRequestClose, isInnerModal, ...other } = props;
  return (
    <Modal {...other}>
      <View style={styles.modalContainer}>
        <View style={styles.modalTopContainer}>
          <Text style={commonstyles.lightCenteredText}>{title}</Text>
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
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  floatRight: { position: "absolute", right: 0 },
  floatLeft: { position: "absolute", left: 0 },
});

export default CommonModal;
