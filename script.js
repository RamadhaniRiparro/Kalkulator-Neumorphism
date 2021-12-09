const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
 };
 
const tombol = document.querySelector(".container-tombol");
const layar = document.querySelector("#layar");
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
 }
tombol.addEventListener("click", function(e) {
    let tombolClick = e.target;
    let nilaiTombol = tombolClick.innerText;

    if(nilaiTombol == "AC") {
        layar.value = "";
    } else if(nilaiTombol == "<") {
        layar.value = layar.value.slice(0, -1);
    } else if(nilaiTombol == "=") {
        layar.value = eval(layar.value);
    } else {
        layar.value = layar.value + nilaiTombol;
    }
    
});