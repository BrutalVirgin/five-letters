export class Verifications {

    firstVerification(guessWord: string[], correctWord: string[], final: string[]) {
        for (var i = 0; i < 5; i++) {
            if (guessWord[i] === correctWord[i]) {
                final[i] = String("!" + guessWord[i].toUpperCase() + "!")
            }
        }
    }

    secondVerification(guessWord: string[], correctWord: string[], final: string[]) {
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if (guessWord[i] === correctWord[j]) {
                    if (i === j) final[i] = String("!" + guessWord[i].toUpperCase() + "!")
                    else final[i] = String("." + guessWord[i].toUpperCase() + ".")
                }
            }
        }
    }

    checkIfWin(guessWord: string, correctWord: string): Boolean {
        if (guessWord === correctWord) {
            return true
        } else {
            return false
        }
    }

    wordValidator(word: string): Boolean {
        if (word.length < 5) {
            throw new Error("You need to enter a 5 letter word")
        }
        if (word.length > 5) {
            throw new Error("You need to enter a 5 letter word")
        }
        if (/^[a-zA-Z]+$/.test(word) === false) {
            throw new Error("Only letters can be entered")
        } else {
            return true
        }
    }
}