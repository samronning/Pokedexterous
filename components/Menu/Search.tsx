import { TextInput, View, StyleSheet } from "react-native";
import colors from "../../colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import sizes from "../../sizes";

type SearchProps = { term: string; setTerm: (newSearchTerm: string) => void };
const Search = (props: SearchProps) => {
  const { term, setTerm } = props;
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.barContainer}
        cursorColor={colors.primary}
        placeholder="Search with name or dex number"
        value={term}
        onChangeText={(newSearchTerm) => {
          setTerm(newSearchTerm);
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
    width: "100%",
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
