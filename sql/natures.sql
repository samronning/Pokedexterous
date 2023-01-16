SELECT
    nature.name as nature,
    increased_stats.name as increased_stat,
    decreased_stats.name as decreased_stat
FROM
    pokemon_v2_nature as nature
    left join pokemon_v2_stat as increased_stats on nature.increased_stat_id = increased_stats.id
    left join pokemon_v2_stat as decreased_stats on nature.decreased_stat_id = decreased_stats.id
order by
    nature.name;