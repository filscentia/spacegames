
// starship-takeoff Example ported to JavaScript

'use strict';

const readline = require('readline-sync');
const chalk = require('chalk');

let weight = Math.floor((Math.random()*20)+1);
let gravity = Math.floor((Math.random()*40)+1);

let r = weight * gravity;

console.log(chalk.blue('Gravity is %d'),gravity);
console.log(chalk.blue('Type in force\n'));

let escaped = false;

for (var i=0; i< 10; i++){
   let guess = readline.question('Guess '+i+' ');
   if (guess == r){
      escaped = true;
      break;
   } else if (guess > r){
      console.log(chalk.red.bold('Too high\n'));
   } else {
      console.log(chalk.red.bold('Too low\n'));
   }

}

if (escaped) {
   console.log(chalk.green.bold('\nWell done, you\'ve esacped'));
} else {
   console.log(chalk.red.bold('\nOh well, never mind. It should have been %d'),r);
}
