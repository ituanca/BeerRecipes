const BASE_URL = "https://api.punkapi.com/v2/"

$(document).ready(function(){  // functia de start
    $("#beerList").hide();
    $("#search").on("click", search);
    $("#chatLoading").hide();
    $("#addBeer").hide();
    $("#add").on("click", add);
    $("#confirmAddition").hide();
})

function search(){
    $("#minABV").prop("disabled",false)
    $("#maxABV").prop("disabled",false)

    minABV = $("#minABV").val()
    maxABV = $("#maxABV").val()
    $("#chatLoading").hide().dequeue()

    if( (!isNaN(minABV) && (parseFloat(minABV) >= 0)) && 
        (!isNaN(maxABV) && (parseFloat(maxABV) >= 0)) && 
        parseFloat(minABV) < parseFloat(maxABV)){

        $.ajax({
            url: BASE_URL + "beers?abv_gt=" + minABV + "&abv_lt=" + maxABV,
            method: "GET",
            contentType: "application/json",
            data: null,
            dataType: "json",
            success: (data) => {
                console.log(data)
                $("#beerList").show()
                $("#addBeer").show()

                for(let i=0;i<data.length;i++){

                    let htmlString = "";
                    htmlString = htmlString + "<br><h4>" + data[i].name + "</h4>" + 
                    "<br>volume: " + data[i].volume.value + " " + data[i].volume.unit + 
                    "<br><br>ingredients:<br>malt:<br>";
                    
                    for(let j = 0; j < data[i].ingredients.malt.length; j++){
                        htmlString = htmlString + "<li>" + data[i].ingredients.malt[j].name + " - " + 
                        data[i].ingredients.malt[j].amount.value + " " + data[i].ingredients.malt[j].amount.unit + "</li>"
                    }

                    htmlString = htmlString +  "hops:<br>";

                    for(let j = 0; j < data[i].ingredients.hops.length; j++){
                        htmlString = htmlString + "<li>" + data[i].ingredients.hops[j].name + " - " + 
                        data[i].ingredients.hops[j].amount.value + " " + data[i].ingredients.hops[j].amount.unit + ", add: " +
                        data[i].ingredients.hops[j].add + ", attribute: " + data[i].ingredients.hops[j].attribute + "</li>"
                    }

                    htmlString = htmlString + "yeast: " + data[i].ingredients.yeast + "<br><br>food pairing:";

                    for(let j = 0; j < data[i].food_pairing.length; j++){
                        htmlString = htmlString + "<li>" + data[i].food_pairing[j] + "</li>";
                    }

                    htmlString = htmlString + "<br> abv: " + data[i].abv;

                    $("<div>").html(htmlString).appendTo("#beerList")
                }

            },
            error: errorCallback
        })
    }
}

