const degree = document.querySelector('#degree')
const convertBtn = document.querySelector('#convtButton')
const degreeType = document.querySelector('#degreeType')

// Get the selected values
const selectedValues = Array.from(selectElement.options)
  .filter(option => option.selected)
  .map(option => option.value);

// Log the array to the console
console.log(selectedValues);


convertBtn.addEventListener('click',()=>{
    alert("wfqw")
    console.log(degree.value)
    console.log(degreeType.value)
})