import { Dispatch } from "react";
import { View } from "react-native";
import Selection from "../Common/Selection";
import types, { TypeName } from "../Type/Types";

type TypeSelectionProps = {
  isFirstType?: boolean;
  otherType: TypeName;
  selectedType: TypeName;
  title: string;
  onSelect: Dispatch<TypeName>;
};
const TypeSelection = (props: TypeSelectionProps) => {
  const { isFirstType, otherType, selectedType, title, onSelect } = props;

  return (
    <View>
      <Selection
        disabled={!isFirstType && otherType === "none"}
        disabledKey={otherType}
        selectedKey={selectedType}
        title={title}
        onSelect={(selectedType: string) => {
          onSelect(selectedType as TypeName);
        }}
        loading={false}
        data={types}
      />
    </View>
  );
};
export default TypeSelection;
