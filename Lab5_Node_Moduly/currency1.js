const rates = {
  EUR: 4.3,
  USD: 3.9,
  GBP: 5.0,
  CHF: 4.6,
  CZK: 0.18
};

exports.toPLN = function (amount, currencyCode) {
  const rate = rates[currencyCode];
  if (!rate) {
    throw new Error('Nieznany kod waluty: ' + currencyCode);
  }
  return amount * rate;
};

exports.listRates = function () {
  return rates;
};
