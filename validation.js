const validators ={
    "word": /.*[a-zA-Z]+.*/
}

window.onload = function () {
    document.getElementById("minABV").onblur = function () {
        onInputBlurPositiveNumber(this);
    }
    document.getElementById("minABV").onfocus = function () {
        onInputFocus(this);
    }
    document.getElementById("maxABV").onblur = function () {
        onInputBlurPositiveNumber(this);
    }
    document.getElementById("maxABV").onfocus = function () {
        onInputFocus(this);
    }
    document.getElementById("volumeValue").onblur = function () {
        onInputBlurPositiveNumberOrEmpty(this);
    }
    document.getElementById("volumeValue").onfocus = function () {
        onInputFocus(this);
    }
    document.getElementById("maltAmountValue1").onblur = function () {
        onInputBlurPositiveNumberOrEmpty(this);
    }
    document.getElementById("maltAmountValue1").onfocus = function () {
        onInputFocus(this);
    }
    document.getElementById("maltAmountValue2").onblur = function () {
        onInputBlurPositiveNumberOrEmpty(this);
    }
    document.getElementById("maltAmountValue2").onfocus = function () {
        onInputFocus(this);
    }
    document.getElementById("maltAmountValue3").onblur = function () {
        onInputBlurPositiveNumberOrEmpty(this);
    }
    document.getElementById("maltAmountValue3").onfocus = function () {
        onInputFocus(this);
    }
    document.getElementById("hopsAmountValue1").onblur = function () {
        onInputBlurPositiveNumberOrEmpty(this);
    }
    document.getElementById("hopsAmountValue1").onfocus = function () {
        onInputFocus(this);
    }
    document.getElementById("hopsAmountValue2").onblur = function () {
        onInputBlurPositiveNumberOrEmpty(this);
    }
    document.getElementById("hopsAmountValue2").onfocus = function () {
        onInputFocus(this);
    }
    document.getElementById("hopsAmountValue3").onblur = function () {
        onInputBlurPositiveNumberOrEmpty(this);
    }
    document.getElementById("hopsAmountValue3").onfocus = function () {
        onInputFocus(this);
    }
    document.getElementById("abv").onblur = function () {
        onInputBlurPositiveNumberOrEmpty(this);
    }
    document.getElementById("abv").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("name").onblur = function () {
        onInputBlurWord(this, validators.word);
    }
    document.getElementById("name").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("volumeUnit").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("volumeUnit").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("maltName1").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("maltName1").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("maltAmountUnit1").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("maltAmountUnit1").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("maltName2").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("maltName2").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("maltAmountUnit2").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("maltAmountUnit2").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("maltName3").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("maltName3").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("maltAmountUnit3").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("maltAmountUnit3").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsName1").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsName1").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsAmountUnit1").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsAmountUnit1").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsAdd1").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsAdd1").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsAttribute1").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsAttribute1").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsName2").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsName2").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsAmountUnit2").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsAmountUnit2").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsAdd2").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsAdd2").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsAttribute2").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsAttribute2").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsName3").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsName3").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsAmountUnit3").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsAmountUnit3").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsAdd3").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsAdd3").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("hopsAttribute3").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("hopsAttribute3").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("yeast").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("yeast").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("food1").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("food1").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("food2").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("food2").onfocus = function () {
        onInputFocus(this);
    }

    document.getElementById("food3").onblur = function () {
        onInputBlurWordOrEmpty(this, validators.word);
    }
    document.getElementById("food3").onfocus = function () {
        onInputFocus(this);
    }
    
    document.getElementById("form").onreset = function () {
        let inputs = document.getElementsByTagName('input')
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            inputs[i].style.backgroundColor = 'white';
        }
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

function validateAdd() {
    
    name_ = document.getElementById("name")
    volumeValue = document.getElementById("volumeValue")
    volumeUnit = document.getElementById("volumeUnit")
    maltName1 = document.getElementById("maltName1")
    maltAmountValue1 = document.getElementById("maltAmountValue1")
    maltAmountUnit1 = document.getElementById("maltAmountUnit1")
    maltName2 = document.getElementById("maltName2")
    maltAmountValue2 = document.getElementById("maltAmountValue2")
    maltAmountUnit2 = document.getElementById("maltAmountUnit2")
    maltName3 = document.getElementById("maltName3")
    maltAmountValue3 = document.getElementById("maltAmountValue3")
    maltAmountUnit3 = document.getElementById("maltAmountUnit3")
    hopsName1 = document.getElementById("hopsName1")
    hopsAmountValue1 = document.getElementById("hopsAmountValue1")
    hopsAmountUnit1 = document.getElementById("hopsAmountUnit1")
    hopsAdd1 = document.getElementById("hopsAdd1")
    hopsAttribute1 = document.getElementById("hopsAttribute1")
    hopsName2 = document.getElementById("hopsName2")
    hopsAmountValue2 = document.getElementById("hopsAmountValue2")
    hopsAmountUnit2 = document.getElementById("hopsAmountUnit2")
    hopsAdd2 = document.getElementById("hopsAdd2")
    hopsAttribute2 = document.getElementById("hopsAttribute2")
    hopsName3 = document.getElementById("hopsName3")
    hopsAmountValue3 = document.getElementById("hopsAmountValue3")
    hopsAmountUnit3 = document.getElementById("hopsAmountUnit3")
    hopsAdd3 = document.getElementById("hopsAdd3")
    hopsAttribute3 = document.getElementById("hopsAttribute3")
    yeast = document.getElementById("yeast")
    food1 = document.getElementById("food1")
    food2 = document.getElementById("food2")
    food3 = document.getElementById("food3")
    abv = document.getElementById("abv")

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

    name_ = document.getElementById("name")
    volumeValue = document.getElementById("volumeValue")
    volumeUnit = document.getElementById("volumeUnit")
    maltName1 = document.getElementById("maltName1")
    maltAmountValue1 = document.getElementById("maltAmountValue1")
    maltAmountUnit1 = document.getElementById("maltAmountUnit1")
    maltName2 = document.getElementById("maltName2")
    maltAmountValue2 = document.getElementById("maltAmountValue2")
    maltAmountUnit2 = document.getElementById("maltAmountUnit2")
    maltName3 = document.getElementById("maltName3")
    maltAmountValue3 = document.getElementById("maltAmountValue3")
    maltAmountUnit3 = document.getElementById("maltAmountUnit3")
    hopsName1 = document.getElementById("hopsName1")
    hopsAmountValue1 = document.getElementById("hopsAmountValue1")
    hopsAmountUnit1 = document.getElementById("hopsAmountUnit1")
    hopsAdd1 = document.getElementById("hopsAdd1")
    hopsAttribute1 = document.getElementById("hopsAttribute1")
    hopsName2 = document.getElementById("hopsName2")
    hopsAmountValue2 = document.getElementById("hopsAmountValue2")
    hopsAmountUnit2 = document.getElementById("hopsAmountUnit2")
    hopsAdd2 = document.getElementById("hopsAdd2")
    hopsAttribute2 = document.getElementById("hopsAttribute2")
    hopsName3 = document.getElementById("hopsName3")
    hopsAmountValue3 = document.getElementById("hopsAmountValue3")
    hopsAmountUnit3 = document.getElementById("hopsAmountUnit3")
    hopsAdd3 = document.getElementById("hopsAdd3")
    hopsAttribute3 = document.getElementById("hopsAttribute3")
    yeast = document.getElementById("yeast")
    food1 = document.getElementById("food1")
    food2 = document.getElementById("food2")
    food3 = document.getElementById("food3")
    abv = document.getElementById("abv")

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