const BASE_URL = "https://api.punkapi.com/v2/"

$(document).ready(function () {  // functia de start
    $("#beerList").hide();
    $("#search").on("click", search);
    $("#chatLoading").hide();

    $("#addBeer").hide();

    $("#addOrEditDiv").hide();
    $("#addBeerTitle").hide();
    $("#editBeerTitle").hide();
    $("#add").hide();
    $("#edit").hide();
    $("#displayAddForm").on("click", displayAddForm);
    $("#displayEditForm").on("click", displayEditForm);

    $("#add").on("click", add);
    $("#confirmAddition").hide();
    $("#rejectAddition").hide();

    // $("#editBeer").on("click", edit);
})

function search() {
    $("#chatLoading").show().delay(1000).queue(displayList)
    return false 
}

function displayList() {

    validateSearch();

    minABV = $("#minABV").val()
    maxABV = $("#maxABV").val()
    $("#chatLoading").hide().dequeue()

    if ((!isNaN(minABV) && (parseFloat(minABV) >= 0)) &&
        (!isNaN(maxABV) && (parseFloat(maxABV) >= 0)) &&
        parseFloat(minABV) < parseFloat(maxABV)) {

        $.ajax({
            url: BASE_URL + "beers?abv_gt=" + minABV + "&abv_lt=" + maxABV,
            method: "GET",
            contentType: "application/json",
            data: null,
            dataType: "json",
            success: (data) => {

                $("#beerList").empty();  // reinitialize the list
                $("#beerList").show()
                $("#addBeer").show()

                for (let i = 0; i < data.length; i++) {

                    let htmlString = "<div class=\"item\">";
                    htmlString = htmlString + "<br><h4>" + data[i].name + "</h4>" +
                        "<br>volume: " + data[i].volume.value + " " + data[i].volume.unit +
                        "<br><br>ingredients:<br>malt:<br>";

                    data[i].ingredients.malt.forEach(maltIngredient => {
                        htmlString = htmlString + "<li>" + maltIngredient.name + " - " +
                            maltIngredient.amount.value + " " + maltIngredient.amount.unit + "</li>"
                    });

                    htmlString = htmlString + "hops:<br>";

                    data[i].ingredients.hops.forEach(hopsIngredient => {
                        htmlString = htmlString + "<li>" + hopsIngredient.name + " - " +
                            hopsIngredient.amount.value + " " + hopsIngredient.amount.unit + ", add: " +
                            hopsIngredient.add + ", attribute: " + hopsIngredient.attribute + "</li>"
                    });

                    htmlString = htmlString + "yeast: " + data[i].ingredients.yeast + "<br><br>food pairing:";

                    data[i].food_pairing.forEach(food => {
                        htmlString = htmlString + "<li>" + food + "</li>";
                    });

                    htmlString = htmlString + "<br> abv: " + data[i].abv + "<br><button type=\"submit\" id=\"editBeer\"><strong>Edit</strong></button>" + "</div>";

                    $("<div>").html(htmlString).appendTo("#beerList")
                }
            },
            error: errorCallback
        })
    }
}

function displayAddForm() {
    $("#addOrEditDiv").show();
    $("#addBeerTitle").show();
    $("#add").show();
    $("#edit").hide();
    $("#editBeerTitle").hide();
    return false;
}

function displayEditForm() {
    $("#addOrEditDiv").show();
    $("#addBeerTitle").hide();
    $("#editBeerTitle").show();
    $("#add").hide();
    $("#edit").show();
    return false;
}

