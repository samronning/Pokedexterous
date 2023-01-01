import { View } from "react-native";
import IconModal from "../../../Common/IconModal";
import GenerationSelect from "./GenerationSelect";
import GlossaryItem from "../../../Common/GlossaryItem";

const FilterModal = () => {
  return (
    <IconModal iconName="filter" color="light" title="Filter" size="small">
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100%",
          padding: 10,
        }}
      >
        <GlossaryItem heading="generation">
          <GenerationSelect />
        </GlossaryItem>
      </View>
    </IconModal>
  );
};
export default FilterModal;
