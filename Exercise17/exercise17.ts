enum Currency {
  Euro,
  Dollar,
}

interface Country {
  name: string;
  currency: Currency;
}

const countries: Country[] = [
  {
    name: "France",
    currency: Currency.Euro,
  },
  {
    name: "United States of America",
    currency: Currency.Dollar,
  },
  {
    name: "Italy",
    currency: Currency.Euro,
  },
  {
    name: "New Zealand",
    currency: Currency.Dollar,
  },
];

enum LanguageStatus {
  primary = "primary",
  secondary = "secondary",
}

const countryLanguages = [
  { language: "Spanish", status: LanguageStatus.primary },
  { language: "English", status: LanguageStatus.secondary },
];

export {};
