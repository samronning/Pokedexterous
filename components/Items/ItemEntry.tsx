import { View, Text } from "react-native";
import React, { PureComponent } from "react";
import { PokeItem } from "../../screens/Items";
import commonstyles from "../../commonstyles";

export class ItemEntry extends PureComponent<{ pokeItem: PokeItem }> {
  render() {
    const { name, short_effect } = this.props.pokeItem;
    return (
      <View style={{ justifyContent: "center", flex: 1, marginLeft: 10 }}>
        <Text style={commonstyles.darkSubtitle}>{name}</Text>
        <Text>{short_effect}</Text>
      </View>
    );
  }
}

export default ItemEntry;
