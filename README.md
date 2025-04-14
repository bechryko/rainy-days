# RainyDays

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## About

Rainy Days is a strategy game greatly inspired by Mini Motorways. The goal is to build a sustainable transportational system in a randomly generated square-tiled map, where some tiles have rainclouds above them. Those clouds rain colored water which colors different objects below them, mostly cars. Your task is to deliver cars from the spawners to the destinations in the desired colors, while you have some control over their movement and behavior.

### Tile objects

In the game you can use the tiles to house different objects. These objects can be placed in two layer: road and building layer. Each tile has a capacity of one road and one building object.

#### Buildable

##### Roads

Basic roads are the most basic transportation method in the game. Cars travel on them with basic speed, and turn in a random direction at a crossroad. They are also exposed to the rain. Roads only automatically connect with other roads.

##### Tubes

Tubes are similar to roads, but they give protection to the cars, preventing them to be colored by the rain. Cars travel on them with basic speed, and turn in a random direction at a crossroad. Tubes only automatically connect with other tubes.

##### Colored gates

Colored gates are building objects. They prevent every car of the same color from going through them. The player gets two colored gates of random colors at the start of each game.

##### Timed gates

Timed gates are another kind of gates which have two states: open and closed. Open allows every car through, and closed prevent every as well. By default, timed gates change state every two seconds.

#### Generated

##### Spawners

They spawn cars of the given color every few seconds. They continuously spawn throughout the game, but later they might get upgraded to spawn cars more frequently.

##### Destinations

Destinations are the buildings where cars have to be transported with the given color. Destinations have a timer which decreases with each second, which you can increase back with each car delivered of the correct color. Cars of other colors are ignored by the destination. Destinations spawn continuously throughout the game.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Run as PWA

Run `npm run server` to build the project and open it with a http-server. Navigate to `http://localhost:8080/`. You can now install the application and use it in offline mode.
