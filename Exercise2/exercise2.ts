function doubleThePopulation(value: number) {
  return value * 2;
}

doubleThePopulation(5);

doubleThePopulation(8_526);

doubleThePopulation(6.12);

function languagesSpoken(
  country: string,
  language1: string,
  language2?: string
): any {
  let description = `The languages spoken in ${country} are:`;
  if (typeof language2 === "string") {
    description += `(${language2})`;
  }

  console.log(language1);

  console.log(language2);

  return description;
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");
