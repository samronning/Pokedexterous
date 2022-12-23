import { Modal, View, Text, StyleSheet } from "react-native";
import commonstyles from "../../commonstyles";
import colors from "../../colors";

type CommonModalProps = typeof Modal.prototype.props & { title: string };
const CommonModal = (props: CommonModalProps) => {
  const { title, children, ...other } = props;
  return (
    <Modal {...other}>
      <View style={styles.modalContainer}>
        <View style={styles.modalTopContainer}>
          <Text style={commonstyles.lightCenteredText}>{title}</Text>
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
});

export default CommonModal;
