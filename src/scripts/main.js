for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey") // logs "ChickenMonkey" for multiples of both 5 and 7
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey") // logs "Monkey" for multiples of 7
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken") // logs "Chicken" for multiples of 5
    } else { 
        console.log(currentNumber) //logs all other numbers
    }
}
