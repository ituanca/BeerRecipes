const BASE_URL = "https://api.punkapi.com/v2/"

$(document).ready(function(){  // functia de start
    $("#beerList").hide();
    $("#search").on("click", search);
    $("#chatLoading").hide();
    $("#addBeer").show();
    $("#add").on("click", add);
})

function search(){

    $("#minABV").prop("disabled",false)
    $("#maxABV").prop("disabled",false)

    minABV = $("#minABV").val()
    maxABV = $("#maxABV").val()
    $("#chatLoading").hide().dequeue()

    if(parseInt(minABV) < parseInt(maxABV)){
        $.ajax({
            url: BASE_URL + "beers?abv_gt=" + minABV + "&abv_lt=" + maxABV,
            method: "GET",
            contentType: "application/json",
            data: null,
            dataType: "json",
            success: (data) => {
                console.log(data)
                $("#beerList").show()

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

}

function errorCallback(xhr) {
    var message = "Generic error message";
    if( xhr.responseText ) { 
        message = $.parseJSON(xhr.responseText).message; 
    } 
    console.log( message );
}
