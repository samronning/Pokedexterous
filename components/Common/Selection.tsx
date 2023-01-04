import { useState, Dispatch } from "react";
import {
  FlatList,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import colors, { alpha } from "../../colors";
import sizes from "../../sizes";
import CommonModal from "./CommonModal";
import "./PressableTextButton";
import PressableTextButton from "./PressableTextButton";

type SelectionProps = {
  title: string;
  data: { key: string; name: string }[];
  selectedIndex: number;
  onSelect: Dispatch<number>;
  loading: boolean;
  onSuperClose?: () => void;
};
const Selection = (props: SelectionProps) => {
  const { data, title, selectedIndex, loading, onSelect, onSuperClose } = props;
  const [isOpen, setIsOpen] = useState(false);

  type SelectionRowProps = { item: any; index: number };
  const SelectionRow = (props: SelectionRowProps) => {
    const { item, index } = props;
    return (
      <Pressable onPress={() => onSelect(index)}>
        <View
          style={{
            borderBottomWidth: 3,
            borderBottomColor: colors.dark,
            backgroundColor:
              selectedIndex === index
                ? alpha("dark", "thin")
                : alpha("dark", "thick"),
            marginBottom: 2,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: sizes.fonts.large,
              fontWeight: "bold",
            }}
          >
            {item.name}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <PressableTextButton
        text={
          data[selectedIndex]?.name
            ? data[selectedIndex].name
            : "data loading..."
        }
        onPress={() => {
          setIsOpen(true);
        }}
      />
      <CommonModal
        title={title}
        visible={isOpen}
        transparent={true}
        isInnerModal={true}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        onSuperClose={onSuperClose}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            padding: 10,
          }}
        >
          {loading ? (
            <ActivityIndicator color={colors.primary} />
          ) : (
            <FlatList data={data} renderItem={SelectionRow} />
          )}
        </View>
      </CommonModal>
    </View>
  );
};

export default Selection;
