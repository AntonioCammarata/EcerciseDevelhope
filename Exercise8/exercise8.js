function multiplyByTwo(number) {
  let multiplier = 2;
  function inner() {
    return number * multiplier;
  }
  return inner;
}

console.log(multiplyByTwo(4)());
