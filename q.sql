-- database: ./db.sqlite3
select
  "tours"."id",
  "tours"."city_id",
  "tours"."name",
  "tours"."slug",
  "aci"."name"
  -- "aco"."name",
  -- "dci"."name",
  -- min("flights"."price"),
  -- min("flights"."departure_date")
from
  "tours"
  inner join "cities" "aci" on "aci"."id" = "tours"."city_id"
  -- full outer join "flights" on "flights"."tour_id" = "tours"."id"
  -- inner join "countries" "aco" on "aco"."id" = "aci"."country_id"
  -- full outer join "cities" "dci" on "dci"."id" = "flights"."departure_city_id"
where
  "aci"."name" = 'Анталия'
group by
  "tours"."id"