import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../Common/Icon";
import IconButton from "../Common/IconButton";
import { Category } from "./RowInteraction/Sort/Categories/Categories";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { selectSort, setSort } from "../../slices/sort";
const FilterIndicator = ({ category }: { category: Category[] }) => {
  const sortObj = useAppSelector(selectSort);
  const dispatch = useAppDispatch();
  const [chosenCategoryInfo, setChosenCategoryInfo] = useState<
    Category | null | undefined
  >(null);

  useEffect(() => {
    const newInfo = category?.find((categoryInfo) => {
      return categoryInfo.column === sortObj.column;
    });
    setChosenCategoryInfo(newInfo);
  }, [sortObj]);
  return chosenCategoryInfo ? (
    <View style={styles.filterIndicatorContainer}>
      <Icon
        iconName={chosenCategoryInfo?.iconName}
        color="light"
        size="small"
      />
      <IconButton
        size="small"
        highlightColor="light"
        onPress={() => {
          dispatch(
            setSort({
              ...sortObj,
              direction: sortObj.direction === "asc" ? "desc" : "asc",
            })
          );
        }}
        iconName={sortObj.direction === "asc" ? "arrow-up" : "arrow-down"}
        color="light"
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  filterIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: -40,
    right: 0,
    padding: 0,
  },
});
export default FilterIndicator;
