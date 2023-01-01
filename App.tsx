import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MainMenu from "./components/Menu/MainMenu";
import Search from "./components/Menu/Overlay/Search";
import OverlayMenu from "./components/Menu/Overlay/OverlayMenu";
import commonstyles from "./commonstyles";
import { Pokedex, Moves } from "./screens";
import colors from "./colors";
import { Provider } from "react-redux";
import store from "./store";

type Page =
  | "Pokedex"
  | "Moves"
  | "Natures"
  | "Types"
  | "Abilities"
  | "Items"
  | undefined;

const DisplayPage = ({ page }: { page: Page }) => {
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
  const [page, setPage] = useState<Page>("Pokedex");
  return (
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: colors.black }}>
        <View
          style={{
            position: "absolute",
            bottom: 160,
            top: 50,
            width: "100%",
          }}
        >
          <View style={{ flex: 1 }}>
            <DisplayPage page={page} />
          </View>
        </View>
        <OverlayMenu page={page} />
        <MainMenu page={page} onSelectPage={setPage} />
        <Search page={page} />
      </View>
    </Provider>
  );
}
export { Page };
