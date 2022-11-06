window.onload = function(){

    document.getElementById("minABV").onblur = function(){
        onInputBlur(this);
    }
    document.getElementById("minABV").onfocus = function(){
        onInputFocus(this);
    }

    document.getElementById("maxABV").onblur = function(){
        onInputBlur(this);
    }
    document.getElementById("maxABV").onfocus = function(){
        onInputFocus(this);
    }

    document.getElementById("form").onsubmit = function(ev){
        ev.preventDefault() 

        errors = document.createElement('ul');

        minABV = document.getElementById("minABV");
        maxABV = document.getElementById("maxABV");
        
        if (!isValid(minABV)){
            error = document.createElement('li')
            error.innerHTML = getLabel("minABV")
            errors.appendChild(error)
        }
        if (!isValid(maxABV)){
            error = document.createElement('li')
            error.innerHTML = getLabel("maxABV")
            errors.appendChild(error)
        }
        if (isValid(minABV) && isValid(maxABV)){
            if(!isLessThan(minABV, maxABV)){
                error = document.createElement('li')
                error.innerHTML = "The minimum level of ABV should be smaller than the maximum level of ABV"
                errors.appendChild(error)
                onInputBlurLessThan(minABV, maxABV);
            }
        }
        errors_par = document.createElement('p')
        errors_par.id = 'errors'

        if (errors.childNodes.length > 0){
            if(!isValid(minABV) || !isValid(maxABV)){
                errors_par.innerHTML= "Invalid inputs:"
            }
            errors_par.appendChild(errors)
        } else {
            errors_par.innerHTML = "Correct inputs"
        } 
        document.getElementById("errors").replaceWith(errors_par)
    }

    document.getElementById("form").onreset = function(){
        let inputs = document.getElementsByTagName('input')
        for (let i=0;i<inputs.length;i++){
            inputs[i].value = '';
            inputs[i].style.backgroundColor = 'white';
        }
    }


    document.getElementById("volumeValue").onblur = function(){
        onInputBlurAddBeer(this);
    }
    document.getElementById("maltAmountValue1").onblur = function(){
        onInputBlurAddBeer(this);
    }
    document.getElementById("maltAmountValue2").onblur = function(){
        onInputBlurAddBeer(this);
    }
    document.getElementById("maltAmountValue3").onblur = function(){
        onInputBlurAddBeer(this);
    }

}

function getLabel(inputId){
    let labels = document.getElementsByTagName('label')
    for (let i=0; i<labels.length; i++){
       if(labels[i].getAttribute("for")===inputId){
            return labels[i].innerHTML
       }
    }
}

function isValid (input){  // is invalid if the textfield remains empty after losing focus
    return (!isNaN(input.value) && (parseFloat(input.value) >= 0));
}

function onInputBlur(input){
    if (isValid(input)){
        input.style.backgroundColor = 'white'
    }else {
        input.style.backgroundColor = 'orange'
    }
}

function onInputFocus(input){
    input.style.backgroundColor = '#BACC81'
}

function isLessThan(min, max){
    return parseInt(min.value) < parseInt(max.value);
}

function onInputBlurLessThan(inputMin, inputMax){
    if (isValid(inputMin) && isValid(inputMax) && isLessThan(inputMin,inputMax)){
        inputMin.style.backgroundColor = 'white'
        inputMax.style.backgroundColor = 'white'
    }else {
        console.log("min orange")
        inputMin.style.backgroundColor = 'orange'
        inputMax.style.backgroundColor = 'orange'
    }
}

function isValidAddBeer (input){  // it's ok if the number field remains empty
    return ((!isNaN(input.value) && (parseFloat(input.value) >= 0)) || input.value=="");
}

function onInputBlurAddBeer(input){
    if (isValidAddBeer(input)){
        input.style.backgroundColor = 'white'
    }else {
        input.style.backgroundColor = 'orange'
    }
}