function add() {

    validateAdd()

    name_val = $("#name").val()
    volumeValue_val = $("#volumeValue").val()
    volumeUnit_val = $("#volumeUnit").val()
    maltName1_val = $("#maltName1").val()
    maltAmountValue1_val = $("#maltAmountValue1").val()
    maltAmountUnit1_val = $("#maltAmountUnit1").val()
    maltName2_val = $("#maltName2").val()
    maltAmountValue2_val = $("#maltAmountValue2").val()
    maltAmountUnit2_val = $("#maltAmountUnit2").val()
    maltName3_val = $("#maltName3").val()
    maltAmountValue3_val = $("#maltAmountValue3").val()
    maltAmountUnit3_val = $("#maltAmountUnit3").val()
    hopsName1_val = $("#hopsName1").val()
    hopsAmountValue1_val = $("#hopsAmountValue1").val()
    hopsAmountUnit1_val = $("#hopsAmountUnit1").val()
    hopsAdd1_val = $("#hopsAdd1").val()
    hopsAttribute1_val = $("#hopsAttribute1").val()
    hopsName2_val = $("#hopsName2").val()
    hopsAmountValue2_val = $("#hopsAmountValue2").val()
    hopsAmountUnit2_val = $("#hopsAmountUnit2").val()
    hopsAdd2_val = $("#hopsAdd2").val()
    hopsAttribute2_val = $("#hopsAttribute2").val()
    hopsName3_val = $("#hopsName3").val()
    hopsAmountValue3_val = $("#hopsAmountValue3").val()
    hopsAmountUnit3_val = $("#hopsAmountUnit3").val()
    hopsAdd3_val = $("#hopsAdd3").val()
    hopsAttribute3_val = $("#hopsAttribute3").val()
    yeast_val = $("#yeast").val()
    food1_val = $("#food1").val()
    food2_val = $("#food2").val()
    food3_val = $("#food3").val()
    abv_val = $("#abv").val()

    let food_pairing = [];
    if (food1_val !== "") {
        food_pairing.push(food1_val);
    }
    if (food2_val !== "") {
        food_pairing.push(food2_val);
    }
    if (food3_val !== "") {
        food_pairing.push(food3_val);
    }

    $("#chatLoading").hide().dequeue()

    if (validateAddReturnBoolean()) {

        $("#confirmAddition").show();
        $("#rejectAddition").hide();

        let htmlString = "<div class=\"item\">";
        htmlString = htmlString + "<br><h4>" + name_val + "</h4>" +
            "<br>volume: " + volumeValue_val + " " + volumeUnit_val +
            "<br><br>ingredients:<br>malt:<br>";

        if (maltName1_val !== "") {
            htmlString = htmlString + "<li>" + maltName1_val + " - " +
                maltAmountValue1_val + " " + maltAmountUnit1_val + "</li>"
        }
        if (maltName2_val !== "") {
            htmlString = htmlString + "<li>" + maltName2_val + " - " +
                maltAmountValue2_val + " " + maltAmountUnit2_val + "</li>"
        }
        if (maltName3_val !== "") {
            htmlString = htmlString + "<li>" + maltName3_val + " - " +
                maltAmountValue3_val + " " + maltAmountUnit3_val + "</li>"
        }

        htmlString = htmlString + "hops:<br>";

        if (hopsName1_val !== "") {
            htmlString = htmlString + "<li>" + hopsName1_val + " - " +
                hopsAmountValue1_val + " " + hopsAmountUnit1_val + ", add: " +
                hopsAdd1_val + ", attribute: " + hopsAttribute1_val + "</li>"
        }
        if (hopsName2_val !== "") {
            htmlString = htmlString + "<li>" + hopsName2_val + " - " +
                hopsAmountValue2_val + " " + hopsAmountUnit2_val + ", add: " +
                hopsAdd2_val + ", attribute: " + hopsAttribute2_val + "</li>"
        }
        if (hopsName3_val !== "") {
            htmlString = htmlString + "<li>" + hopsName3_val + " - " +
                hopsAmountValue3_val + " " + hopsAmountUnit3_val + ", add: " +
                hopsAdd3_val + ", attribute: " + hopsAttribute3_val + "</li>"
        }

        htmlString = htmlString + "yeast: " + yeast_val + "<br><br>food pairing:";

        food_pairing.forEach(food_val => {
            htmlString = htmlString + "<li>" + food_val + "</li>";
        });

        htmlString = htmlString + "<br> abv: " + abv_val + "</div>";

        $("<div>").html(htmlString).appendTo("#beerList")

    } else {
        $("#confirmAddition").hide();
        $("#rejectAddition").show();
    }

    return false
}


function errorCallback(xhr) {
    var message = "Generic error message";
    if (xhr.responseText) {
        message = $.parseJSON(xhr.responseText).message;
    }
    console.log(message);
}
