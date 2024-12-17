const celsius = document.querySelector("#celsius"),

fahrenheit = document.querySelector("#fahrenheit"),

kelvin = document.querySelector("#kelvin"),

rankine = document.querySelector("#rankine");


window.addEventListener("load", () => celsius.focus());


function celsiusToAll() {

    const celsiusValue = parseFloat(celsius.value);

    if (!isNaN(celsiusValue)) {

        fahrenheit.value = ((celsiusValue * 9) / 5 + 32).toFixed(2);
        kelvin.value = (celsiusValue + 273.15).toFixed(2);
        rankine.value = (((celsiusValue + 273.15) * 9) / 5).toFixed(2);

    } 
    
    else {
        clearFields();
    }

}

function fahrenheitToAll() {

    const fahrenheitValue = parseFloat(fahrenheit.value);

    if (!isNaN(fahrenheitValue)) {

        celsius.value = (((fahrenheitValue - 32) * 5) / 9).toFixed(2);

        kelvin.value = (((fahrenheitValue - 32) * 5) / 9 + 273.15).toFixed(2);

        rankine.value = fahrenheitValue + 459.67;

    } 
    
    else {
        clearFields();
    }

}

function kelvinToAll() {

    const kelvinValue = parseFloat(kelvin.value);

    if (!isNaN(kelvinValue)) {

        celsius.value = (kelvinValue - 273.15).toFixed(2);

        fahrenheit.value = (((kelvinValue - 273.15) * 9) / 5 + 32).toFixed(2);

        rankine.value = kelvinValue * 9 / 5;

    } 
    
    else {
        clearFields();
    }

}

function rankineToAll() {

    const rankineValue = parseFloat(rankine.value);

    if (!isNaN(rankineValue)) {

        celsius.value = (((rankineValue - 491.67) * 5) / 9).toFixed(2);

        fahrenheit.value = rankineValue - 459.67;

        kelvin.value = rankineValue * 5 / 9;
    }
    
    else {
        clearFields();
    }

}

function clearFields() {

    fahrenheit.value = '';
    kelvin.value = '';
    rankine.value = '';
}

celsius.addEventListener("input", celsiusToAll);

fahrenheit.addEventListener("input", fahrenheitToAll);

kelvin.addEventListener("input", kelvinToAll);

rankine.addEventListener("input", rankineToAll);

