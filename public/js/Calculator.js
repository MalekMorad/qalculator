export default class Calculator {
    history = ["0"];
    result;

    constructor() {
        const history = this.getHistory();

        if (typeof history !== 'undefined' && history != null) {
            this.history = history;
        }

        this.setHistory();
    }

    addValue(value) {
        try {
            const tryConversion = +value;

            if (tryConversion === "NaN") {
                this.addOperation(value);
                console.log(value)
            } else {
                this.history.push(value);
            }

        } catch (e) {
            if (typeof value === "string") {
                this.addOperation(value);
            }
        }
        this.setHistory();
    }

    addOperation(value) {
        switch (value) {
            case "add":
            case "+":
                this.history.push("+");
                break;
            case "subtract":
            case "-":
                this.history.push("-");
                break;
            case "divide":
            case "/":
                this.history.push("/");
                break;
            case "multiply":
            case "*":
                this.history.push("*");
                break;
            case "(":
            case ")":
                console.log(value)
                this.history.push(value);
                break;
            default:
                break;
        }
    }

    removeValue() {
        this.history.pop();
    }

    getHistory() {
        return JSON.parse(localStorage.getItem("history"));
    }

    deleteHistory() {
        this.history = [];
    }

    setHistory(history) {
        let hist = history;

        if (!history) {
            hist = this.history;
        }

        console.log("PUSHING HISTORY: ", hist);
        localStorage.setItem("history", JSON.stringify(hist))
    }

    getResult() {
        let result = "";
        for (value in this.history) {
            result += value;
        }

        this.result = result;
        return result;
    }

    getUrlParam() {
        return window.location.pathname.split("/").pop();
    }
}