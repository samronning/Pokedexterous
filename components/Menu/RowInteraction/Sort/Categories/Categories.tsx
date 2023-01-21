import { View } from "react-native";
import IconButton, { IconName } from "../../../../Common/IconButton";
import { SortColumn } from "../../../../../slices/sort";
import { useAppSelector, useAppDispatch } from "../../../../../hooks/redux";
import { selectSort, setSort } from "../../../../../slices/sort";

const CategoryRender = ({
  categoryList,
}: {
  categoryList: CategoryList | undefined;
}) => {
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
      {categoryList &&
        categoryList.map((category) => {
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

type Category = {
  column: SortColumn;
  displayText: string;
  iconName: IconName;
};

type CategoryList = Category[];

const Categories = ({ categoryList }: { categoryList: CategoryList }) => {
  return <CategoryRender categoryList={categoryList} />;
};

export default Categories;
export { Category, CategoryList };
