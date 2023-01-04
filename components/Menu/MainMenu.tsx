import { useState, useEffect, useRef } from "react";
import { View, Animated, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../colors";
import AnimatedMenuButton from "./AnimatedMenuButton";
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

  useEffect(() => {
    if (!isOpen) {
      closeAnim.start();
    } else {
      openAnim.start();
    }
  }, [isOpen]);

  return (
    <View style={styles.menuOverlay}>
      {isOpen && (
        <Pressable style={{ flex: 1 }} onPress={() => setIsOpen(false)} />
      )}
      <Animated.View
        style={{
          ...styles.menu,
          transform: [{ translateY: transYValRef.current }],
        }}
      >
        <AnimatedMenuButton
          onPress={() => {
            setIsOpen((prev) => !prev);
          }}
          isOpen={isOpen}
        />
        <NavigationList onItemSelection={onSelectPage} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  menu: {
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
