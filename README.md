# Five-letters

## Install
Run `npm start` to launch the server

## API

#### `GET:/start`
Beginning of the game. The game chooses the word that you have to guess.
___

#### `POST:/insert`
You need to pass in the body of the request a word consisting of 5 letters:\
`word`: "movie"
___

## Rules

Your task is to guess the five-letter word in six attempts. Each time you guess, you are told which of your chosen letters are in the target word and if they are in the right place.

 If you guessed the letter `m`, but not in the correct place, you will see `.M.` If you guessed the letter `m` in the right place you will see `!M!`
    