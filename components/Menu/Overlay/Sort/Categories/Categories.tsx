import { Page } from "../../../../../App";
import { View } from "react-native";
import IconButton, { IconName } from "../../../../Common/IconButton";
import pokedexCategories from "./Pokedex";
import { SortColumn } from "../../../../../slices/sort";

const pageToCategoryMap = {
  Pokedex: pokedexCategories,
};

const CategoryRender = ({ categoryList }: { categoryList: CategoryList }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 10,
        justifyContent: "space-evenly",
      }}
    >
      {categoryList.map((category) => {
        return (
          <View style={{}} key={category.column}>
            <IconButton
              iconName={category.iconName}
              color="primary"
              size="small"
              text={category.displayText}
              onPress={() => {}}
            />
          </View>
        );
      })}
    </View>
  );
};

type CategoryList = {
  column: SortColumn;
  displayText: string;
  iconName: IconName;
}[];

const Categories = ({ page }: { page: Page }) => {
  switch (page) {
    case "Pokedex": {
      return <CategoryRender categoryList={pageToCategoryMap[page]} />;
    }
    default:
      return null;
  }
};

export default Categories;
export { CategoryList };
