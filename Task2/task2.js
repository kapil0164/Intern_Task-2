document.getElementById("main").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual submission

  if (validateForm()) {
    
    document.getElementById("main").style.display = "none";
    document.getElementById("imageSlider").style.display = "block";
  }
});

function validateForm() {
  document.getElementById("error-message").innerText = "";
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let error = "";

  if (name === "") {
    error = "Name is required.";
  } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    error = "Please enter a valid email address.";
  } else if (password.length < 8) {
    error = "Password must be at least 8 characters long.";
  }

  if (error !== "") {
    document.getElementById("error-message").innerText = error;
    return false;
  }

  return true;
}

//   scrollSlider
function scrollSlider(direction) {
  const slider = document.getElementById("slider");
  const scrollAmount = 320;

  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}
