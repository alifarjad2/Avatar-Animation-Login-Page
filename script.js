/*
  Inspired by: "Login Page & Homepage"
  By: Neo  Link: https://dribbble.com/shots/4485321-Login-Page-Homepage
*/

let usernameInput = document.querySelector(".username");
let passwordInput = document.querySelector(".password");
let showPasswordButton = document.querySelector(".password-button");
let face = document.querySelector(".face");

passwordInput.addEventListener("focus", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.add("hide");
  });
  document.querySelector(".tongue").classList.remove("breath");
});

passwordInput.addEventListener("blur", (event) => {
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });
  document.querySelector(".tongue").classList.add("breath");
});

usernameInput.addEventListener("focus", (event) => {
  let length = Math.min(usernameInput.value.length - 16, 19);
  document.querySelectorAll(".hand").forEach((hand) => {
    hand.classList.remove("hide");
    hand.classList.remove("peek");
  });

  face.style.setProperty("--rotate-head", `${length}deg`);
});

usernameInput.addEventListener("blur", (event) => {
  face.style.setProperty("--rotate-head", "0deg");
});

usernameInput.addEventListener(
  "input",
  _.throttle((event) => {
    let length = Math.min(event.target.value.length - 16, 19);

    face.style.setProperty("--rotate-head", `${length}deg`);
  }, 100)
);

showPasswordButton.addEventListener("click", (event) => {
  if (passwordInput.type === "text") {
    //
    showPasswordButton.innerHTML = "نمایش";
    passwordInput.type = "password";
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("peek");
      hand.classList.add("hide");
    });
  } else {
    showPasswordButton.innerHTML = "پنهان";

    passwordInput.type = "text";
    document.querySelectorAll(".hand").forEach((hand) => {
      hand.classList.remove("hide");
      hand.classList.add("peek");
    });
  }
});

function validation() {
  var userValue = document.getElementsByClassName("username")[0].value;
  let isUserValid = userValue.length == 11;
  let numValid = true;
  for (let i = 0; i < 11; i++) {
    if (userValue[i] <= 9 && userValue[i] >= 0) numValid = false;
  }
  if (isUserValid) {
    alert("Correct phone number");
  } else {
    alert("not Correct phone number");
  }
}

document.querySelector(".login-button").onclick = validation;
document.getElementById("alert").style.display = "none";

document.querySelector(".username").oninput = (event) => {
  let userName = document.querySelector(".username").value 
  if(userName.length != 11 ){
    document.getElementById("alert").style.display = "";
  }
};
