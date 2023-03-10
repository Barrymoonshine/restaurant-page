import createElements from "./print.js";

//Function to test that printMe from print.js has been imported correctly

const mainContent = document.getElementById("content");

mainContent.innerHTML = createElements();
console.log(createElements());
