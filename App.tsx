import { useState } from "react";
import { View, Text } from "react-native";
import MainMenu from "./components/Menu/MainMenu";
import OverlayMenu from "./components/Menu/Overlay/OverlayMenu";
import commonstyles from "./commonstyles";
import { Pokedex, Moves } from "./screens";
import colors from "./colors";

type DisplayPageProps = {
  page: string;
};
const DisplayPage = (props: DisplayPageProps) => {
  const { page } = props;
  switch (page) {
    case "Pokedex":
      return <Pokedex />;
    case "Moves":
      return <Moves />;
    default:
      return (
        <View style={commonstyles.centeredView}>
          <Text style={commonstyles.errorText}>Page not found!</Text>
        </View>
      );
  }
};

export default function App() {
  const [page, setPage] = useState("Pokedex");
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 6, backgroundColor: colors.light }}>
        <DisplayPage page={page} />
        <OverlayMenu page={page} />
      </View>
      <View style={{ flex: 1 }}>
        <MainMenu page={page} />
      </View>
    </View>
  );
}
