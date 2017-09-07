"use strict";

// Costante per normalizzare gli argomenti di input
const NORM_FACTOR = 2;
const START_ROOM_INDEX = 1;

const read = function() {
  let args = process.argv.slice(NORM_FACTOR);

  if (args.length < 2) {
    process.stderr.write(
      "\nError | In order to execute the script you need to provide at least two arguments, the path where the maze map is stored and a starting point\n"
    );
    process.exit(1);
  }

  let start = Number(args[START_ROOM_INDEX]);
  if (!Number.isInteger(start) || start < 1) {
    process.stderr.write("\nError | Stanza di partenza non valida\n");
    process.exit(1);
  }

  return args;
};

module.exports.read = read;
