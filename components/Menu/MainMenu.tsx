import { useState, useEffect, useRef } from "react";
import { Animated, View, Text, StyleSheet, Image } from "react-native";
import colors from "../../colors";
import AnimatedArrowIconButton from "./AnimatedArrowIconButton";
import NavigationList from "./NavigationList";

type MainMenuProps = {
  page: string;
  onSelectPage: React.Dispatch<React.SetStateAction<string>>;
};

const MainMenu = (props: MainMenuProps) => {
  const { page, onSelectPage } = props;
  const [isOpen, setIsOpen] = useState(false);
  const transYValRef = useRef(new Animated.Value(-100));

  const openAnim = Animated.spring(transYValRef.current, {
    toValue: -400,
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
      <NavigationList onItemSelection={onSelectPage} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  Menu: {
    alignItems: "center",
    backgroundColor: colors.primary,
    position: "absolute",
    width: "100%",
    height: 480,
    bottom: -420,
  },
  text: {
    color: colors.light,
    fontSize: 24,
    marginBottom: 34,
  },
});

export default MainMenu;
