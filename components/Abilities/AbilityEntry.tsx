import { View, Text } from "react-native";
import React from "react";
import { Ability } from "../../screens/Abilities";
import commonstyles from "../../commonstyles";

const AbilityEntry = (props: { ability: Ability }) => {
  const { ability } = props;
  return (
    <View style={commonstyles.entryContainer}>
      <Text style={{ ...commonstyles.darkText, marginLeft: 25 }}>
        {ability.name.toUpperCase()}
      </Text>
      <Text style={{ marginLeft: 10 }}>{ability.short_effect}</Text>
      <Text style={{ textAlign: "right", marginRight: 10 }}>
        Gen {ability.generation_id}
      </Text>
    </View>
  );
};

export default AbilityEntry;
