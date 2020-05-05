#!/usr/bin/env node
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var commander_1 = __importDefault(require("commander"));
clear();
console.log(
  chalk.red(figlet.textSync("pizza-cli", { horizontalLayout: "full" }))
);
commander_1.default
  .version("0.0.1")
  .description("example cli for ordering pizza")
  .option("-p, --peppers", "Add peppers")
  .option(
    "-c, --cheese <type>",
    "Add the specified type of cheese [marble, colby]"
  )
  .parse(process.argv);
console.log("you ordered a pizza with:");
if (commander_1.default.peppers) console.log("  - peppers");
if (commander_1.default.cheese) {
  console.log("  - %s cheese", commander_1.default.cheese);
} else {
  console.log("  - no cheese");
}
if (!process.argv.slice(2).length) {
  commander_1.default.outputHelp();
}
