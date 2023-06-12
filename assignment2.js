// const data = [
//   {
//     title: "Name",
//     description: "Triparna",
//   },
//   {
//     title: "Age",
//     description: "25",
//   },
//   {
//     title: "Coutry",
//     description: "India",
//   },
//   {
//     title: "Gender",
//     description: "Female",
//   },
// ];

// const hellohtml = "<h2>Hi</h2>";
// const hellocontainer = document.getElementById("demo");
// let i = 0;
// for (i = 0; i < 5; i++) {
//   const fragment = document.createElement("div"); // <div></div>
//   fragment.innerHTML = fragment.innerHTML + hellohtml;
//   hellocontainer.appendChild(fragment);
// }

// console.log(hellocontainer);

const hellohtml = "<h2>Hi</h2>";
const hellocontainer = document.getElementById("demo");
let i = 0;
for (i = 0; i < 5; i++) {
  const fragment = document.createElement("div"); // <div></div>
  fragment.innerHTML = fragment.innerHTML + hellohtml;
  hellocontainer.appendChild(fragment);
  //abc();
}

function abc() {
  return hellocontainer + i + hellocontainer;
}
// console.log(hellocontainer);

// let i = 0;
// const meatContainer = document.getElementById("meat-box");
// btnElement3.addEventListener("click", function () {
//   // console.log("I was clicked middle!!!");
//   // middleElement.style.display = isDisplayedStatus3 ? "none" : "block";
//   // isDisplayedStatus3 = !isDisplayedStatus3;
//   const fragment = document.createElement("section"); // <div></div>
//   fragment.innerHTML = meatHtml(i); //<div><div class="middle rectangle-meat"></div></div>
//   i += 1;
//   meatContainer.appendChild(fragment);
// });
