SELECT
    generation_id,
    name,
    effect,
    short_effect
FROM
    pokemon_v2_ability as ability
    join pokemon_v2_abilityeffecttext as effecttext on ability.id = effecttext.ability_id
    and effecttext.language_id = 9
    and is_main_series = 1
order by
    ability.name