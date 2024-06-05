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

