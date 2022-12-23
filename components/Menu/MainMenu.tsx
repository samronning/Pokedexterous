import { useState, useEffect, useRef } from "react";
import { Animated, View, Text, StyleSheet, Image } from "react-native";
import commonstyles from "../../commonstyles";
import colors from "../../colors";
import AnimatedArrowIconButton from "./AnimatedArrowIconButton";
import NavigationList from "./NavigationList";

type MainMenuProps = {
  page: string;
};

const MainMenu = (props: MainMenuProps) => {
  const { page } = props;
  const [isOpen, setIsOpen] = useState(false);
  const transYValRef = useRef(new Animated.Value(-100));

  const openAnim = Animated.spring(transYValRef.current, {
    toValue: -300,
    useNativeDriver: true,
  });
  const closeAnim = Animated.spring(transYValRef.current, {
    toValue: -100,
    useNativeDriver: true,
  });

  return (
    <Animated.View
      style={{
        ...styles.Menu,
        transform: [{ translateY: transYValRef.current }],
      }}
    >
      <AnimatedArrowIconButton
        onPress={() => {
          if (isOpen) {
            closeAnim.start();
          } else {
            openAnim.start();
          }
          setIsOpen((prev) => !prev);
        }}
      />
      <Text style={styles.text}>{page}</Text>
      <NavigationList />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  Menu: {
    ...commonstyles.centeredView,
    backgroundColor: colors.primary,
    position: "absolute",
    width: "100%",
    height: 100,
    bottom: -100,
  },
  text: {
    color: colors.light,
    fontSize: 24,
    marginBottom: 12,
  },
});

export default MainMenu;
