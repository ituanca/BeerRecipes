const validators ={
    "word": /.*[a-zA-Z]+.*/
}

window.onload = function () {
    manageFieldStatePositiveNumber("minABV")
    manageFieldStatePositiveNumber("maxABV")

    manageFieldStatePositiveNumberOrEmpty("volumeValue")

    manageFieldStatePositiveNumberOrEmpty("maltAmountValue1")
    manageFieldStatePositiveNumberOrEmpty("maltAmountValue2")
    manageFieldStatePositiveNumberOrEmpty("maltAmountValue3")

    manageFieldStatePositiveNumberOrEmpty("hopsAmountValue1")
    manageFieldStatePositiveNumberOrEmpty("hopsAmountValue2")
    manageFieldStatePositiveNumberOrEmpty("hopsAmountValue3")
    manageFieldStatePositiveNumberOrEmpty("abv")

    manageFieldStateWord("name", validators.word)
    manageFieldStateWordOrEmpty("volumeUnit",validators.word)

    manageFieldStateWordOrEmpty("maltName1",validators.word)
    manageFieldStateWordOrEmpty("maltAmountUnit1",validators.word)
    manageFieldStateWordOrEmpty("maltName2",validators.word)
    manageFieldStateWordOrEmpty("maltAmountUnit2",validators.word)
    manageFieldStateWordOrEmpty("maltName3",validators.word)
    manageFieldStateWordOrEmpty("maltAmountUnit3",validators.word)

    manageFieldStateWordOrEmpty("hopsName1",validators.word)
    manageFieldStateWordOrEmpty("hopsAmountUnit1",validators.word)
    manageFieldStateWordOrEmpty("hopsAdd1",validators.word)
    manageFieldStateWordOrEmpty("hopsAttribute1",validators.word)
    manageFieldStateWordOrEmpty("hopsName2",validators.word)
    manageFieldStateWordOrEmpty("hopsAmountUnit2",validators.word)
    manageFieldStateWordOrEmpty("hopsAdd2",validators.word)
    manageFieldStateWordOrEmpty("hopsAttribute2",validators.word)
    manageFieldStateWordOrEmpty("hopsName3",validators.word)
    manageFieldStateWordOrEmpty("hopsAmountUnit3",validators.word)
    manageFieldStateWordOrEmpty("hopsAdd3",validators.word)
    manageFieldStateWordOrEmpty("hopsAttribute3",validators.word)

    manageFieldStateWordOrEmpty("yeast",validators.word)
    
    manageFieldStateWordOrEmpty("food1",validators.word)
    manageFieldStateWordOrEmpty("food2",validators.word)
    manageFieldStateWordOrEmpty("food3",validators.word)
    
    document.getElementById("form").onreset = function () {
        let inputs = document.getElementsByTagName('input')
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            inputs[i].style.backgroundColor = 'white';
        }
    }

}

function manageFieldStatePositiveNumber(tag){
    document.getElementById(tag).onblur = function () {
        onInputBlurPositiveNumber(this);
    }
    document.getElementById(tag).onfocus = function () {
        onInputFocus(this);
    }
}

function manageFieldStatePositiveNumberOrEmpty(tag){
    document.getElementById(tag).onblur = function () {
        onInputBlurPositiveNumberOrEmpty(this);
    }
    document.getElementById(tag).onfocus = function () {
        onInputFocus(this);
    }
}

function manageFieldStateWord(tag, regex){
    document.getElementById(tag).onblur = function () {
        onInputBlurWord(this, regex);
    }
    document.getElementById(tag).onfocus = function () {
        onInputFocus(this);
    }
}

function manageFieldStateWordOrEmpty(tag, regex){
    document.getElementById(tag).onblur = function () {
        onInputBlurWordOrEmpty(this, regex);
    }
    document.getElementById(tag).onfocus = function () {
        onInputFocus(this);
    }
}


function getLabel(inputId) {
    let labels = document.getElementsByTagName('label')
    for (let i = 0; i < labels.length; i++) {
        if (labels[i].getAttribute("for") === inputId) {
            return labels[i].innerHTML
        }
    }
}


function isPositiveNumber(input) {  // is invalid if the textfield remains empty after losing focus
    return (!isNaN(input.value) && (parseFloat(input.value) >= 0));
}

function onInputBlurPositiveNumber(input) {
    if (isPositiveNumber(input)) {
        input.style.backgroundColor = 'white'
    } else {
        input.style.backgroundColor = 'orange'
    }
}


function onInputFocus(input) {
    input.style.backgroundColor = '#BACC81'
}


