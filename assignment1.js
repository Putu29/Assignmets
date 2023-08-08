// const formDetails = document.getElementById("info");
// formDetails.addEventListener("submit", function () {
//   console.log("yes clicked");
//   var Name1 = document.getElementById("name").value;
//   var Age1 = document.getElementById("age").value;
//   const obj = {
//     testName: Name1,
//     testAge: Age1,
//   };
//   //console.log(obj.testName);
//   localStorage.setItem("task", JSON.stringify(obj));
// });

// var value = localStorage.getItem("task");
// var getobject = JSON.parse(value);

// //document.getElementById("display").append(localStorage.getItem("task"));
// var myFormData = new myFormData();
// formDetails.addEventListener("submit", function () {
//   console.log("yes clicked");
//   if (getArray == null) {
//     var myFormData = [];
//   } else {
//     var value = localStorage.getItem("data");

//     var getArray = JSON.parse(value);
//     myFormData.push(getArray);
//     var Name1 = document.getElementById("name").value;
//     var Age1 = document.getElementById("age").value;

//     var data = {
//       testName: Name1,
//       testAge: Age1,
//     };
//     myFormData.push(data);
//     localStorage.setItem("data", JSON.stringify(myFormData));
//   }
// });
const formDetails = document.getElementById("info");
const render = document.getElementById("render");

formDetails.addEventListener("submit", function abc(event) {
  event.preventDefault();
  let value = [];
  const getArray = localStorage.getItem("data");
  if (getArray !== null) {
    value = JSON.parse(getArray);
  }

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  const data = {
    name,
    age,
  };
  value.push(data);
  localStorage.setItem("data", JSON.stringify(value));

  displayUI();
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
});

function displayUI() {
  render.innerHTML = "";
  const getvalue = localStorage.getItem("data");
  const value2 = JSON.parse(getvalue);
  for (let i = 0; i < value2.length; i++) {
    render.innerHTML =
      render.innerHTML +
      `<div class="style">` +
      `<p class="title2">Item added to the list!</p>` +
      `<h4 class="title">` +
      value2[i].name +
      `</h4>` +
      `<h4 class="title">` +
      value2[i].age +
      `</h4>` +
      `</div>`;
  }
}
displayUI();
