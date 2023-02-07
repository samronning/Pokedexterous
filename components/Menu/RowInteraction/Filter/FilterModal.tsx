import { useState } from "react";
import { View } from "react-native";
import IconModal from "../../../Common/IconModal";
import GenerationSelect from "./GenerationSelect";
import TypeSelect from "./TypeSelect";
import GlossaryItem from "../../../Common/GlossaryItem";

const FilterModalContent = ({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) => {
  const content = [
    {
      heading: "Generation",
      cmpnt: <GenerationSelect onSuperClose={() => setOpen(false)} />,
    },
    {
      heading: "Type 1",
      cmpnt: <TypeSelect onSuperClose={() => setOpen(false)} type="1" />,
    },
    {
      heading: "Type 2",
      cmpnt: <TypeSelect onSuperClose={() => setOpen(false)} type="2" />,
    },
  ];
  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        width: "70%",
        padding: 10,
      }}
    >
      {content.map(({ heading, cmpnt }) => (
        <GlossaryItem
          heading={heading}
          direction="row"
          key={heading}
          margin={1}
          justifyContent="space-between"
        >
          {cmpnt}
        </GlossaryItem>
      ))}
    </View>
  );
};

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
      <FilterModalContent setOpen={setOpen} />
    </IconModal>
  );
};
export default FilterModal;