function isLessThan(min, max) {
    return parseFloat(min.value) < parseFloat(max.value);
}

function onInputBlurLessThan(inputMin, inputMax) {
    if (isPositiveNumber(inputMin) && isPositiveNumber(inputMax) && isLessThan(inputMin, inputMax)) {
        inputMin.style.backgroundColor = 'white'
        inputMax.style.backgroundColor = 'white'
    } else {
        inputMin.style.backgroundColor = 'orange'
        inputMax.style.backgroundColor = 'orange'
    }
}


function isPositiveNumberOrEmpty(input) {  // it's ok if the number field remains empty
    return ((!isNaN(input.value) && (parseFloat(input.value) >= 0)) || input.value === "");
}

function onInputBlurPositiveNumberOrEmpty(input) {
    if (isPositiveNumberOrEmpty(input)) {
        input.style.backgroundColor = 'white'
    } else {
        input.style.backgroundColor = 'orange'
    }
}


function isWordOrEmpty(input, regex) {
    return (input.value.match(regex) || input.value == "");
}

function onInputBlurWordOrEmpty(input, regex) {
    if (isWordOrEmpty(input,regex)) {
        input.style.backgroundColor = 'white'
    } else {
        input.style.backgroundColor = 'orange'
    }
}


function isWord(input, regex) {
    let value = input.value;
    return value.match(regex);
}

function onInputBlurWord(input, regex) {
    if (isWord(input,regex)) {
        input.style.backgroundColor = 'white'
    } else {
        input.style.backgroundColor = 'orange'
    }
}


function validateSearch() {

    errors = document.createElement('ul');

    minABV = document.getElementById("minABV");
    maxABV = document.getElementById("maxABV");

    onInputBlurPositiveNumber(minABV)
    onInputBlurPositiveNumber(maxABV)

    if (!isPositiveNumber(minABV)) {
        error = document.createElement('li')
        error.innerHTML = getLabel("minABV")
        errors.appendChild(error)
    }
    if (!isPositiveNumber(maxABV)) {
        error = document.createElement('li')
        error.innerHTML = getLabel("maxABV")
        errors.appendChild(error)
    }
    if (isPositiveNumber(minABV) && isPositiveNumber(maxABV)) {
        if (!isLessThan(minABV, maxABV)) {
            error = document.createElement('li')
            error.innerHTML = "The minimum level of ABV should be smaller than the maximum level of ABV"
            errors.appendChild(error)
        }
        onInputBlurLessThan(minABV, maxABV);
    }
    errors_par = document.createElement('p')
    errors_par.id = 'errors'

    if (errors.childNodes.length > 0) {
        if (!isPositiveNumber(minABV) || !isPositiveNumber(maxABV)) {
            errors_par.innerHTML = "Invalid inputs:"
        }
        errors_par.appendChild(errors)
    } else {
        errors_par.innerHTML = "Correct inputs"
    }
    document.getElementById("errors").replaceWith(errors_par)
}

let name_ = document.getElementById("name")
let volumeValue = document.getElementById("volumeValue")
let volumeUnit = document.getElementById("volumeUnit")
let maltName1 = document.getElementById("maltName1")
let maltAmountValue1 = document.getElementById("maltAmountValue1")
let maltAmountUnit1 = document.getElementById("maltAmountUnit1")
let maltName2 = document.getElementById("maltName2")
let maltAmountValue2 = document.getElementById("maltAmountValue2")
let maltAmountUnit2 = document.getElementById("maltAmountUnit2")
let maltName3 = document.getElementById("maltName3")
let maltAmountValue3 = document.getElementById("maltAmountValue3")
let maltAmountUnit3 = document.getElementById("maltAmountUnit3")
let hopsName1 = document.getElementById("hopsName1")
let hopsAmountValue1 = document.getElementById("hopsAmountValue1")
let hopsAmountUnit1 = document.getElementById("hopsAmountUnit1")
let hopsAdd1 = document.getElementById("hopsAdd1")
let hopsAttribute1 = document.getElementById("hopsAttribute1")
let hopsName2 = document.getElementById("hopsName2")
let hopsAmountValue2 = document.getElementById("hopsAmountValue2")
let hopsAmountUnit2 = document.getElementById("hopsAmountUnit2")
let hopsAdd2 = document.getElementById("hopsAdd2")
let hopsAttribute2 = document.getElementById("hopsAttribute2")
let hopsName3 = document.getElementById("hopsName3")
let hopsAmountValue3 = document.getElementById("hopsAmountValue3")
let hopsAmountUnit3 = document.getElementById("hopsAmountUnit3")
let hopsAdd3 = document.getElementById("hopsAdd3")
let hopsAttribute3 = document.getElementById("hopsAttribute3")
let yeast = document.getElementById("yeast")
let food1 = document.getElementById("food1")
let food2 = document.getElementById("food2")
let food3 = document.getElementById("food3")
let abv = document.getElementById("abv")

