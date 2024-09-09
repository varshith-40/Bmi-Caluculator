// Function to calculate BMI
function calculateBmi() {
  // Get weight and height values from input
  var weight = parseFloat(document.bmiForm.realweight.value);
  var height = parseFloat(document.bmiForm.realheight.value) / 100; // Convert height to meters

  // Calculate BMI
  var bmi = (weight / (height * height)).toFixed(2);

  // Display BMI
  document.getElementById('yourbmi').textContent = bmi;

  // Display evaluation message based on BMI value
  var evaluationMessage = "";
  if (bmi < 18.5) {
    evaluationMessage = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    evaluationMessage = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    evaluationMessage = "Overweight";
  } else {
    evaluationMessage = "Obesity";
  }
  document.getElementById('evaluationMessage').textContent = evaluationMessage;
}

// Function to update the weight slider and number input
function showValWeight(value) {
  document.getElementById('myWeight').value = value;
  document.getElementById('inputWeight').value = value;
}

// Function to update the height slider and number input
function showValHeight(value) {
  document.getElementById('myHeight').value = value;
  document.getElementById('inputHeight').value = value;
}

// Add event listeners to sync the slider with the number input
document.getElementById('myWeight').addEventListener('input', function() {
  showValWeight(this.value);
});

document.getElementById('myHeight').addEventListener('input', function() {
  showValHeight(this.value);
});
