/*
const chek = () => {
  return fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}

const result = chek();
console.log(result);

const init = () => {
  console.log("A");
  fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
  .then(response => response.json())
  .then(data => {
    console.log("B");
    console.log(data)
  })
  console.log("c")
}
init()

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
  console.log(data);
  data.forEach(user => {
    console.log(user.email);
    console.log(user.id);
    console.log(user.username);
  })
})
  
 const chek = () => {
  fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    show(data.count)
  })
  .catch(error => console.error(error))
 }
 function show(count){
  console.log(` aaaaaaa${count} bbbbbbbbbbbbbbbb`)
 }
 chek();
 */
 function stringCheck(value) {
  // write your code here
    return value.every(function(x){
      return x === value[0];
    })
}
console.log(stringCheck(['Cssup', 'Cup']))