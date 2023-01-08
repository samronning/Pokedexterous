import Icon, { IconName } from "./Icon";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import colors, { Color } from "../../colors";

type AlertProps = {
  kind: "warning" | "info";
  border?: boolean;
  children: string;
};
const Alert = (props: AlertProps) => {
  const { kind, border, children } = props;
  type Def = {
    containerStyle: ViewStyle;
    textStyle: TextStyle;
    iconColor: Color;
    iconName: IconName;
  };
  const [infoDefs, warningDefs] = [
    {
      containerStyle: styles.infoContainer,
      textStyle: styles.infoText,
      iconColor: "infoDark",
      iconName: "info",
    },
    {
      containerStyle: styles.warningContainer,
      textStyle: styles.warningText,
      iconColor: "warningDark",
      iconName: "warning",
    },
  ] as Array<Def>;
  const def = kind === "info" ? infoDefs : warningDefs;
  return (
    <View
      style={{
        ...def.containerStyle,
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        borderWidth: border ? 2 : 0,
        padding: 5,
        borderRadius: 5,
      }}
    >
      <Icon size="small" color={def.iconColor} iconName={def.iconName} />
      <Text style={{ ...def.textStyle, marginLeft: 10 }}>{children}</Text>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({
  warningContainer: {
    borderColor: colors.warningLight,
  },
  infoContainer: { borderColor: colors.infoLight },
  infoText: { color: colors.infoDark },
  warningText: { color: colors.warningDark },
});
