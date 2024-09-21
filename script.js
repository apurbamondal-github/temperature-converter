function convertTemp() {
    let tempInput = parseFloat(document.getElementById("tempInput").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let convertedTemp;

    if (isNaN(tempInput)) {
        document.getElementById("convertedTemp").innerText = "Invalid Input";
        return;
    }

    // Convert from Celsius to other units
    if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") {
            convertedTemp = (tempInput * 9/5) + 32;
        } else if (toUnit === "Kelvin") {
            convertedTemp = tempInput + 273.15;
        } else {
            convertedTemp = tempInput;
        }
    }

    // Convert from Fahrenheit to other units
    if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") {
            convertedTemp = (tempInput - 32) * 5/9;
        } else if (toUnit === "Kelvin") {
            convertedTemp = (tempInput - 32) * 5/9 + 273.15;
        } else {
            convertedTemp = tempInput;
        }
    }

    // Convert from Kelvin to other units
    if (fromUnit === "Kelvin") {
        if (toUnit === "Celsius") {
            convertedTemp = tempInput - 273.15;
        } else if (toUnit === "Fahrenheit") {
            convertedTemp = (tempInput - 273.15) * 9/5 + 32;
        } else {
            convertedTemp = tempInput;
        }
    }

    // Display the result
    document.getElementById("convertedTemp").innerText = convertedTemp.toFixed(2);
}
