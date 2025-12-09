const currency1 = require('./currency1');
const Currency = require('./currency2');
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');

const currency2 = new Currency({
  EUR: 4.3,
  USD: 3.9,
  GBP: 5.0,
  CHF: 4.6,
  CZK: 0.18
});

const math2 = new MyMathModule();

console.log('Kursy (currency1):', currency1.listRates());
console.log('100 EUR -> PLN (currency1):', currency1.toPLN(100, 'EUR'));

console.log('Kursy (currency2):', currency2.listRates());
console.log('50 USD -> PLN (currency2):', currency2.toPLN(50, 'USD'));

console.log('math1 add(2,3):', math1.add(2, 3));
console.log('math1 pow(2,5):', math1.pow(2, 5));

console.log('math2 mul(4,7):', math2.mul(4, 7));
console.log('math2 div(10,2):', math2.div(10, 2));
