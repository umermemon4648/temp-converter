const degree = document.querySelector('#degree');
const degreeType = document.querySelector('#degreeType');
const convertBtn = document.querySelector('#convtButton');
const conversionOptions = document.querySelector('#conversionOptions');
const resultField = document.querySelector('#resultField');
const options = degreeType.options;
let tempScale = ['Celsius', 'Fahrenheit', 'Kelvin'];


window.onload = function() {
degree.focus()
}


degreeType.addEventListener('change', function() {
  // Clear conversionOptions
  conversionOptions.innerHTML = '';

  const selectedValue = degreeType.value;
  console.log('Selected value:', selectedValue);

  const unselectedOptions = tempScale.filter(val => val !== selectedValue);

  for (let i = 0; i < unselectedOptions.length; i++) {
    const option = document.createElement('option');
    option.value = unselectedOptions[i];
    option.textContent = unselectedOptions[i];
    conversionOptions.appendChild(option);
  }

  console.log('unselectedOptions:', unselectedOptions);
});

convertBtn.addEventListener('click', () => {

    // Perform validation
if (!degree.value || !degreeType.value) {
  resultField.value = !degree.value ? 'Please enter a value' : 'Please select a degree type';
} else if(!conversionOptions.value) {
  resultField.value = 'Please select a conversion type';
}

else{

  // Celsius to other temp scale
  if (degreeType.value=='Celsius' && conversionOptions.value=='Kelvin') {
    let kelvin = (parseFloat(degree.value)  + 273.15).toFixed(2)
    console.log("kelvin", kelvin);
    resultField.style.color = "green";
    resultField.value = kelvin + " K" ;
  }

  else if (degreeType.value=='Celsius' && conversionOptions.value=='Fahrenheit') {
    let fahrenheit = ((parseFloat(degree.value) * 9/5) +32).toFixed(2)
    console.log("celsius", fahrenheit);
    resultField.style.color = "green";
    resultField.value = fahrenheit + "\u00B0 F";
  }

  // Kelvin to other temp scale
  else if (degreeType.value=='Kelvin' && conversionOptions.value=='Celsius') {
    let celsius = (parseFloat(degree.value)  - 273.15).toFixed(2)
    console.log("celsius", celsius);
    resultField.style.color = "green";
    resultField.value = celsius + "\u00B0 C";
  }

  else if (degreeType.value=='Kelvin' && conversionOptions.value=='Fahrenheit') {
    let fahrenheit = ((parseFloat(degree.value)  - 273.15)* 9/5 + 32).
    console.log("celsius", fahrenheit);
    resultField.style.color = "green";
    resultField.value = fahrenheit + "\u00B0 F";
  }

   // fahrenheit to other temp scale
   else if (degreeType.value=='Fahrenheit' && conversionOptions.value=='Celsius') {
    let celsius = ((parseFloat(degree.value)  - 32)*5/9).toFixed(2)
    console.log("celsius", celsius);
    resultField.style.color = "green";
    resultField.value = celsius + "\u00B0 C";
  }

  // fahrenheit to other temp scale
  else if (degreeType.value=='Fahrenheit' && conversionOptions.value=='Kelvin') {
    let kelvin = ((parseFloat(degree.value)  - 32)*5/9+ 273.15).toFixed(2)
    console.log("kelvin", kelvin);
    resultField.style.color = "green";
    resultField.value = kelvin + " K";
  }





}


});