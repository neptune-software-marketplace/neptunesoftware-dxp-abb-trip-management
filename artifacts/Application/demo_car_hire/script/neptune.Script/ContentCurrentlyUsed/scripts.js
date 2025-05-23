//Preselect city
oInputSLocation.setValue("PAR - PARIS CITY, PARIS FRANCE")
oInputSLocationKey.setValue("PAR")

//Preselect all vehicles
oCBSelectAll.setSelected(true);
oCBSelectAll.fireSelect()

//Preselct Pick up and dropoff dateTime
const currentDate = new Date();

const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();

const hours = String(currentDate.getHours()+1).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

const pickUpDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

//Drop off Date, add one day
var dropoffDay = String(currentDate.getDate()+1).padStart(2, '0')
const dropOffDateTime = `${dropoffDay}-${month}-${year} ${hours}:${minutes}:${seconds}`;
console.log(dropOffDateTime);

oDateTimePickerPickup.setValue(pickUpDateTime)
oDateTimePickerDropoff.setValue(dropOffDateTime);



function getConfigValueAvis(propertyname) {
    //console.log("getConfigValueAvis called with:", propertyname)
    var data = modeloMultiModelConfigDataAvis.getData();
    var value = '';
    for (i = 0; i < data.length; i++) {
        if (data[i].name === propertyname){
            value = data[i].value;
            break;
        }
    }
    return value;
}


Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


function isFutureDate(idate){
    //var today = new Date().getTime();
    //console.log("today: ",today);

    //console.log("idate1: ",idate);
    //25/04/2020, 15:14
    var idate = idate.replace(",","");
    
    var dateDay = idate.substring(0,2);
    var dateMonth = idate.substring(3,5);
    var dateYear = idate.substring(6,10);
    var dateTime = idate.substring(11,16);
    //console.log(dateDay);
    //console.log(dateMonth);
    //console.log(dateYear);
    //console.log(dateTime);
    
    var NewDate = (dateYear+"-"+dateMonth+"-"+dateDay+"T"+dateTime);
    //console.log("NewDate: ",NewDate);
    //2020-04-25T12:00
    //console.log("date parse:",Date.parse(NewDate));
    var newDateParsed = Date.parse(NewDate);

    return (newDateParsed);
}

function resize(x) {
    var itemsFlex = document.querySelectorAll('[id*="oFlexBoxCars"]');
    var direction = "";

    for (i = 0; i < itemsFlex.length; i++) {
        if (x.matches) { // If media query matches
            itemsFlex[i].style.flexDirection = "column";
        } else {
            itemsFlex[i].style.flexDirection = "row";
        }
    }

    if (x.matches) { // If media query matches
        oImageVehicleResults.setWidth((window.innerWidth - 20) + "px");
        oImageVehicleRate.setWidth((window.innerWidth - 20) + "px");
        oButtonBackVehicleResults.setVisible(true);
    }
    else {
        oImageVehicleResults.setWidth("25rem");
        oImageVehicleRate.setWidth("25rem");
    }
    
}
var x = window.matchMedia("(max-width: 580px)");
resize(x); // Call listener function at run time
x.addListener(resize); // Attach listener function on state changes

sap.ui.getCore().attachInit(function(data) {
    OpenoMsgInfo();
});