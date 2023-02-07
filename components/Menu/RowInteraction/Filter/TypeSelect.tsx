import { useState } from "react";
import { View } from "react-native";
import Selection from "../../../Common/Selection";

const TypeSelect = ({
  onSuperClose,
  type,
}: {
  onSuperClose: () => void;
  type: "1" | "2";
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View>
      <Selection
        border
        isInnerModal={true}
        loading={loading}
        data={{}}
        selectedKey={"0"}
        onSelect={() => {}}
        title={`Type ${type}`}
        onSuperClose={onSuperClose}
      />
    </View>
  );
};
export default TypeSelect;
