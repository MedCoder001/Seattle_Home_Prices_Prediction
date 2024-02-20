function getBathroomsValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i = 0; i < uiBathrooms.length; i++) {
        if(uiBathrooms[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1; // Invalid Value
}

function getBedroomsValue() {
    var uiBedrooms = document.getElementsByName("uiBedrooms");
    for(var i = 0; i < uiBedrooms.length; i++) {
        if(uiBedrooms[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var size = document.getElementById("uiSizeSqft"); // Corrected variable name
    var lot_size = document.getElementById("uiLotSqft"); // Corrected variable name
    var beds = getBedroomsValue(); // Corrected variable name
    var baths = getBathroomsValue(); // Corrected variable name
    var zip_codes = document.getElementById("uiZipcodes"); // Corrected variable name
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url = "http://127.0.0.1:5000/predict_home_price";

    $.post(url, {
        total_sqft: parseFloat(size.value),
        lot_size: parseFloat(lot_size.value),
        bedrooms: beds,
        bathrooms: baths,
        zip_code: zip_codes.value
    }, function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " USD</h2>";
        console.log(status);
    });
}

function onPageLoad() {
    console.log( "document loaded" )
    var url = "http://127.0.0.1:5000/get_zipcodes";
    $.get(url, function(data, status) {
        console.log("got response for get_zipcodes request");
        if(data) {
            var zipcodes = data.zip_code;
            var uiZipcodes = document.getElementById("uiZipcodes");
            $('#uiZipcodes').empty();
            for(var i = 0; i < zipcodes.length; i++) {
                var opt = new Option(zipcodes[i]);
                uiZipcodes.appendChild(opt);
            }
        }
    });    
}

window.onload = onPageLoad;