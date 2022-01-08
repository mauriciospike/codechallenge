/* 
  Dev: Mauricio Cárdenas
  Date of development: 07/January/2022
  Script purpose: This script sets an array of people to which then the date property will be added and then the script 
    will sort, check for active records and print them.
*/

let rockyObj = {
  'Name': 'Rocky',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'Back to The Future',
  'Status': 'Inactive'
}
let miroslavObj = {
  'Name': 'Miroslav',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'American Psycho',
  'Status': 'Active'
}
let donnyObj = {
  'Name': 'Donny',
  'Favorite Food': 'Singapore chow mei fun',
  'Favorite Movie': 'The Princess Bride',
  'Status': 'Inactive'
}
let mattObj = {
  'Name': 'Matt',
  'Favorite Food': 'Brisket Tacos',
  'Favorite Movie': 'The Princess Bride',
  'Status': 'Active'
}
let mauObj = {
  'Name': "Mauricio",
  'Favorite Food': "Burgers",
  'Favorite Movie': "Howl's moving castle",
  'Status': "Active"
}
let peopleArray = [rockyObj, miroslavObj, donnyObj, mattObj, mauObj];
//The property we will need for sorting must be set here
let property = "Name";

//Returns a formatted date string in dd/mm/yyyy
function dateFormat(date) {
  if (date == null) {
    throw "invalid date";
  }
  let d = date.getDate(),
    m = date.getMonth() + 1,
    y = date.getFullYear();
  return d + "/" + m + "/" + y;
}

//Checks if there are any active records in the array
function checkIfActive(arr) {
  return arr.some(elem => elem.Status === "Active");
}

let currentDate = dateFormat(new Date());
//if there are active records, they will be sorted using the variable property set above. If not, a message will display
if (checkIfActive(peopleArray)) {
  peopleArray.sort((a, b) => a[property].localeCompare(b[property]));
  /*
    once sorted, the date will be set for each person and will check if the properties "Date", "Name" and "Favorite Movie" are set. 
    if they are, the record will be displayed
  */
  peopleArray.forEach(function(person) {
    person.Date = currentDate;
    if(person.Status === "Active" && person['Date'] && person['Name'] && person['Favorite Movie']) {
      console.log(person);
    }
  });
} else {
  console.log("No active records were found");
}
