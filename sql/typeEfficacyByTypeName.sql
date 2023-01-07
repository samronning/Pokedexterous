select
    CAST(damage_factor as REAL) / 100 as damage_factor,
    target.name as defender_name,
    attacker.name as attacker_name
from
    pokemon_v2_typeefficacy
    join pokemon_v2_type as target on target.id = target_type_id
    JOIN pokemon_v2_type as attacker on attacker.id = damage_type_id
where
    attacker.name = ?
    or target.name = ?
    or attacker.name = ?
    or target.name = ?