'use strict';

const readline = require('readline-sync');
const chalk = require('chalk');
const clear = require("cli-clear");
const util = require("util");

let mines = Math.floor((Math.random()*3)+5);             // L
let people = Math.floor((Math.random()*60)+4);           // P
let money = Math.floor((Math.random()*500)+1) * people;  // M
let foodPrice = Math.floor((Math.random()*40)+80);       // FP
let orePerMine = Math.floor((Math.random()*40)+80);      // CE

let oreInStorage = 0;  // C
let satisfaction = 1;  // S
let year = 1;          // Y

let mineSellingPrice = Math.floor((Math.random()*2000)+2000); // LP
let oreSellingPrice = Math.floor((Math.random()*12)+7);       // C:

clear();

console.log('Year: '+year);
console.log('\n');
console.log(util.format('There are %d people in the colony',people));
console.log(util.format('You have %d mines and £ %d',mines,money));
console.log('\n');
console.log('Your mines produced %d tons each',orePerMine);

oreInStorage += orePerMine * mines;

console.log('Ore in store = %d',oreInStorage);
console.log('Selling');
console.log('Ore selling price = £%d',oreSellingPrice);
console.log('Mine selling price = £%d per mine',mineSellingPrice);

let oreToSell;
do {
   console.log('How much ore to sell?');
   oreToSell = readline.question('> ');
} while (oreToSell<0 || oreToSell>oreInStorage);

oreInStorage -= oreToSell;
money += (oreToSell * mineSellingPrice);

let minesToSell;
do {
   console.log('How many mines to sell?')
   minesToSell = readline.question('> ');
} while ( minesToSell<0 || minesToSell > mines);



console.log(util.format('selling %d',oreToSell));
