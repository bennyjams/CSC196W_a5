let number;
let numberSize;
let inputBox;

window.onload = () => {
  output = document.getElementById("printedInput");
  inputBox = document.getElementById("userInput");

  inputBox.style.fontSize = "12pt";
  inputBox.style.fontWeight = "normal";
};

let numberLarger = () => {
  let input = inputBox.value;

  console.log(input);

  inputBox.style.fontSize = "24pt";
};

let handleFancy = () => {
  inputBox.style.fontWeight = "bold";
  inputBox.style.color = "#00f";
  inputBox.style.textDecorationLine = "underline";
};

let handleBoring = () => {
  inputBox.style.fontWeight = "normal";
  inputBox.style.color = "black";
  inputBox.style.textDecorationLine = "none";
};

let Moo = () => {
  //Moo
  let input = inputBox.value;
  let words = input.split(" ");

  words = words.map((e) => {
    //
    let ret = e.charAt(0).toUpperCase() + e.substring(1);

    return ret;
  });
  input = words.join(" ");

  let sentences = input.split(".").join("-Moo.");

  inputBox.value = sentences;
  //ooM
};

let Moo2 = () => {
  //🐄
  let input = inputBox.value;

  inputBox.value = input.split(" ").join("🐄");

  //🐄🐄🐄🐄🐄🐄🐄🐄🐄
};
