import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MainMenu from "./components/Menu/MainMenu";
import commonstyles from "./commonstyles";
import { Pokedex, Moves } from "./screens";
import colors from "./colors";
import { Provider } from "react-redux";
import store from "./store";
import Loading from "./components/Loading";
import RowInteraction from "./components/Menu/Overlay/RowInteraction";

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
      <View style={{ flex: 1, backgroundColor: colors.primary }}>
        <View
          style={{
            position: "absolute",
            bottom: 130,
            top: 60,
            width: "100%",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={commonstyles.title}>{page?.toUpperCase()}</Text>
            <DisplayPage page={page} />
          </View>
        </View>
        <MainMenu page={page} onSelectPage={setPage} />
        <RowInteraction page={page} />
        <Loading />
      </View>
    </Provider>
  );
}
export { Page };
