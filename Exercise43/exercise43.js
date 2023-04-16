const user = {
  id: 1,
  name: "John",
  age: 25,
};

function loadStorage() {
  const userlocal = JSON.stringify(user);
  localStorage.setItem("user", userlocal);
  console.log(userlocal);
}

loadStorage();
