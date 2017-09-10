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

You could run the script by cloning the repository or by pulling a docker image

Example - cloning the repository:
```
git clone https://github.com/Sendo83/a-maze-ingly-puzzle.gitjava
/path/to/local/repository/npm install
/path/to/local/repository/npm test
/path/to/local/repository/node app.js ./testMap/map.json 3 "Knife" "Cigarettes"
```

Example - using Docker:
```
docker pull sendo/amazeingly
docker run --rm -v /path/to/testMap/<file_name>:/usr/app/testMap/map.json sendo/amazeingly ./testMap/map.json 2 "Knife" "Cigarettes"
```

Implementation notes
--------------------
* The script is implemented by using node.js v6.11.3. It's not guarenteed that it will work with node previous version.
* In order to execute the script the user should provide at list a valid JSON map and a valid start room (it should exists and the ID should be a number/integer)
* If the object to collect list is empty the script will print a result with only the start room
* An object to collect could be in more than one room, if it so the algorithm will try to collect the object contained in the room with a greater ID
