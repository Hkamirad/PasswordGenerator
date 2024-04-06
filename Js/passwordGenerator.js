function generateBaseString(carMap = [false, false, false, false]) {
  const maps = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "!@*#$%^&",
  ];
  let baseString = "";
  for (let i = 0; i < maps.length; i += 1) {
    if (carMap[i]) {
      baseString += maps[i];
    }
  }
  return baseString;
}

const generatePassword = (count = 0, carMap = [true, true, true, true]) => {
  const baseString = generateBaseString(carMap);
  let password = "";
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * baseString.length);
    password += baseString[randomIndex];
  }
  return password;
};

function generatePasswordAndUpdate() {
  const output = document.querySelector("#output");
  const countInput = document.querySelector("#input");
  const count = parseInt(countInput.value);

  if (isNaN(count) || count <= 0) {
    output.innerHTML = "Please enter a valid number!";
    return;
  }

  const checkboxs = document.querySelectorAll('input[name="boxx"]');
  let atLeastOneChecked = false;

  checkboxs.forEach((checkbox) => {
    if (checkbox.checked) {
      atLeastOneChecked = true;
    }
  });

  if (!atLeastOneChecked) {
    output.innerHTML = "Please choose at least one checkbox!";
    return;
  }

  const charmap = [];
  checkboxs.forEach((checkbox) => {
    if (checkbox.checked) {
      charmap.push(true);
    } else {
      charmap.push(false);
    }
  });
  output.innerHTML = generatePassword(count, charmap);
}

const button = document.querySelector("#gen-button");

button.addEventListener("click", () => {
  generatePasswordAndUpdate();
});
