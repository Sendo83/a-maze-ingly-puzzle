"use strict";

// Costante per normalizzare gli argomenti di input
const NORM_FACTOR = 2;
const START_ROOM_INDEX = 1;
const MIN_ALLOWED_PAREMETERS = 1;
const ERR_EXIT_CODE = 1;

/**
 * 
 */
function read() {
  let args = process.argv.slice(NORM_FACTOR);

  if (args.length < MIN_ALLOWED_PAREMETERS) {
    process.stderr.write(
      "\nError | In order to execute the script you need to provide at least two arguments, the path where the maze map is stored and a starting point\n"
    );
    process.exit(ERR_EXIT_CODE);
  }

  let start = Number(args[START_ROOM_INDEX]);
  if (!Number.isInteger(start) || start < 1) {
    process.stderr.write("\nError | Stanza di partenza non valida\n");
    process.exit(ERR_EXIT_CODE);
  }

  return args;
};

module.exports.read = read;
