const form = document.querySelector('form');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close-btn');
const height_input = document.querySelector('.height');
const weight_input = document.querySelector('.weight');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let height = parseInt(height_input.value);
  let weight = parseInt(weight_input.value);

  const bmi_score = document.querySelector('.bmi-score');
  const bmi_text = document.querySelector('.bmi-text');
  let text;

  if (height === '' || height < 0 || isNaN(height)) {
        alert("Please enter a valid height");
        height_input.focus();
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
        alert("Please enter a valid weight");
        weight_input.focus();
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if (bmi < 18.50) {
        text = 'น้ำหนักน้อย/ผอม';
      } else if (bmi >= 18.50  && bmi < 22.90) {
        text = 'ปกติ';
      } else if (bmi >= 23  && bmi < 24.90) {
        text = 'ท้วม';
      } else if (bmi >= 25  && bmi <  29.90) {
        text = 'อ้วน';
      } else {
        text = 'อ้วนมาก';
      }
      
      popup.style.display = 'block';
      bmi_score.innerHTML = bmi;
      bmi_text.innerHTML = text;
      height_input.value = '';
      weight_input.value = '';
      
  }
});

//Close the popup
close.addEventListener('click', function (e) {
    popup.style.display = 'none';
});
