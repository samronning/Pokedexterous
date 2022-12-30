select
    p.name,
    p.id as pokemon_id,
    group_concat(t.type_id) as type_ids
from
    pokemon_v2_pokemon as p
    JOIN pokemon_v2_pokemontype as t on t.pokemon_id = p.id
group by
    p.id
limit
    10;