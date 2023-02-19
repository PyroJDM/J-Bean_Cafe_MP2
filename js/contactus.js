function toggleForm() {
  var form = document.getElementById("careerForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

var applyButton = document.getElementById("apply-form");
applyButton.addEventListener("click", function (event) {
  event.preventDefault();
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var jobRole = document.getElementById("job_role").value;
  var date = document.getElementById("date").value;
  var resume = document.getElementById("upload").value;

  var successMsg = document.createElement("p");
  successMsg.textContent =
    "You have successfully applied to J Bean Cafe, Please Check Your email for confirmation.";
  document.getElementById("careerForm").appendChild(successMsg);
  console.log(
    "You have successfully applied to J Bean Cafe, Please Check Your email for confirmation."
  );
});

function submitForm() {
  var name = document.getElementById("client_name").value;
  var email = document.getElementById("client_email").value;
  var number = document.getElementById("client_number").value;

  if (name === "" || email === "" || number === "") {
    alert("Incomplete form. Please fill out all required fields.");
  } else {
    var message =
      "Thanks " +
      name +
      "! You have successfully filled up the form. A representative will be in touch within an hour.";
    var modal = document.getElementById("modal");
    var modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = message;
    modal.style.display = "block";

    var close = document.getElementsByClassName("close")[0];
    close.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}