function add(){
    // $("#name").prop("disabled",false)
    // $("#volumeValue").prop("disabled",false)
    // $("#volumeUnit").prop("disabled",false)

    // $("#maltName1").prop("disabled",false)
    // $("#maltAmountValue1").prop("disabled",false)
    // $("#maltAmountUnit1").prop("disabled",false)
    // $("#maltName2").prop("disabled",false)
    // $("#maltAmountValue2").prop("disabled",false)
    // $("#maltAmountUnit2").prop("disabled",false)
    // $("#maltName3").prop("disabled",false)
    // $("#maltAmountValue3").prop("disabled",false)
    // $("#maltAmountUnit3").prop("disabled",false)

    // $("#hopsName1").prop("disabled",false)
    // $("#hopsAmountValue1").prop("disabled",false)
    // $("#hopsAmountUnit1").prop("disabled",false)
    // $("#hopsAdd1").prop("disabled",false)
    // $("#hopsAttribute1").prop("disabled",false)
    // $("#hopsName2").prop("disabled",false)
    // $("#hopsAmountValue2").prop("disabled",false)
    // $("#hopsAmountUnit2").prop("disabled",false)
    // $("#hopsAdd2").prop("disabled",false)
    // $("#hopsAttribute2").prop("disabled",false)
    // $("#hopsName3").prop("disabled",false)
    // $("#hopsAmountValue3").prop("disabled",false)
    // $("#hopsAmountUnit3").prop("disabled",false)
    // $("#hopsAdd3").prop("disabled",false)
    // $("#hopsAttribute3").prop("disabled",false)

    // $("#yeast").prop("disabled",false)

    // $("#food1").prop("disabled",false)
    // $("#food2").prop("disabled",false)
    // $("#food3").prop("disabled",false)

    // $("#abv").prop("disabled",false)

    name_ = $("#name").val()
    volumeValue = $("#volumeValue").val()
    volumeUnit = $("#volumeUnit").val()
    maltName1 = $("#maltName1").val()
    maltAmountValue1 = $("#maltAmountValue1").val()
    maltAmountUnit1 = $("#maltAmountUnit1").val()
    maltName2 = $("#maltName2").val()
    maltAmountValue2 = $("#maltAmountValue2").val()
    maltAmountUnit2 = $("#maltAmountUnit2").val()
    maltName3 = $("#maltName3").val()
    maltAmountValue3 = $("#maltAmountValue3").val()
    maltAmountUnit3 = $("#maltAmountUnit3").val()
    hopsName1 = $("#hopsName1").val()
    hopsAmountValue1 = $("#hopsAmountValue1").val()
    hopsAmountUnit1 = $("#hopsAmountUnit1").val()
    hopsAdd1 = $("#hopsAdd1").val()
    hopsAttribute1 = $("#hopsAttribute1").val()
    hopsName2 = $("#hopsName2").val()
    hopsAmountValue2 = $("#hopsAmountValue2").val()
    hopsAmountUnit2 = $("#hopsAmountUnit2").val()
    hopsAdd2 = $("#hopsAdd2").val()
    hopsAttribute2 = $("#hopsAttribute2").val()
    hopsName3 = $("#hopsName3").val()
    hopsAmountValue3 = $("#hopsAmountValue3").val()
    hopsAmountUnit3 = $("#hopsAmountUnit3").val()
    hopsAdd3 = $("#hopsAdd3").val()
    hopsAttribute3 = $("#hopsAttribute3").val()
    yeast = $("#yeast").val()
    food1 = $("#food1").val()
    food2 = $("#food2").val()
    food3 = $("#food3").val()
    abv = $("#abv").val()

    let food_pairing = [];
    if(food1!==""){
        food_pairing.push(food1);
    }
    if(food2!==""){
        food_pairing.push(food2);
    }
    if(food3!==""){
        food_pairing.push(food3);
    }

    $("#chatLoading").hide().dequeue()

    let htmlString = "";
    htmlString = htmlString + "<br><h4>" + name_ + "</h4>" + 
    "<br>volume: " + volumeValue + " " + volumeUnit + 
    "<br><br>ingredients:<br>malt:<br>";
        
        if(maltName1!==""){
            htmlString = htmlString + "<li>" + maltName1 + " - " + 
            maltAmountValue1 + " " + maltAmountUnit1 + "</li>"
        }
        if(maltName2!==""){
            htmlString = htmlString + "<li>" + maltName2 + " - " + 
            maltAmountValue2 + " " + maltAmountUnit2 + "</li>"
        }
        if(maltName3!==""){
            htmlString = htmlString + "<li>" + maltName3 + " - " + 
            maltAmountValue3 + " " + maltAmountUnit3 + "</li>"
        }

        htmlString = htmlString +  "hops:<br>";

        if(hopsName1!==""){
            htmlString = htmlString + "<li>" + hopsName1 + " - " + 
            hopsAmountValue1 + " " + hopsAmountUnit1 + ", add: " +
            hopsAdd1 + ", attribute: " + hopsAttribute1 + "</li>"
        }
        if(hopsName2!==""){
            htmlString = htmlString + "<li>" + hopsName2 + " - " + 
            hopsAmountValue2 + " " + hopsAmountUnit2 + ", add: " +
            hopsAdd2 + ", attribute: " + hopsAttribute2 + "</li>"
        }
        if(hopsName3!==""){
            htmlString = htmlString + "<li>" + hopsName3 + " - " + 
            hopsAmountValue3 + " " + hopsAmountUnit3 + ", add: " +
            hopsAdd3 + ", attribute: " + hopsAttribute3 + "</li>"
        }

        htmlString = htmlString + "yeast: " + yeast + "<br><br>food pairing:";

        for(let j = 0; j < food_pairing.length; j++){
            htmlString = htmlString + "<li>" + food_pairing[j] + "</li>";
        }

        htmlString = htmlString + "<br> abv: " + abv;

        $("<div>").html(htmlString).appendTo("#beerList")

    // $.ajax({
    //     url: BASE_URL,
    //     method: "POST",
    //     contentType: "application/json",
    //     data: JSON.stringify({
    //         name:name_,
    //         volume:{
    //             value:volumeValue,
    //             unit:volumeUnit
    //         },
    //         ingredients:{
    //             malt:[
    //                 {
    //                     name:maltName1,
    //                     amount:{
    //                         value:maltAmountValue1,
    //                         unit:maltAmountUnit1
    //                     }
    //                 },
    //                 {
    //                     name:maltName2,
    //                     amount:{
    //                         value:maltAmountValue2,
    //                         unit:maltAmountUnit2
    //                     }
    //                 },
    //                 {
    //                     name:maltName3,
    //                     amount:{
    //                         value:maltAmountValue3,
    //                         unit:maltAmountUnit3
    //                     }
    //                 }
    //             ],
    //             hops:[
    //                 {
    //                     name:maltName1,
    //                     amount:{
    //                         value:maltAmountValue1,
    //                         unit:maltAmountUnit1
    //                     },
    //                     add:hopsAdd1,
    //                     attribute:hopsAttribute1
    //                 },
    //                 {
    //                     name:maltName2,
    //                     amount:{
    //                         value:maltAmountValue2,
    //                         unit:maltAmountUnit2
    //                     },
    //                     add:hopsAdd2,
    //                     attribute:hopsAttribute2
    //                 },
    //                 {
    //                     name:maltName3,
    //                     amount:{
    //                         value:maltAmountValue3,
    //                         unit:maltAmountUnit3
    //                     },
    //                     add:hopsAdd3,
    //                     attribute:hopsAttribute3
    //                 }
    //             ],
    //             yeast:yeast
    //         },
    //         food_pairing:food_pairing,
    //         abv:abv
    //     }),
    //     dataType: "json",
    //     success: (data) => {
    //         console.log(data)
    //         data = data
    //         $("#confirmAddition").show()
    //     },
    //     error: errorCallback
    // })
    return false
}

function errorCallback(xhr) {
    var message = "Generic error message";
    if( xhr.responseText ) { 
        message = $.parseJSON(xhr.responseText).message; 
    } 
    console.log( message );
}
