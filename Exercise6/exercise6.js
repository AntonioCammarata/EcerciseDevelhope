function printName() {
  let helloName = "Hello Jonh";

  function inner() {
    return helloName;
  }
  return inner();
}
console.log(printName());
