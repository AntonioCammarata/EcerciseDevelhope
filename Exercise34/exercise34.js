function printAsyncName(callback, name) {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      console.log(name);
    }, 1000);
  }, 1000);
}
function sayHello() {
  console.log("Hello");
}

printAsyncName(sayHello, "Antonio");
