const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};



 /* Modificando la proprietà di person2 abbaimo modificato in realta la proprità principale. Ovvero entrambi gli oggetti adesso avranno firstName = "simon",
 solamente che il console.log dell primo è avvenuto prima del cambio */

 console.log(person1);
person1["firstName"] = "Simon";
const person2 = person1;
console.log(person2);
