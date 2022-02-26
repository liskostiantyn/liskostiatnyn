function getSalariesSum(salaries) {
    let result = 0;
    for (let name in salaries) {
        result +=(salaries[name]) * 100;
    }
    return result / 100;
}

const salaries = {
    John: "4300.00",
    Ann: "5700.00",
    Pete: "4900.00",
};

const res = getSalariesSum(salaries);

console.log(`res`, res);