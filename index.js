// launcher program
'use strict';

const readline = require('readline-sync');
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require("cli-clear");

clear();

// let guess = readline.question('Guess '+i+' ');
clear();

console.log(
  chalk.yellow(
    figlet.textSync('SpaceGames', { horizontalLayout: 'full' })
  )
);
console.log('Which game to play?');
let guess = readline.question('> ');
