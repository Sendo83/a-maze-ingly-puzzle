"use strict";

const printed = [];

const printResult = function(route, roomsMap, objectsToCollect) {
  process.stdout.write("\nID\tRoom\t\tObject Collected\n");
  process.stdout.write("----------------------------------------");

  route.forEach(roomId => {
    process.stdout.write("\n" + roomId + "\t" + roomsMap[roomId].name + "\t");
    if (!hasWhiteSpace(roomsMap[roomId].name)) process.stdout.write("\t");
    let objectsInRoom = roomsMap[roomId].objects;

    if (objectsInRoom.length < 1) {
      process.stdout.write("None");
    } else {
      printCollectedObjects(objectsInRoom, objectsToCollect);
    }
  });
  process.stdout.write("\n");

  return;
};

function printCollectedObjects(objectsInRoom, objectsToCollect) {
  let printNone = true;
  objectsInRoom.forEach(currentObject => {
    if (
      objectsToCollect.includes(currentObject.name) &&
      !printed.includes(currentObject.name)
    ) {
      process.stdout.write(currentObject.name + " ");
      printed.push(currentObject.name);
      printNone = false;
    } else if (printNone) {
      process.stdout.write("None");
    }
  });

  return printed;
}

/*
 Hack per correggere il problema della formattazione
 Funziona solo se i nomi delle stanze sono composti
 al massimo da due parole
*/
function hasWhiteSpace(s) {
  return /\s/g.test(s);
}

module.exports.printResult = printResult;
