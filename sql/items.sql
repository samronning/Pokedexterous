SELECT
    item_names.name,
    effect_text.short_effect
FROM
    pokemon_v2_item as items
    join pokemon_v2_itemname as item_names on items.id = item_names.item_id
    and item_names.language_id = 9
    join pokemon_v2_itemeffecttext as effect_text on effect_text.item_id = items.id
group by
    item_names.name
order by
    item_names.name;