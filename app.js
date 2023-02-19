const reservationForm = document.getElementById("reservation-form");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = reservationForm.querySelector("#ContactFormEmail").value;
  const number = reservationForm.querySelector("#ContactFormNumber").value;
  const date = reservationForm.querySelector("#ContactFormDate").value;
  const time = reservationForm.querySelector("#ContactFormTime").value;
  const message = reservationForm.querySelector("#ContactFormMessage").value;

  if (email && number && date && time && message) {
    alert(
      "You successfully reserved a table. Please check your email for more details."
    );
    console.log(
      "User successfully reserved a table!" +
        email +
        ", " +
        number +
        ", " +
        date +
        ", " +
        time +
        ", " +
        message
    );
    reservationForm.reset();
  } else {
    alert("Please fill out all the form.");
  }
});

function redirectToMenu() {
  window.location.href = "menu.html";
}
