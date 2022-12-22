import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import commonstyles from "../../commonstyles";
import colors from "../../colors";
import sizes from "../../sizes";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type ClosedMenuProps = {
  page: string;
};

const ClosedMenu = (props: ClosedMenuProps) => {
  const { page } = props;
  return (
    <View style={styles.closedMenu}>
      <FontAwesome
        name="arrow-up"
        color={colors.light}
        size={sizes.icon.small}
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
    color: colors.lightText,
  },
});

export default MainMenu;
