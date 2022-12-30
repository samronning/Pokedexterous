import { View } from "react-native";
import IconModal from "../../../Common/IconModal";
import GenerationSelect from "./GenerationSelect";

const FilterModal = () => {
  return (
    <IconModal iconName="filter" color="light" title="Filter" size="small">
      <View>
        <GenerationSelect />
      </View>
    </IconModal>
  );
};
export default FilterModal;
