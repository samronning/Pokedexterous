import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import commonstyles from "../../commonstyles";
import colors from "../../colors";
import IconButton from "./IconButton";

type ClosedMenuProps = {
  page: string;
};

const ClosedMenu = (props: ClosedMenuProps) => {
  const { page } = props;
  return (
    <View style={styles.closedMenu}>
      <IconButton
        color="light"
        highlightColor="light"
        iconName="arrow-up"
        onPress={() => {}}
        size="small"
      />
      <Text style={styles.text}>{page}</Text>
    </View>
  );
};

type OpenMenuProps = {
  page: string;
};

const OpenMenu = (props: OpenMenuProps) => {
  const { page } = props;
  return null;
};

type MainMenuProps = {
  page: string;
};

const MainMenu = (props: MainMenuProps) => {
  const { page } = props;
  const [open, setOpen] = useState(false);
  return open ? <OpenMenu page={page} /> : <ClosedMenu page={page} />;
};

const styles = StyleSheet.create({
  closedMenu: {
    ...commonstyles.centeredView,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.light,
    fontSize: 24,
    marginBottom: 12
  },
});

export default MainMenu;
