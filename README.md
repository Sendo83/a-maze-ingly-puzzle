_A-Maze-ingly Retro Route Puzzle_

This is a JSON variant of [the problem described by this blog post](http://www.jonarcher.com/2010_01_01_archive.html).

Problem
-------

Write a program that will output a valid route one could follow to collect all specified items within a map.
The map is a json description of set of rooms with allowed path and contained object.

Exercise starts with an input of:
  - json reppresentation of map
  - starting room
  - list of object to collect

```
Room type allowed fields

  id: Integer
  name: String
  north: Integer //referring to a connected room
  south: Integer //referring to a connected room
  west: Integer //referring to a connected room
  east: Integer //referring to a connected room
  objects: List //of Objects

Object type allowed fields
  name: String //Object Name
```

Example
-------

Map
```json
{
  "rooms": [
    { "id": 1, "name": "Hallway", "north": 2, "objects": [] },
    { "id": 2, "name": "Dining Room", "south": 1, "west": 3, "east": 4, "objects": [] },
    { "id": 3, "name": "Kitchen","east":2, "objects": [ { "name": "Knife" } ] },
    { "id": 4, "name": "Sun Room","west":2, "objects": [ { "name": "Potted Plant" } ] }
  ]
}
```

Input
```
Start Room ID = 2
Objects To Collect = Knife, Potted Plant
```

Output

| ID | Room | Object collected|
|----|------|-----------------|
|2|Dining Room|None|
|1|Hallway|None|
|2|Dining Room|None|
|3|Kitchen|Knife|
|2|Dining Room|None|
|4|Sun Room|Potted Plant|

Additional Goals
----------------
  - [x] TDD approach.
  - [x] Build a Docker container with runnable code inside so that we can mount a volume in it and test on different maps.

Usage
------------------

This software can be run through a **Docker** container [`sendo/amazeingly`](https://hub.docker.com/r/sendo/amazeingly/).

Once you pull the container you can attach a volume containing the map file to use and then run the software with a specific input, like this:
```
docker run --rm -v /host/path/to/map:/testMap sendo/amazeingly /testMap/map.json 2 "<object_to_collect>"
```

If you prefer to run it without a Docker container you could clone my **github repository** [`sendo83/a-maze-ingly-puzzle`](https://github.com/Sendo83/a-maze-ingly-puzzle).

The software is based upon **JavaScript** and **Node.js v6.3.11** (there is _**no guarantee**_ that it will work with node previous version).

Once you clone the repository you should run:
```
npm install
```
This command will donwload all the needed dependencies defined inside package.json.

To run the software use the following command:
```
node /path/to/a-maze-ingly-puzzle/app.js /path/to/testMap "object_to_collect"
```
Here is an example using a predefined map:
```
node app.js ./testMap/map.json 2 "Knife" "Potted Plant" "Cigarettes"
```
In order to run the test use the follwing command:
```
/path/to/a-maze-ingly-puzzle/ npm test
```

Implementation notes
--------------------

I made the follwing assumptions:

1. Map should exists and should also be valid.
2. Rooms ID should start at least from 1.
3. Start room should exists otherwise the software will exit returning a proper error message.
4. If the start room ID it's not a number/integer the software will exit retruning a proper error message.
5. The script should be executed with at least a valid map and a valid start room. If it's not the software will exit returning a proper error message.
6. If one object to collect doesn't exists (e.g. it's not defined inside the map) the software will exit returning a proper error message.
7. A room could contains more than one object
8. An object to collect could be in only one room.
