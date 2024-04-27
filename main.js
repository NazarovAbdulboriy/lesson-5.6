// const title = document.createElement("h1");
// const text = document.createTextNode("Men zor kamandadanman!!");
// title.appendChild(text);
// const main= document.querySelector("body");
// main.appendChild(title)

let textRandom = prompt("Enter your text..");
let style = prompt("Enetr your text color..");
let style2 = prompt("Enetr your bg color..");
const title = document.createElement("h1");
const test = document.createTextNode(textRandom);
title.appendChild(test);
const main = document.querySelector("body");
main.appendChild(title);
title.style.color = style;
main.style.background = style2;


