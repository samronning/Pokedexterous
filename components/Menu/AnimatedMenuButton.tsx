import { useRef, useState, useEffect } from "react";
import IconButton, { IconButtonProps } from "../Common/IconButton";
import { View, Text, Animated } from "react-native";
import commonstyles from "../../commonstyles";

type AnimatedMenuButtonProps = {
  onPress: IconButtonProps["onPress"];
  isOpen: boolean;
};
const AnimatedMenuButton = (props: AnimatedMenuButtonProps) => {
  const { onPress, isOpen } = props;
  const rotationRef = useRef(new Animated.Value(0));
  const spinRight = Animated.spring(rotationRef.current, {
    toValue: 1,
    useNativeDriver: true,
  });
  const spinLeft = Animated.spring(rotationRef.current, {
    toValue: 0,
    useNativeDriver: true,
  });
  const rotationDeg = rotationRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });
  const spinIcon: (direction: "right" | "left") => void = (direction) => {
    switch (direction) {
      case "right":
        return spinRight.start();
      case "left":
        return spinLeft.start();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      spinIcon("left");
    } else {
      spinIcon("right");
    }
  }, [isOpen]);
  return (
    <View>
      <IconButton
        text="Menu"
        color="light"
        highlightColor="light"
        iconName="plus"
        animatedTransform={[{ rotate: rotationDeg }]}
        onPress={(e) => {
          onPress && onPress(e);
        }}
        size="small"
      />
    </View>
  );
};
export default AnimatedMenuButton;
