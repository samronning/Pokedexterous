import { View } from "react-native";
import IconButton from "../../../Common/IconButton";
import { useAppSelector, useAppDispatch } from "../../../../hooks/redux";
import { selectSort, setSort } from "../../../../slices/sort";

const Direction = () => {
  const sortObj = useAppSelector(selectSort);
  const { column, direction } = sortObj;
  const dispatch = useAppDispatch();
  const isAsc = direction === "asc";
  return (
    <View style={{ flexDirection: "row" }}>
      <IconButton
        text="Asc"
        bold={isAsc}
        border={isAsc}
        size="small"
        onPress={() => {
          dispatch(setSort({ ...sortObj, direction: "asc" }));
        }}
        iconName={isAsc ? "arrow-circle-up" : "arrow-circle-o-up"}
        color="primary"
      />
      <IconButton
        text="Desc"
        bold={!isAsc}
        border={!isAsc}
        size="small"
        onPress={() => {
          dispatch(setSort({ ...sortObj, direction: "desc" }));
        }}
        iconName={!isAsc ? "arrow-circle-down" : "arrow-circle-o-down"}
        color="primary"
      />
    </View>
  );
};
export default Direction;
