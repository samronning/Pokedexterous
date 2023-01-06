select
    *,
    (
        select
            base_stat
        from
            pokemon_v2_pokemonstat
        where
            pokemon_id = key
            and stat_id = 1
    ) as hp,
    (
        select
            base_stat
        from
            pokemon_v2_pokemonstat
        where
            pokemon_id = key
            and stat_id = 2
    ) as attack,
    (
        select
            base_stat
        from
            pokemon_v2_pokemonstat
        where
            pokemon_id = key
            and stat_id = 3
    ) as defense,
    (
        select
            base_stat
        from
            pokemon_v2_pokemonstat
        where
            pokemon_id = key
            and stat_id = 4
    ) as special_attack,
(
        select
            base_stat
        from
            pokemon_v2_pokemonstat
        where
            pokemon_id = key
            and stat_id = 5
    ) as special_defense,
    (
        select
            base_stat
        from
            pokemon_v2_pokemonstat
        where
            pokemon_id = key
            and stat_id = 6
    ) as speed
from
    (
        select
            name,
            dex_number,
            speciesandtypes.pokemon_id as 'key',
            type_names,
            group_concat(s.base_stat) as base_stats,
            sum(s.base_stat) as base_stats_total,
            avg(s.base_stat) as base_stats_avg
        from
            (
                select
                    p.name as 'name',
                    pdn.pokedex_number as dex_number,
                    p.id as pokemon_id,
                    group_concat((select name from pokemon_v2_type where id = t.type_id)) as type_names
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
    )
