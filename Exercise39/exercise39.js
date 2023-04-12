const promise1 = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    } else {
      reject("Not logged");
    }
  });
};

const promise2 = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 0.5) {
      resolve({ name: "John", age: 24 });
    } else  throw new Error("Name Wrong");
    }
  )};
  


promise1(true)
  .then((result) => {
    return promise2(result);
  })
  .then((person) => {
    console.log(person);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => console.log("finally"))

 





