import Calculator from "../public/js/Calculator.js";

const calc = new Calculator();

try{
    const getParams = new URLSearchParams(window.location.search);
    const pathParam = getParams.get("val");
    calc.addValue(pathParam);
    // parent.localStorage.setItem("history", parentHistory);
} catch (e) {
    console.log(e);
}

window.close();