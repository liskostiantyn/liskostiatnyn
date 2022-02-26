function countTotalSalaries(salaries) {
    
    countTotalSalaries ({John: 4300, Ann: 5700, Pete: 4900});
}

console.log(countTotalSalaries ({John: 4300, Ann: 5700, Pete: 4900}));

function countTotalSalaries(obj) {
    return Object.values(obj).reduce((totalSalaries,c) => totalSalaries + c, 0);
  }