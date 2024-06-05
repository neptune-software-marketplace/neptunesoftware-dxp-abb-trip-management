//console.log("There you err")

oInputSFFrom.setValue("LON - LONDON CITY, LONDON UNITED KINGDOM")
oInputSFTo.setValue("PAR - PARIS CITY, PARIS FRANCE")

const currentDate = new Date();

const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

//console.log(formattedDate);
oDateSFDateRange.setValue(formattedDate + " - "+ formattedDate)