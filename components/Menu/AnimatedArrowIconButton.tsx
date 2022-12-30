import { useRef, useState } from "react";
import IconButton, { IconButtonProps } from "../Common/IconButton";
import { View, Animated } from "react-native";

type AnimatedArrowIconButtonProps = {
  onPress: IconButtonProps["onPress"];
};
const AnimatedArrowIconButton = (props: AnimatedArrowIconButtonProps) => {
  const { onPress } = props;
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
  return (
    <Animated.View style={{ transform: [{ rotate: rotationDeg }] }}>
      <IconButton
        color="light"
        highlightColor="light"
        iconName="arrow-up"
        onPress={() => {
          if (isDown) {
            spinArrow("up");
            setIsDown(false);
          } else {
            spinArrow("down");
            setIsDown(true);
          }
          onPress();
        }}
        size="small"
      />
    </Animated.View>
  );
};
export default AnimatedArrowIconButton;
