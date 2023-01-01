import { View, Text } from "react-native";
import colors from "../../colors";
import IconButton, { IconName } from "../Common/IconButton";
import commonstyles from "../../commonstyles";
import { Page } from "../../App";

type NavigationProp = {
  title: Page;
  icon: IconName;
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
  onItemSelection: React.Dispatch<React.SetStateAction<Page>>;
};
const NavigationList = (props: NavigationListProps) => {
  const { onItemSelection } = props;

  const navigationListMap: (navigationProp: NavigationProp) => any = (
    navigationProp
  ) => {
    const { title, icon } = navigationProp;
    return (
      <View style={{ margin: 10 }} key={title}>
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
