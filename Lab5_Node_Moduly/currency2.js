class Currency {
  constructor(rates) {
    this.rates = rates;
  }

  toPLN(amount, currencyCode) {
    const rate = this.rates[currencyCode];
    if (!rate) {
      throw new Error('Nieznany kod waluty: ' + currencyCode);
    }
    return amount * rate;
  }

  listRates() {
    return this.rates;
  }
}

module.exports = Currency;
