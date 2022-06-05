const maximumNumber = (...numbers) => {
    let maximum = 0;

    numbers.forEach((number) => {
        if (number > maximum) {
            maximum = number;
        }
    });

    return maximum;
}

console.log(maximumNumber(15, 17, 34, 58, 104, 588));