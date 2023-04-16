const user = {
  id: 1,
  name: "John",
  age: 25,
};

function setStorage(obj, name) {
  const userLocalSet = JSON.stringify(obj);
  localStorage.setItem(name, userLocalSet);
}

function getStorage(val) {
  const userLocalGet = JSON.parse(localStorage.getItem(val));
  console.log(userLocalGet);
}

setStorage(user, "object1");
getStorage("object2");
