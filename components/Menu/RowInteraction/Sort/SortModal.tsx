import IconModal from "../../../Common/IconModal";
import GlossaryItem from "../../../Common/GlossaryItem";
import Categories from "./Categories/Categories";
import pokedexCategories from "./Categories/Pokedex";
import Direction from "./Direction";
import { View } from "react-native";

const SortModal = () => {
  return (
    <IconModal iconName="sort" color="light" title="Sort" size="small">
      <View
        style={{
          height: "100%",
          justifyContent: "flex-start",
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        <GlossaryItem heading="Order" size="large">
          <Direction />
        </GlossaryItem>
        <View style={{ marginVertical: 20 }}>
          <GlossaryItem heading="Categories" size="large">
            <Categories categoryList={pokedexCategories} />
          </GlossaryItem>
        </View>
      </View>
    </IconModal>
  );
};

export default SortModal;
