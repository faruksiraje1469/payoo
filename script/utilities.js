function getInputValueByID(id) {
   const value = document.getElementById(id).value;
   const convertedValue = parseFloat(value);
   return convertedValue;

}

function getInnerTextValueByID(id) {
   const value = document.getElementById(id).innerText;
   const convertedValue = parseFloat(value);
   return convertedValue;
}