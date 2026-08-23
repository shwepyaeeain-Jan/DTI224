function convertUnit() {

    let value = parseFloat(document.getElementById("value").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (isNaN(value)) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
        return;
    }

    let meter;

    switch(from) {
        case "m":
            meter = value;
            break;

        case "km":
            meter = value * 1000;
            break;

        case "cm":
            meter = value / 100;
            break;

        case "ft":
            meter = value / 3.28084;
            break;

        case "in":
            meter = value / 39.3701;
            break;
    }

    let answer;

    switch(to) {
        case "m":
            answer = meter;
            break;

        case "km":
            answer = meter / 1000;
            break;

        case "cm":
            answer = meter * 100;
            break;

        case "ft":
            answer = meter * 3.28084;
            break;

        case "in":
            answer = meter * 39.3701;
            break;
    }

    document.getElementById("result").innerHTML =
        "Result: " + answer.toFixed(2) + " " + to;

}