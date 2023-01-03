import { useState } from "react";
import { View } from "react-native";
import IconModal from "../../../Common/IconModal";
import GenerationSelect from "./GenerationSelect";
import GlossaryItem from "../../../Common/GlossaryItem";

const FilterModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <IconModal
      open={open}
      setOpen={setOpen}
      iconName="filter"
      color="light"
      title="Filter"
      size="small"
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100%",
          padding: 10,
        }}
      >
        <GlossaryItem heading="generation">
          <GenerationSelect onSuperClose={() => setOpen(false)} />
        </GlossaryItem>
      </View>
    </IconModal>
  );
};
export default FilterModal;
