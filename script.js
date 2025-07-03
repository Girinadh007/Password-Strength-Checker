function checkPassword() {
  const password = document.getElementById("password").value;
  let score = 0;
  let suggestions = [];

  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const longLengthBonus = password.length >= 12;

  if (hasLength) score += 2;
  else suggestions.push("Use at least 8 characters.");

  if (hasUpper) score++;
  else suggestions.push("Add uppercase letters.");

  if (hasLower) score++;
  else suggestions.push("Add lowercase letters.");

  if (hasNumber) score++;
  else suggestions.push("Include numbers.");

  if (hasSpecial) score++;
  else suggestions.push("Use special characters like !@#$.");

  if (longLengthBonus) score++;

  let resultText = "";
  let comment = "";

  if (score <= 2) {
    resultText = "🔴 Weak";
    comment = suggestions.join(" ");
  } else if (score <= 4) {
    resultText = "🟡 Moderate";
    comment = "You're getting there! " + suggestions.join(" ");
  } else {
    resultText = "🟢 Strong";
    comment = "Excellent! Your password is strong.";
  }

  document.getElementById("result").value = resultText;
  document.getElementById("suggestion").innerText = comment;
}

function toggleVisibility() {
  const pwd = document.getElementById("password");
  const icon = document.getElementById("togglePassword");

  if (pwd.type === "password") {
    pwd.type = "text";
    icon.textContent = "🙈";
  } else {
    pwd.type = "password";
    icon.textContent = "👁️";
  }
}
