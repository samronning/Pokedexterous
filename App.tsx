import { useState } from "react";
import { View, Text } from "react-native";
import MainMenu from "./components/Menu/MainMenu";
import commonstyles from "./commonstyles";
import { Pokedex, Moves } from "./screens";
import colors from "./colors";
import { Provider } from "react-redux";
import store from "./store";
import Loading from "./components/Loading";
import Types from "./screens/Types";
import Natures from "./screens/Natures";
import Abilities from "./screens/Abilities";

type Page = "Pokedex" | "Moves" | "Natures" | "Types" | "Abilities" | "Items";

const DisplayPage = ({ page }: { page: Page }) => {
  switch (page) {
    case "Pokedex":
      return <Pokedex />;
    case "Moves":
      return <Moves />;
    case "Types":
      return <Types />;
    case "Natures":
      return <Natures />;
    case "Abilities":
      return <Abilities />;
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
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: colors.primary,
        }}
      >
        <View
          style={{
            flex: 1,
            top: 40,
            bottom: 70,
            position: "absolute",
            width: "100%",
          }}
        >
          <Text style={commonstyles.title}>{page?.toUpperCase()}</Text>
          <DisplayPage page={page} />
        </View>
        <MainMenu onSelectPage={setPage} />
        <Loading />
      </View>
    </Provider>
  );
}
export { Page };
