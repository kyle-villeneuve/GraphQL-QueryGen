# GraphQL-QueryGen
Recursively generates an GraphQL query with every possible field to an arbitrary depth.

It can be a pain to exhaustively test GraphQL fields, and subfields many levels deep.
This tool will recursively walk your GraphQL schema and generate a deeply nested query along with a variables object which you can fill in with the appropriate type.

## Example:
*For brevity this example only goes one level deep.*

```ts
fetchGQL({
  endpoint: 'https://api.spacex.land/graphql/',
  query: IntrospectionDocument,
  variables: {},
})
  // field can also be a specific query e.g. `Query.users_by_pk`
  .then((res) => genQuery(res.data.__schema.types, 'SpaceX', 'Query', 1))
  .then(console.log)
```

##
returns
```graphql
query SpaceX (
 $users_by_pk_id: uuid!
 $capsule_id: ID!
 $core_id: ID!
 $dragon_id: ID!
 $history_id: ID!
 $landpad_id: ID!
 $launch_id: ID!
 $launchLatest_offset: Int
 $launchNext_offset: Int
 $launchpad_id: ID!
 $mission_id: ID!
 $payload_id: ID!
 $rocket_id: ID!
 $ship_id: ID!
) {
  users_by_pk(id: $users_by_pk_id) {
    name
    rocket
    twitter
  }
  capsule(id: $capsule_id) {
    id
    landings
    original_launch
    reuse_count
    status
    type
  }
  company {
    ceo
    coo
    cto_propulsion
    cto
    employees
    founded
    founder
    launch_sites
    name
    summary
    test_sites
    valuation
    vehicles
  }
  core(id: $core_id) {
    asds_attempts
    asds_landings
    block
    id
    original_launch
    reuse_count
    rtls_attempts
    rtls_landings
    status
    water_landing
  }
  dragon(id: $dragon_id) {
    active
    crew_capacity
    description
    dry_mass_kg
    dry_mass_lb
    first_flight
    id
    name
    orbit_duration_yr
    sidewall_angle_deg
    type
    wikipedia
  }
  history(id: $history_id) {
    details
    event_date_unix
    event_date_utc
    id
    title
  }
  landpad(id: $landpad_id) {
    attempted_landings
    details
    full_name
    id
    landing_type
    status
    successful_landings
    wikipedia
  }
  launch(id: $launch_id) {
    details
    id
    is_tentative
    launch_date_local
    launch_date_unix
    launch_date_utc
    launch_success
    launch_year
    mission_name
    static_fire_date_unix
    static_fire_date_utc
    tentative_max_precision
    upcoming
  }
  launchLatest(offset: $launchLatest_offset) {
    details
    id
    is_tentative
    launch_date_local
    launch_date_unix
    launch_date_utc
    launch_success
    launch_year
    mission_name
    static_fire_date_unix
    static_fire_date_utc
    tentative_max_precision
    upcoming
  }
  launchNext(offset: $launchNext_offset) {
    details
    id
    is_tentative
    launch_date_local
    launch_date_unix
    launch_date_utc
    launch_success
    launch_year
    mission_name
    static_fire_date_unix
    static_fire_date_utc
    tentative_max_precision
    upcoming
  }
  launchpad(id: $launchpad_id) {
    attempted_launches
    details
    id
    name
    status
    successful_launches
    wikipedia
  }
  mission(id: $mission_id) {
    description
    id
    name
    twitter
    website
    wikipedia
  }
  payload(id: $payload_id) {
    id
    manufacturer
    nationality
    orbit
    payload_mass_kg
    payload_mass_lbs
    payload_type
    reused
  }
  roadster {
    apoapsis_au
    details
    earth_distance_km
    earth_distance_mi
    eccentricity
    epoch_jd
    inclination
    launch_date_unix
    launch_date_utc
    launch_mass_kg
    launch_mass_lbs
    longitude
    mars_distance_km
    mars_distance_mi
    name
    norad_id
    orbit_type
    periapsis_arg
    periapsis_au
    period_days
    semi_major_axis_au
    speed_kph
    speed_mph
    wikipedia
  }
  rocket(id: $rocket_id) {
    active
    boosters
    company
    cost_per_launch
    country
    description
    first_flight
    id
    name
    stages
    success_rate_pct
    type
    wikipedia
  }
  ship(id: $ship_id) {
    abs
    active
    attempted_landings
    class
    course_deg
    home_port
    id
    image
    imo
    mmsi
    model
    name
    speed_kn
    status
    successful_landings
    type
    url
    weight_kg
    weight_lbs
    year_built
  }
}
```
variables
```JSON
{
    "users_by_pk_id": "uuid!",
    "capsule_id": "ID!",
    "core_id": "ID!",
    "dragon_id": "ID!",
    "history_id": "ID!",
    "landpad_id": "ID!",
    "launch_id": "ID!",
    "launchLatest_offset": "Int",
    "launchNext_offset": "Int",
    "launchpad_id": "ID!",
    "mission_id": "ID!",
    "payload_id": "ID!",
    "rocket_id": "ID!",
    "ship_id": "ID!"
}
```
