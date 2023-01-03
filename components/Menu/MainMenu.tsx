import { useState, useEffect, useRef } from "react";
import { Animated, Text, StyleSheet } from "react-native";
import colors from "../../colors";
import AnimatedArrowIconButton from "./AnimatedArrowIconButton";
import NavigationList from "./NavigationList";
import { Page } from "../../App";

type MainMenuProps = {
  page: Page;
  onSelectPage: React.Dispatch<React.SetStateAction<Page>>;
};

const MainMenu = (props: MainMenuProps) => {
  const { page, onSelectPage } = props;
  const [isOpen, setIsOpen] = useState(false);
  const transYValRef = useRef(new Animated.Value(-100));

  const openAnim = Animated.spring(transYValRef.current, {
    toValue: -260,
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
    height: 425,
    bottom: -340,
  },
  text: {
    color: colors.light,
    fontSize: 24,
    marginBottom: 34,
  },
});

export default MainMenu;
