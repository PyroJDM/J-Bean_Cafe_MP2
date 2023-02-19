$(document).ready(function () {
  var likeCount = 7986;
  var $likeMessage = $(
    '<p class="like-message">' + likeCount + " people liked this product.</p>"
  );

  $(".likebtn").click(function () {
    var $cardBody = $(this).closest(".card-body");
    if ($cardBody.has(".like-message").length) {
      $cardBody.find(".like-message").remove();
      likeCount--;
    } else {
      $cardBody.append($likeMessage);
      likeCount++;
    }
  });

  setInterval(function () {
    likeCount++;
    $likeMessage.text(likeCount + " people liked this product.");
  }, 3000);

  $likeMessage.css({
    position: "relative",
    bottom: "0",
    left: "0",
    fontStyle: "italic",
  });
});

function userLoggedIn() {
  // Replace this function with your own code to check if the user is logged in
  // For example, you could check if the user has a session cookie or a valid authentication token
  return false; // For the sake of this example, always return false
}

$(document).ready(function () {
  $(".a2cbtn").click(function () {
    // Check if user is logged in
    if (!userLoggedIn()) {
      // Prompt user to log in
      alert("Please log in to add items to your cart.");

      // Redirect user to login page
      window.location.href = "Login.html";
    }
  });
});

function userLoggedIn() {
  // Replace this function with your own code to check if the user is logged in
  // For example, you could check if the user has a session cookie or a valid authentication token
  return false; // For the sake of this example, always return false
}

$(document).ready(function () {
  $(".form").on("submit", function (e) {
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    if (username === "admin" && password === "admin123") {
      alert("You have successfully logged in!");
      window.location.href = "menu.html";
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
});

$(document).ready(function () {
  // Check if the user is logged in and get the user name
  var userName = getUserName(); // replace with your own code to get the user name

  if (userName) {
    // If the user is logged in, update the link text
    $(".login-signup-link").text("Hello, " + userName + "!");
  }

  // Handle successful login in Login.html
  // This assumes that you are using localStorage to store the login status and the user name
  // and that you are setting the "loggedIn" and "userName" items in localStorage after a successful login
  if (window.location.href.endsWith("Login.html")) {
    $("#login-form").submit(function (event) {
      event.preventDefault();

      // Check the user credentials and get the user name
      var userName = checkUserCredentials(); // replace with your own code to check the user credentials and get the user name

      if (userName) {
        // If the login is successful, set the "loggedIn" and "userName" items in localStorage
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userName", userName);

        // Redirect the user to the menu page
        window.location.href = "menu.html";
      } else {
        // If the login fails, show an error message
        $("#login-error").show();
      }
    });
  }
});
