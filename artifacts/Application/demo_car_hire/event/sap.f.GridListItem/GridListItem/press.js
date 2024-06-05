var context = oEvent.oSource.getBindingContext();
var details = context.getObject();

//console.log("Details: ",details);

//push image URL to next page
oImageVehicleRate.setSrc(details.imageUrl);

//push Title of car to next page
oTitleVehicleRateName.setText(details.name);

var classCode = details.classCode;
var rateCode = details.rateCode;

// var formattedDates = modeloMultiModelFormattedDateTime.getData();
// var formattedPickup = formattedDates.formattedPickup;
// var formattedDropff = formattedDates.formattedDropff;
// console.log("FPU:",formattedPickup);
// console.log("FDO:",formattedDropff);


//Date formatting on pickup&dropoff dates based on the DatePickers
function formatDate(dateString) {
   
    var date = new Date(dateString);

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 

    minutes = minutes < 10 ? '0' + minutes : minutes;

    return day + ' ' + months[monthIndex] + ' ' + year + ', ' + hours + ':' + minutes + ' ' + ampm;
}

var datePickup = oDateTimePickerPickup.getValue();
var dateDropOff = oDateTimePickerDropoff.getValue();

oTextVehicleRatePickupSelection.setText(formatDate(datePickup));
oTextVehicleRateDropoffSelection.setText(formatDate(dateDropOff));

// ----------------- Begin Setting the vehicle data ------------------------------

function generateShortUUID() {
    return 'xxxx-xxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var shortUUID = generateShortUUID();

//debugger;

var obj = {};

obj.id = shortUUID;
obj.brand = selectedLocation.brand;
obj.pickupLocationAddrLine1 = selectedLocation.addressLine1;
obj.pickupLocationAddrLine2 = selectedLocation.addressLine2;
obj.pickupLocationCity = selectedLocation.city;
obj.pickupLocationCountry = selectedLocation.countryCode;
obj.pickupLocationPostCode = selectedLocation.postalCode;
// obj.pickupLocationStateName = vehicleRate.reservation.pickup_location.address.state_name;
// obj.pickupLocationAirportBool = vehicleRate.reservation.pickup_location.location.airport_location;
// obj.pickupLocationCode = vehicleRate.reservation.pickup_location.location.code;
obj.pickupLocationHours = selectedLocation.hours;
obj.pickupLocationName = selectedLocation.name;
obj.pickupLocationTelephone = selectedLocation.telephone;
obj.dropoffLocationAddrLine1 = selectedLocation.addressLine1;
obj.dropoffLocationAddrLine2 = selectedLocation.addressLine2;
obj.dropoffLocationCity = selectedLocation.city;
obj.dropoffLocationCountry = selectedLocation.countryCode;
obj.dropoffLocationPostCode = selectedLocation.postalCode;
// obj.dropoffLocationStateName = vehicleRate.reservation.dropoff_location.address.state_name;
// obj.dropoffLocationAirportBool = vehicleRate.reservation.dropoff_location.location.airport_location;
// obj.dropoffLocationCode = vehicleRate.reservation.dropoff_location.location.code;
obj.dropoffLocationHours = selectedLocation.hours;
obj.dropoffLocationName = selectedLocation.name;
obj.dropoffLocationTelephone = selectedLocation.telephone;

//calculating rate manually (this was provided previously by another API which is not needed in this case)
// var pickupDate = new Date(modeloMultiModelFormattedDateTime.oData.formattedDropff.split("T")[0]),
//     dropoffDate = new Date(modeloMultiModelFormattedDateTime.oData.formattedPickup.split("T")[0]);

// var daysCarToBeHired = Math.abs(dropoffDate - pickupDate);
// daysCarToBeHired = Math.ceil(daysCarToBeHired / (1000 * 60 * 60 * 24)); //Conversion from miliseconds to Days -> can be 1 or more days

// obj.rateAmount = parseFloat(details.vehicleTotal) / daysCarToBeHired;
obj.rateAmount = details.vehicleTotal;
obj.rateCurrency = details.currency;
obj.rateDays = 1;
obj.rateCode = details.rateCode;
//--------------------------------------------------------------------------------------------------------

// obj.totalExtras = vehicleRate.reservation.rate_totals.totals.extras_total;
// obj.totalInsurance = vehicleRate.reservation.rate_totals.totals.insurance_total;
obj.totalReservation = details.reservation;
obj.totalTaxFees = (parseFloat(details.reservation) - parseFloat(details.vehicleTotal)).toFixed(2);
// obj.totalTaxFees = Math.round((obj.totalTaxFees * 100) / 100).toFixed(2);
obj.totalVehicleTotal = details.vehicleTotal;

//obj.taxBreakdown = vehicleRate.reservation.rate_totals.rate.taxes_fees.taxes;
//obj.feeBreakdown = vehicleRate.reservation.rate_totals.rate.taxes_fees.fees;

// obj.terms = vehicleRate.reservation.terms.endpoint;

// Define type of object for shopping cart
obj.objectType = "car";

//ModelData.Add(oSimpleFormVehicleRate, obj);

// var formattedDates = modeloMultiModelFormattedDateTime.getData();
// var formattedPickup = formattedDates.formattedPickup;
// var formattedDropff = formattedDates.formattedDropff;
obj.formattedPickup = formatDate(datePickup);
obj.formattedDropff = formatDate(dateDropOff);




var imageSrc = oImageVehicleRate.getSrc();
obj.imageSrc = imageSrc;

var carName = oTitleVehicleRateName.getText();
obj.name = carName;

//ID
// var transactionId = vehicleRate.transaction.transaction_id;
// obj.transactionId = transactionId;

//console.log("Rate Obj =",obj);
modeloSimpleFormVehicleAddressDetails.setData(obj);
modeloSimpleFormVehiclePriceDetails.setData(obj);

// ----------------- End Setting the vehicle data --------------------------------

oApp.toDetail(oPageVehicleRate);
