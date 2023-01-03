import { useRef, useState } from "react";
import IconButton, { IconButtonProps } from "../Common/IconButton";
import { View, Text, Animated } from "react-native";
import commonstyles from "../../commonstyles";

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
    <View>
      <IconButton
        text="Menu"
        color="light"
        highlightColor="light"
        iconName="arrow-up"
        animatedTransform={[{ rotate: rotationDeg }]}
        onPress={(e) => {
          if (isDown) {
            spinArrow("up");
            setIsDown(false);
          } else {
            spinArrow("down");
            setIsDown(true);
          }
          onPress && onPress(e);
        }}
        size="small"
      />
    </View>
  );
};
export default AnimatedArrowIconButton;
