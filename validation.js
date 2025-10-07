function validateEmail() {
  const email = document.getElementById("email").value;
  const regex = /^[^@]+@[^@]+\.(com|edu|org|net)$/i;
  if (!regex.test(email)) {
    alert("Please enter a valid email ending in .com, .edu, .org, or .net");
    return false;
  }
  return true;
}

function validatePhone() {
  const phone = document.getElementById("phone").value;
  const regex = /^\d{3}-\d{3}-\d{4}$/; // matches 123-456-7890
  if (!regex.test(phone)) {
    alert("Please enter a valid phone number (format: 123-456-7890)");
    return false;
  }
  return true;
}

function validateZip() {
  const zip = document.getElementById("zip").value;
  const regex = /^\d{5}$/; // matches exactly 5 digits
  if (!regex.test(zip)) {
    alert("Please enter a valid 5-digit zip code");
    return false;
  }
  return true;
}

function validateForm() {
  return validateEmail() && validatePhone() && validateZip();
}
