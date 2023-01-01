import { Page } from "../../../../../App";
import { View } from "react-native";
import IconButton, { IconName } from "../../../../Common/IconButton";
import pokedexCategories from "./Pokedex";
import { SortColumn } from "../../../../../slices/sort";
import { useAppSelector, useAppDispatch } from "../../../../../hooks/redux";
import { selectSort, setSort } from "../../../../../slices/sort";

const pageToCategoryMap = {
  Pokedex: pokedexCategories,
};

const CategoryRender = ({ categoryList }: { categoryList: CategoryList }) => {
  const sortObj = useAppSelector(selectSort);
  const dispatch = useAppDispatch();
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
              border={category.column === sortObj.column}
              text={category.displayText}
              onPress={() => {
                dispatch(setSort({ ...sortObj, column: category.column }));
              }}
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
