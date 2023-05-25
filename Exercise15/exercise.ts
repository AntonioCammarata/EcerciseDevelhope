class Currency {
  name: string;
  code: string;
  symbol: string;

  constructor(name: string, code: string, symbol: string) {
    this.name = name;
    this.code = code;
    this.symbol = symbol;
  }

  public describe(): string {
    let description = `The ${this.name} currency `;
    description += `has the code ${this.code} `;
    description += `and uses the symbol ${this.symbol}.`;

    return description;
  }
}

const currencyNaira = new Currency("Naira", "NGN", "₦");

console.log(currencyNaira);

const descriptionNaira = currencyNaira.describe();
console.log(descriptionNaira);

const currencyUsDollar = new Currency("United States dollar", "USD", "$");

console.log(currencyUsDollar);

const descriptionUsDollars = currencyUsDollar.describe();
console.log(descriptionUsDollars);

export {};
