let numberPromis = new Promise((resolve, reject) => {
  let number = Math.random() * 100;
  if (number > 10) {
    resolve(number);
  } else {
    reject(number);
  }
});

console.log(numberPromis);
numberPromis
.then((val) => console.log(val))
.catch((err) => console.error(err));