function validateAdd() {
    
    onInputBlurPositiveNumberOrEmpty(volumeValue)
    onInputBlurPositiveNumberOrEmpty(maltAmountValue1)
    onInputBlurPositiveNumberOrEmpty(maltAmountValue2)
    onInputBlurPositiveNumberOrEmpty(maltAmountValue3)
    onInputBlurPositiveNumberOrEmpty(hopsAmountValue1)
    onInputBlurPositiveNumberOrEmpty(hopsAmountValue2)
    onInputBlurPositiveNumberOrEmpty(hopsAmountValue3)
    onInputBlurPositiveNumberOrEmpty(abv)

    let regex = validators.word;

    onInputBlurWord(name_, regex)
    onInputBlurWordOrEmpty(volumeUnit, regex)
    onInputBlurWordOrEmpty(maltName1, regex)
    onInputBlurWordOrEmpty(maltAmountUnit1, regex)
    onInputBlurWordOrEmpty(maltName2, regex)
    onInputBlurWordOrEmpty(maltAmountUnit2, regex)
    onInputBlurWordOrEmpty(maltName3, regex)
    onInputBlurWordOrEmpty(maltAmountUnit3, regex)

    onInputBlurWordOrEmpty(hopsName1, regex)
    onInputBlurWordOrEmpty(hopsAmountUnit1, regex)
    onInputBlurWordOrEmpty(hopsAdd1, regex)
    onInputBlurWordOrEmpty(hopsAttribute1, regex)

    onInputBlurWordOrEmpty(hopsName2, regex)
    onInputBlurWordOrEmpty(hopsAmountUnit2, regex)
    onInputBlurWordOrEmpty(hopsAdd2, regex)
    onInputBlurWordOrEmpty(hopsAttribute2, regex)

    onInputBlurWordOrEmpty(hopsName3, regex)
    onInputBlurWordOrEmpty(hopsAmountUnit3, regex)
    onInputBlurWordOrEmpty(hopsAdd3, regex)
    onInputBlurWordOrEmpty(hopsAttribute3, regex)

    onInputBlurWordOrEmpty(yeast, regex)

    onInputBlurWordOrEmpty(food1, regex)
    onInputBlurWordOrEmpty(food2, regex)
    onInputBlurWordOrEmpty(food3, regex)

}

function validateAddReturnBoolean() {

    let regex = validators.word;

    if(!isPositiveNumberOrEmpty(volumeValue) || !isPositiveNumberOrEmpty(maltAmountValue1) ||
    !isPositiveNumberOrEmpty(maltAmountValue2) || !isPositiveNumberOrEmpty(maltAmountValue3) ||
    !isPositiveNumberOrEmpty(hopsAmountValue1) || !isPositiveNumberOrEmpty(hopsAmountValue2) || 
    !isPositiveNumberOrEmpty(hopsAmountValue3) || !isPositiveNumberOrEmpty(abv) || 
    !isWord(name_, regex) || !isWordOrEmpty(volumeUnit, regex) || 
    !isWordOrEmpty(maltName1, regex) || !isWordOrEmpty(maltAmountUnit1, regex) || 
    !isWordOrEmpty(maltName2, regex) || !isWordOrEmpty(maltAmountUnit2, regex) || 
    !isWordOrEmpty(maltName3, regex) || !isWordOrEmpty(maltAmountUnit3, regex) || 
    !isWordOrEmpty(hopsName1, regex) || !isWordOrEmpty(hopsAmountUnit1, regex) || 
    !isWordOrEmpty(hopsAdd1, regex) || !isWordOrEmpty(hopsAttribute1, regex) ||
    !isWordOrEmpty(hopsName2, regex) || !isWordOrEmpty(hopsAmountUnit2, regex) || 
    !isWordOrEmpty(hopsAdd2, regex) ||  !isWordOrEmpty(hopsAttribute2, regex) ||
    !isWordOrEmpty(hopsName3, regex) || !isWordOrEmpty(hopsAmountUnit3, regex) || 
    !isWordOrEmpty(hopsAdd3, regex) || !isWordOrEmpty(hopsAttribute3, regex) || 
    !isWordOrEmpty(yeast, regex) || !isWordOrEmpty(food1, regex) || !isWordOrEmpty(food2, regex) || !isWordOrEmpty(food3, regex)){
        return false;
    }
    return true;
}