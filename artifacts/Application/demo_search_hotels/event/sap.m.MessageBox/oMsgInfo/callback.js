oInputSLocation.setValue("LON - LONDON CITY, LONDON UNITED KINGDOM");
oInputSLocationKey.setValue("LON")
const currentDate = new Date();

const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth()).padStart(2, '0');
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;
oDateFrom.setValue(formattedDate);

const toDate = String(currentDate.getDate()+ 1).padStart(2, '0');
const formattedToDate = `${toDate}/${month}/${year}`;
oDateTo.setValue(formattedToDate)