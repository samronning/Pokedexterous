import { useEffect } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import colors, { alpha } from "../../../colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import sizes from "../../../sizes";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { selectSearch, setSearch } from "../../../slices/search";
import { Page } from "../../../App";

type SearchProps = { page: Page };
const Search = (props: SearchProps) => {
  const { page } = props;
  const searchTerm = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();
  const clearText = () => {
    dispatch(setSearch(""));
  };
  useEffect(() => {
    clearText();
  }, [page]);
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.barContainer}
        cursorColor={colors.primary}
        placeholder="Search with name or dex number"
        value={searchTerm}
        onChangeText={(newSearchTerm) => {
          dispatch(setSearch(newSearchTerm));
        }}
      ></TextInput>
      <View style={styles.iconContainer}>
        <FontAwesome
          name={"search"}
          color={colors.light}
          size={sizes.icon.small}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: "absolute",
    paddingVertical: 5,
    borderColor: colors.light,
    borderWidth: 1,
    width: "100%",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  barContainer: {
    position: "relative",
    backgroundColor: colors.light,
    paddingVertical: 6,
    textAlign: "center",
    width: "70%",
    paddingHorizontal: 12,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.dark,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
  },
});
export default Search;
