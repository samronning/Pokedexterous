import { useRef, useState, useEffect } from "react";
import IconButton, { IconButtonProps } from "../Common/IconButton";
import { View, Text, Animated } from "react-native";
import commonstyles from "../../commonstyles";

type AnimatedArrowIconButtonProps = {
  onPress: IconButtonProps["onPress"];
  isOpen: boolean;
};
const AnimatedArrowIconButton = (props: AnimatedArrowIconButtonProps) => {
  const { onPress, isOpen } = props;
  const [isDown, setIsDown] = useState(false);
  const rotationRef = useRef(new Animated.Value(0));
  const spinDown = Animated.spring(rotationRef.current, {
    toValue: 1,
    useNativeDriver: true,
  });
  const spinUp = Animated.spring(rotationRef.current, {
    toValue: 0,
    useNativeDriver: true,
  });
  const rotationDeg = rotationRef.current.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const spinArrow: (direction: "down" | "up") => void = (direction) => {
    switch (direction) {
      case "down":
        return spinDown.start();
      case "up":
        return spinUp.start();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      spinArrow("up");
    } else {
      spinArrow("down");
    }
  }, [isOpen]);
  return (
    <View>
      <IconButton
        text="Menu"
        color="light"
        highlightColor="light"
        iconName="arrow-up"
        animatedTransform={[{ rotate: rotationDeg }]}
        onPress={(e) => {
          onPress && onPress(e);
        }}
        size="small"
      />
    </View>
  );
};
export default AnimatedArrowIconButton;
