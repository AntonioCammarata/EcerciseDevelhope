function calculateAverageAge(persons) {
  const age_total = persons.reduce(
    (accumulator, person) => accumulator + person.age,
    0
  );
  const average_Age = age_total / persons.length;
  return average_Age;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const average_Age = calculateAverageAge(persons);
console.log(persons);
console.log(average_Age);
