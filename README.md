# Number Guessing Game CLI

A simple command-line Number Guessing Game built with Node.js.

The game generates a random number between 1 and 100, and the player must guess it within a limited number of attempts based on the selected difficulty level.

## Features

* Random number generation between 1 and 100
* Three difficulty levels:

  * Easy: 10 attempts
  * Moderate: 5 attempts
  * Hard: 3 attempts
* Hint system:

  * Indicates whether the target number is higher or lower than the current guess
* Interactive command-line interface using Node.js Readline Promises API
* Uses async/await for cleaner asynchronous code

## Installation

Clone the repository:

```bash
git clone https://github.com/Rammstone/Cli_No_Guessing_Game.git
cd ng_game_cli
```

Install dependencies:

```bash
npm install
```

## Running the Game

Run directly with Node:

```bash
node cli.js
```

Or install globally:

```bash
npm install -g .
```

Then run:

```bash
gamecli
```

## Example Gameplay

```text
Welcome to the Guessing Game !!

I'm thinking of a number between 1 and 100.

Are you ready to play (Yes / No)
yes

Pick your difficulty:
Easy - 10 tries
Moderate - 5 tries
Hard - 3 tries

easy

Guess the number
50

The number is greater than 50

75

The number is lesser than 75

62

You have guessed the number congratulations !!
```

## Technologies Used

* Node.js
* Readline Promises API
* Async/Await
* JavaScript

## Learning Objectives

This project was built to practice:

* Building CLI applications with Node.js
* Working with asynchronous code using async/await
* Using the Readline Promises API
* Implementing game logic with loops and conditionals
* Publishing executable CLI commands using the `bin` field in `package.json`

## Future Improvements

* Input validation for non-numeric guesses
* Difficulty selection retry on invalid input
* High score tracking
* Replay option after the game ends
* Colored terminal output
* Statistics (wins/losses)

```
```
