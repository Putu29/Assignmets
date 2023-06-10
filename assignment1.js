// const name1 = "name";
// var name2 = document.getElementById(name1);
// console.log(name2.value);

// const age = "age";
// var age1 = document.getElementById(age);
// console.log(age1.value);

const formDetails = document.getElementById("info");
formDetails.addEventListener("submit", function () {
  console.log("yes clicked");
  var Name1 = document.getElementById("name").value;
  var Age1 = document.getElementById("age").value;
  console.log(Name1);
  console.log(Age1);
});
