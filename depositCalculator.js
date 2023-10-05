/*
1. Депозирана сума – реално число в интервала [100.00 … 10000.00]

2. Срок на депозита (в месеци) – цяло число в интервала [1…12]

3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]
*/




function depositCalculator(index) {
   let  amountDeposited = Number(index[0]);
   let termOfTheDeposit = Number(index[1]);
   let annualInterestRate = Number(index[2]/100);
let sum = amountDeposited + termOfTheDeposit *((amountDeposited*annualInterestRate)/12);

console.log(sum);



}
depositCalculator(["200","3","5.7"])