import { useState, useEffect } from "react";
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
    <View
      style={{
        ...commonstyles.centeredView,
        backgroundColor: colors.black,
        paddingTop: 60,
      }}
    >
      <View style={{ flex: 1, width: "100%" }}>
        <DisplayPage page={page} />
      </View>
      <OverlayMenu page={page} />
      <MainMenu page={page} onSelectPage={setPage} />
    </View>
  );
}
