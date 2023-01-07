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

type Selection = { name: string; color?: string; darkText?: boolean };
type SelectionProps = {
  customButton?: any;
  title: string;
  data: { [key: string]: Selection };
  selectedKey: string;
  onSelect: (key: string) => void;
  loading: boolean;
  onSuperClose?: () => void;
  isInnerModal?: boolean;
  disabled?: boolean;
  disabledKey?: string;
  border?: boolean;
};
const Selection = (props: SelectionProps) => {
  const {
    customButton,
    data,
    title,
    selectedKey,
    loading,
    onSelect,
    onSuperClose,
    isInnerModal,
    disabled,
    disabledKey,
    border,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const flatListData = Object.entries(data).map(([k, v]) => ({
    ...v,
    key: k,
  }));

  type SelectionRowProps = {
    item: Selection & { key: string };
  };
  const SelectionRow = (props: SelectionRowProps) => {
    const { item } = props;
    const { key, name } = item;
    return (
      <Pressable disabled={disabledKey === key} onPress={() => onSelect(key)}>
        <View
          style={{
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderColor: key === selectedKey ? colors.primary : colors.clear,
            marginBottom: 2,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: sizes.fonts.small,
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
      {customButton ? (
        <Pressable
          onPress={() => {
            setIsOpen(true);
          }}
        >
          {customButton}
        </Pressable>
      ) : (
        <PressableTextButton
          border={border}
          color={data[selectedKey]?.color}
          disabled={disabled}
          text={
            data[selectedKey]?.name ? data[selectedKey].name : "data loading..."
          }
          onPress={() => {
            setIsOpen(true);
          }}
        />
      )}

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
            <FlatList
              style={{ width: "100%" }}
              data={flatListData}
              renderItem={SelectionRow}
            />
          )}
        </View>
      </CommonModal>
    </View>
  );
};

export default Selection;
