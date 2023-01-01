import IconModal from "../../../Common/IconModal";
import GlossaryItem from "../../../Common/GlossaryItem";
import Categories from "./Categories/Categories";
import Direction from "./Direction";
import { Page } from "../../../../App";
import { View } from "react-native";

const SortModal = ({ page }: { page: Page }) => {
  return (
    <IconModal iconName="sort" color="light" title="Sort" size="small">
      <View
        style={{
          height: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <GlossaryItem heading="order" size="large">
          <Direction />
        </GlossaryItem>
        <GlossaryItem heading="categories" size="large">
          <Categories page={page} />
        </GlossaryItem>
      </View>
    </IconModal>
  );
};

export default SortModal;
