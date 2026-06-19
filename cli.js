#!/usr/bin/env node

const readline = require ("readline/promises");

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

async function main() {
    
    const noToGuess = Math.floor(Math.random() * 100 + 1);
    
    console.log("Welcome to the Guessing Game !! \nI'm thinking of a number between 1 and 100 \nYou will a certain number of tries to guess it (depends on the difficulty) \n");
    
    let noOfTries;
    
    const start = await rl.question("Are you ready to play (Yes / No)\n");

    if(start.toLowerCase() === "no")
    {
        console.log("Goodbye !!");
        process.exit(0);
    }

    const difficulty = await rl.question("Pick your difficulty:\nEasy - 10 tries\nModerate - 5 tries\nHard - 3 tries\n");
    
    switch(difficulty.trim().toLowerCase()){
        case 'easy': noOfTries = 10;
        break;
        case 'moderate': noOfTries = 5;
        break;
        case 'hard' : noOfTries = 3;
        break;
        default: noOfTries = 5;
    }

    let noGuessed = Number(await rl.question("Guess the number\n"));
    
    while(noOfTries > 1)
    {
        if(noGuessed < noToGuess)
            console.log(`The number is greater than ${noGuessed}\n`);
        else if(noGuessed > noToGuess)
            console.log(`The number is lesser than ${noGuessed}\n`);
        else
        {
            console.log("You have guessed the number congratulations !! ");
            rl.close();
            return;
        }
        noGuessed = Number(await rl.question(""));
        noOfTries--;
    }

    rl.close();
    
    console.log("You have run out tries \nBetter luck next time !");
}

main();