function getBathroomsValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i = 0; i < uiBathrooms.length; i++) {
        if(uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }
    return -1; // Invalid Value
}

function getBedroomsValue() {
    var uiBedrooms = document.getElementsByName("uiBedrooms");
    for(var i = 0; i < uiBedrooms.length; i++) {
        if(uiBedrooms[i].checked) {
            return parseInt(uiBedrooms[i].value);
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var size = document.getElementById("uiSizeSqft").value; // Corrected variable name
    var lot_size = document.getElementById("uiLotSqft").value; // Corrected variable name
    var beds = getBedroomsValue(); // Corrected function call
    var baths = getBathroomsValue(); // Corrected function call
    var zipcodes = document.getElementById("uiZipcodes").value; // Corrected variable name
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url = "http://127.0.0.1:5000/predict_home_price";

    $.post(url, {
        beds: beds,
        baths: baths,
        size: parseFloat(size),
        lot_size: parseFloat(lot_size),
        zip_code: zipcodes // Corrected parameter name
    }, function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " USD</h2>";
        console.log(status);
    });
}

function onPageLoad() {
    console.log("document loaded");
    var url = "http://127.0.0.1:5000/get_zipcodes";
    $.get(url, function(data, status) {
        console.log("got response for get_zipcodes request");
        if(data && data.zipcodes) {
            var zipcodes = data.zipcodes;
            var uiZipcodes = document.getElementById("uiZipcodes");
            for(var i = 0; i < zipcodes.length; i++) {
                var opt = new Option(zipcodes[i]);
                uiZipcodes.add(opt);
            }
        }
    });    
}

window.onload = onPageLoad;