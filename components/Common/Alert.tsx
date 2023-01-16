import Icon, { IconName } from "./Icon";
import { Text, TextStyle, View, ViewStyle } from "react-native";
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
      iconColor: "infoDark",
      iconName: "info",
    },
    {
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
        padding: 5,
        borderRadius: 5,
        borderColor: colors.black,
        borderWidth: 1,
        backgroundColor: colors.light,
      }}
    >
      <Icon size="small" color={def.iconColor} iconName={def.iconName} />
      <Text style={{ ...def.textStyle, marginLeft: 10, color: colors.black }}>
        {children}
      </Text>
    </View>
  );
};

export default Alert;
