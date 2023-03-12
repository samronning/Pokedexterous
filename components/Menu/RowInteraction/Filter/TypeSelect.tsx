import { useState } from "react";
import { View } from "react-native";
import Selection from "../../../Common/Selection";
import types, { TypeName } from "../../../Type/Types";
import { useAppSelector, useAppDispatch } from "../../../../hooks/redux";
import { selectType, setType } from "../../../../slices/type";

const TypeSelect = ({
  onSuperClose,
  type,
}: {
  onSuperClose: () => void;
  type: "1" | "2";
}) => {
  const selectedTypes = useAppSelector(selectType);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Selection
        border
        isInnerModal={true}
        loading={false}
        data={types}
        selectedKey={type === "1" ? selectedTypes.type1 : selectedTypes.type2}
        onSelect={(selection: string) => {
          dispatch(
            setType({
              type1:
                type === "1" ? (selection as TypeName) : selectedTypes.type1,
              type2:
                type === "2" ? (selection as TypeName) : selectedTypes.type2,
            })
          );
        }}
        title={`Type ${type}`}
        onSuperClose={onSuperClose}
      />
    </View>
  );
};
export default TypeSelect;
