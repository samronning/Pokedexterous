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

type Selection = { name: string; color?: string };
type SelectionProps = {
  title: string;
  data: { [key: string]: Selection };
  selectedKey: string;
  onSelect: (key: string) => void;
  loading: boolean;
  onSuperClose?: () => void;
  isInnerModal?: boolean;
  disabled?: boolean;
  disabledKey?: string;
};
const Selection = (props: SelectionProps) => {
  const {
    data,
    title,
    selectedKey,
    loading,
    onSelect,
    onSuperClose,
    isInnerModal,
    disabled,
    disabledKey,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const flatListData = Object.entries(data).map(([k, v]) => ({
    ...v,
    key: k,
  }));

  type SelectionRowProps = {
    item: { name: string; key: string };
  };
  const SelectionRow = (props: SelectionRowProps) => {
    const { item } = props;
    const { key, name } = item;
    return (
      <Pressable disabled={disabledKey === key} onPress={() => onSelect(key)}>
        <View
          style={{
            borderBottomWidth: 3,
            borderBottomColor: colors.dark,
            backgroundColor:
              selectedKey === key
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
            {name}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <PressableTextButton
        disabled={disabled}
        text={
          data[selectedKey]?.name ? data[selectedKey].name : "data loading..."
        }
        onPress={() => {
          setIsOpen(true);
        }}
      />
      <CommonModal
        title={title}
        visible={isOpen}
        transparent={true}
        isInnerModal={isInnerModal}
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
            <FlatList data={flatListData} renderItem={SelectionRow} />
          )}
        </View>
      </CommonModal>
    </View>
  );
};

export default Selection;
