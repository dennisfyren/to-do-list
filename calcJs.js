let currentValue;
let lastValue;
let currentOp;
let currentClick;
let displayValue = '';

const btnC = document.querySelector("#btn14");
btnC.addEventListener("click", () => {
    document.querySelector("#result").textContent = '';
    displayValue = '';
});

const btnCe = document.querySelector("#btn15")
btnCe.addEventListener("click", () => {
    let inputTemp = displayValue.length;
    displayValue = displayValue.slice(0, -1);
    document.querySelector("#result").textContent = displayValue;
    console.log(displayValue);
});

function operate() {
    return lastvalue + currentOp + currentValue;
};

function btnDetect (buttonClick) {
    currentValue = buttonClick
    displayValue = displayValue +`${buttonClick}`;
    document.querySelector("#result").textContent = displayValue;
};

function clear() {
    document.querySelector("#result").textContent = '';
    console.log("hi")
}





















/*
//Button press detection.

    let button0 = document.getElementById(0);
button0.onclick = write0;
    let button1 = document.getElementById(1);
button1.onclick = write1;
    let button2 = document.getElementById(2);
button2.onclick = write2;
    let button3 = document.getElementById(3);
button3.onclick = write3;
    let button4 = document.getElementById(4);
button4.onclick = write4;
    let button5 = document.getElementById(5);
button5.onclick = write5;
    let button6 = document.getElementById(6);
button6.onclick = write6;
    let button7 = document.getElementById(7);
button7.onclick = write7;
    let button8 = document.getElementById(8);
button8.onclick = write8;
    let button9 = document.getElementById(9);
button9.onclick = write9;
    
    let buttonAdd = document.getElementById(10);
buttonAdd.onclick = writeAdd;
    let buttonSubtract = document.getElementById(11);
buttonSubtract.onclick = writeSubtract;
    let buttonMultiply = document.getElementById(12);
buttonMultiply.onclick = writeMultiply;
    let buttonDivide = document.getElementById(13);
buttonDivide.onclick = writeDivide;
    let buttonC = document.getElementById(14);
buttonC.onclick = writeC;
    let buttonCe = document.getElementById(15);
buttonCe.onclick = writeCe;
    let buttonEqual = document.getElementById(16);
buttonEqual.onclick = writeEqual;

let inputNumber = ""

function write0() {
    console.log("0");
    inputNumber = inputNumber + "0"
    document.getElementById("input").innerHTML = inputNumber;
};
function write1() {
    console.log("1")
    inputNumber = inputNumber + "1"
    document.getElementById("input").innerHTML = inputNumber;
};
function write2() {
    console.log("2")
    inputNumber = inputNumber + "2"
    document.getElementById("input").innerHTML = inputNumber;
};
function write3() {
    console.log("3")
    inputNumber = inputNumber + "3"
    document.getElementById("input").innerHTML = inputNumber;
};
function write4() {
    console.log("4")
    inputNumber = inputNumber + "4"
    document.getElementById("input").innerHTML = inputNumber;
};
function write5() {
    console.log("5")
    inputNumber = inputNumber + "5"
    document.getElementById("input").innerHTML = inputNumber;
};
function write6() {
    console.log("6")
    inputNumber = inputNumber + "6"
    document.getElementById("input").innerHTML = inputNumber;
};
function write7() {
    console.log("7")
    inputNumber = inputNumber + "7"
    document.getElementById("input").innerHTML = inputNumber;
};
function write8() {
    console.log("8")
    inputNumber = inputNumber + "8"
    document.getElementById("input").innerHTML = inputNumber;
};
function write9() {
    console.log("9")
    inputNumber = inputNumber + "9"
    document.getElementById("input").innerHTML = inputNumber;
};
function writeAdd() {
    console.log("+")
    inputNumber = inputNumber + "+"
    document.getElementById("input").innerHTML = inputNumber;
};
function writeSubtract() {
    console.log("-")
    inputNumber = inputNumber + "-"
    document.getElementById("input").innerHTML = inputNumber;
};
function writeMultiply() {
    console.log("*")
    inputNumber = inputNumber + "*"
    document.getElementById("input").innerHTML = inputNumber;
};
function writeDivide() {
    console.log("/")
    inputNumber = inputNumber + "/"
    document.getElementById("input").innerHTML = inputNumber;
};
function writeC() {
    console.log("C")
    inputNumber = " "
    document.getElementById("input").innerHTML = inputNumber;
};
function writeCe() {
    console.log("CE")
    let inputTemp = inputNumber;
   // document.getElementById("input").innerHTML = inputNumber.length;
   // inputNumber = inputNumber.slice(inputTemp);
    console.log(inputNumber);
};
function writeEqual() {
    console.log("=")
};

//Button Display
*/