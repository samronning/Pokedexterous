select
    name,
    dex_number,
    speciesandtypes.pokemon_id as 'key',
    type_ids,
    group_concat(s.base_stat) as base_stats,
    sum(s.base_stat) as base_stats_total,
    avg(s.base_stat) as base_stats_avg
from
    (
        select
            p.name as 'name',
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
                    (
                        region_id = ?
                        or ? = ''
                    )
                    and (
                        p.name like ? || '%'
                        or pdn.pokedex_number like '%' || ?
                    )
            )
        group by
            p.id
    ) as speciesandtypes
    join pokemon_v2_pokemonstat as s on s.pokemon_id = speciesandtypes.pokemon_id
group by
    speciesandtypes.pokemon_id
order by
    dex_number;