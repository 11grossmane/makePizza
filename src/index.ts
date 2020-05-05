#!/usr/bin/env node
import chalk = require("chalk");
import clear = require("clear");
import figlet = require("figlet");
import path = require("path");
import program from "commander";
import { gimme } from "gimme-state";

clear();
console.log(
  chalk.red(figlet.textSync("pizza-cli", { horizontalLayout: "full" }))
);

program
  .version("0.0.1")
  .description("example cli for ordering pizza")
  .option("-p, --peppers", "Add peppers")
  .option(
    "-c, --cheese <type>",
    "Add the specified type of cheese [marble, colby]"
  )
  .parse(process.argv);

console.log("you ordered a pizza with:");
if (program.peppers) console.log("  - peppers");
if (program.cheese) {
  console.log("  - %s cheese", program.cheese);
} else {
  console.log("  - no cheese");
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
