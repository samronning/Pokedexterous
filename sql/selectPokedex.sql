select
    p.name,
    pdn.pokedex_number as dex_number,
    p.id as pokemon_id,
    group_concat(t.type_id) as type_ids
from
    pokemon_v2_pokemondexnumber as pdn
    join pokemon_v2_pokemon as p on pdn.pokemon_species_id = p.id
    join pokemon_v2_pokemontype as t on t.pokemon_id = p.id
where
    pdn.pokedex_id = (
        select
            min(id)
        from
            pokemon_v2_pokedex
        where
            region_id = ? or ? = ''
    )
group by
    p.id
order by
    pokedex_number
limit
    100;