// // validation form register and register user local storage
// const inputUsernameRegister = document.querySelector(".input-signup-username");
// const inputPasswordRegister = document.querySelector(".input-signup-password");
// const btnRegister = document.querySelector(".signup__signInButton");

// // validation form register and register user local storage

// btnRegister.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     inputUsernameRegister.value === "" ||
//     inputPasswordRegister.value === ""
//   ) {
//     alert("vui lòng không để trống");
//   } else {
//     // array user
//     const user = {
//       username: inputUsernameRegister.value,
//       password: inputPasswordRegister.value,
//     };
//     let json = JSON.stringify(user);
//     localStorage.setItem(inputUsernameRegister.value, json);
//     alert("Đăng Ký Thành Công");
//     window.location.href = "login.html";
//   }
// });

let apiUser = "http://localhost:3000/user";
const fullname = document.querySelector(".fullname");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const bntSignup = document.querySelector(".signup");
// signup
bntSignup.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "" || fullname.value == "" || email.value == "" || phone.value == "") {
    alert("Please enter input");
  } else {
    const user = {
      fullname: fullname.value,
      email: email.value,
      phone: phone.value,
      username: username.value,
      password: password.value,
    };
    fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      alert("Signup success");
      window.location.href = "login.html";
  }
});
