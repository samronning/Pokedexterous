import { useState } from "react";
import { FlatList, Text } from "react-native";
import colors from "../../colors";
import CommonModal from "./CommonModal";
import "./PressableTextButton";
import PressableTextButton from "./PressableTextButton";

type SelectionProps = { data: { key: string; name?: string; value?: any }[] };
const Selection = (props: SelectionProps) => {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <PressableTextButton
        text={data[0].name ? data[0].name : data[0].value}
        onPress={() => {
          setIsOpen(true);
        }}
      />
      <CommonModal
        title="Generation"
        visible={isOpen}
        transparent={true}
        isInnerModal={true}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <Text>{item.name}</Text>;
          }}
        />
      </CommonModal>
    </>
  );
};

export default Selection;
