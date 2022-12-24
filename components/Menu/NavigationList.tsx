import { View, Text } from "react-native";
import colors from "../../colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import IconButton from "./IconButton";
import commonstyles from "../../commonstyles";

type NavigationProp = {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
};
type NavigationPropsArray = Array<NavigationProp>;
const navigationProps: NavigationPropsArray = [
  { title: "Pokedex", icon: "circle" },
  { title: "Moves", icon: "wrench" },
  { title: "Abilities", icon: "star" },
  { title: "Items", icon: "shopping-basket" },
  { title: "Natures", icon: "heart" },
  { title: "Types", icon: "leaf" },
];

type NavigationListProps = {
  onItemSelection: React.Dispatch<React.SetStateAction<string>>;
};
const NavigationList = (props: NavigationListProps) => {
  const { onItemSelection } = props;

  const navigationListMap: (navigationProp: NavigationProp) => any = (
    navigationProp
  ) => {
    const { title, icon } = navigationProp;
    return (
      <View style={{ margin: 10 }}>
        <IconButton
          onPress={() => {
            onItemSelection(title);
          }}
          color="light"
          iconName={icon}
          size="small"
        />
        <Text style={{ color: colors.light, textAlign: "center" }}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        width: "70%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {navigationProps.map(navigationListMap)}
    </View>
  );
};
export default NavigationList;
