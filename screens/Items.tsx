import { View, FlatList } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import openDatabase from "../db";
import readSqlFile from "../sql/readSql";
import ItemEntry from "../components/Items/ItemEntry";
import ListEntryContainer, {
  ListEntryHeight,
} from "../components/Common/ListEntryContainer";

const POKE_ITEM_HEIGHT = ListEntryHeight.medium;

type PokeItem = {
  name: string;
  short_effect: string;
};
const Abilities = () => {
  const [abilities, setAbilities] = useState<PokeItem[]>([]);

  const renderItem = useCallback(
    ({ item }: { item: PokeItem }) => (
      <ListEntryContainer height={POKE_ITEM_HEIGHT}>
        <ItemEntry pokeItem={item} />
      </ListEntryContainer>
    ),
    []
  );

  useEffect(() => {
    const getAbilities = async () => {
      const db = await openDatabase();
      const sql = await readSqlFile("items");
      db.transaction((t) => {
        t.executeSql(sql, [], (_, res) => {
          setAbilities(res.rows._array);
        });
      });
    };
    getAbilities();
  }, []);
  return (
    <View>
      <FlatList
        data={abilities}
        keyExtractor={(pokeitem) => pokeitem.name}
        renderItem={renderItem}
        getItemLayout={(data, index) => ({
          length: POKE_ITEM_HEIGHT,
          offset: POKE_ITEM_HEIGHT * index,
          index,
        })}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};
export { PokeItem };
export default Abilities;
