const inputs = document.querySelectorAll("input");
const age = document.querySelectorAll("span");
const button = document.querySelector("button");
const labels = document.querySelectorAll(".error");

function calculateAge() {
  // Get input values
  const day = inputs[0].value.padStart(2, "0");
  const month = inputs[1].value.padStart(2, "0");
  const year = inputs[2].value;
  const birthDate = new Date(`${year}-${month}-${day}`);

  // Check that input values are valid
  if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
    if (inputs[0].value == "") {
      labels[0].innerHTML = "This field is required";
      labels[0].style.cssText = "display: flex; color: hsl(0, 100%, 67%);";
      for (let i = 0; i < age.length; i++) {
        age[i].textContent = "--";
      }
    }
    if (inputs[1].value == "") {
      labels[1].innerHTML = "This field is required";
      labels[1].style.cssText = "display: flex; color: hsl(0, 100%, 67%);";
      for (let i = 0; i < age.length; i++) {
        age[i].textContent = "--";
      }
    }
    if (inputs[2].value == "") {
      labels[2].innerHTML = "This field is required";
      labels[2].style.cssText = "display: flex; color: hsl(0, 100%, 67%);";
      for (let i = 0; i < age.length; i++) {
        age[i].textContent = "--";
      }
    }
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.cssText = "border: 1px solid hsl(0, 100%, 67%);";
      inputs[i].previousElementSibling.style.cssText = "color: hsl(0, 100%, 67%);"
    }
  } else {
    if (inputs[0].value != "") {
      labels[0].style.cssText = "display: none; color: hsl(0, 100%, 67%); ";
    }
    if (inputs[1].value != "") {
      labels[1].style.cssText = "display: none; color: hsl(0, 100%, 67%); ";
    }
    if (inputs[2].value != "") {
      labels[2].style.cssText = "display: none; color: hsl(0, 100%, 67%); ";
    }
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.cssText = "border: 1px solid hsl(0, 0%, 86%);";
      inputs[i].previousElementSibling.style.cssText = "color:hsl(0, 1%, 44%);"
    }
  }

  if (day > 31) {
    labels[0].innerHTML = "Must be a valid day";
    labels[0].style.cssText = "display: flex; color: hsl(0, 100%, 67%); ";
    inputs[0].style.cssText = "border: 1px solid hsl(0, 100%, 67%);";
    for (let i = 0; i < age.length; i++) {
      age[i].textContent = "--";
    }
  }
  if (month > 12) {
    labels[1].innerHTML = "Must be a valid month";
    labels[1].style.cssText = "display: flex; color: hsl(0, 100%, 67%); ";
    inputs[1].style.cssText = "border: 1px solid hsl(0, 100%, 67%);";
    for (let i = 0; i < age.length; i++) {
      age[i].textContent = "--";
    }
  }
  if (year >= new Date().getFullYear()) {
    labels[2].innerHTML = "Must be in the past";
    labels[2].style.cssText = "display: flex; color: hsl(0, 100%, 67%); ";
    inputs[2].style.cssText = "border: 1px solid hsl(0, 100%, 67%);";
    for (let i = 0; i < age.length; i++) {
      age[i].textContent = "--";
    }
  }

  // Calculate age
  const diff = new Date() - birthDate;
  const ageInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const ageInYears = Math.floor(ageInDays / 365);
  const ageInMonths = Math.floor((ageInDays % 365) / 30);

  // Update display
  age[0].textContent = ageInYears;
  age[1].textContent = ageInMonths;
  age[2].textContent = ageInDays % 30;
  for (let i = 0; i < age.length; i++) {
    if (age[i].textContent == "NaN" || age[i].textContent.includes("-")) {
      age[i].textContent = "--";
    }
  }
  button.style.backgroundColor = "hsl(259, 100%, 65%)"
}

// Add event listeners
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = input.value.replaceAll(/[^\d]/g, "");
  });
});

button.addEventListener("click", calculateAge);                