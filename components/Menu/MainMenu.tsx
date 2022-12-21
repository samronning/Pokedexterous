import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import commonstyles from "../../commonstyles";
import colors from "../../colors";

type ClosedMenuProps = {
  page: string;
};

const ClosedMenu = (props: ClosedMenuProps) => {
  const { page } = props;
  return (
    <View style={styles.closedMenu}>
      <Image style={{height: 10*3, width: 13.3*3}}source={require("../../assets/arrow.png")} />
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
