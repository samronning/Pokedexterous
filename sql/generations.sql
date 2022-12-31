select
    g.name || ' - ' || r.name as 'name',
    cast(g.id as string) as 'key'
from
    pokemon_v2_generation as g
    join pokemon_v2_region as r on r.id = g.region_id;