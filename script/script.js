/**
 * Basis object met gebruikers
 */

const users = [
  {
    fullname: "KarelKleintjes",
    email: "karel.kleintjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "ElsDotjes",
    email: "else.dotjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
  },
];

// hieronder komt jullie code - veel succes
let txtname = document.querySelector("#name");
let txtemail = document.querySelector("#email");
let txtpassword = document.querySelector("#password");
const btnregister = document.querySelector("#registreer");

const filter = document.querySelector("#filter");
const btnfilter = document.querySelector("#btnfilter");

const txtlijst = document.querySelector(".lijst");

const addLogin = (fullname, email, password) => {
  const newUser = {
    fullname,
    email,
    password,
  };
  users.push(newUser);
  txtname = "";
  txtemail = "";
  txtpassword = "";
};
const addLijst = (fullname, email) => {
  users.forEach((gebruiker) => {
    const nieuwlijstnaam = document.createElement("p");
    const nieuwlijstemail = document.createElement("p");
    nieuwlijstnaam.innerHTML = gebruiker[fullname];
    nieuwlijstemail.innerHTML = gebruiker[email];
    txtlijst.appendChild(nieuwlijstemail);
    txtlijst.appendChild(nieuwlijstnaam);
  });
};

btnregister.addEventListener("click", (e) => {
  addLogin(txtname.value, txtemail.value, txtpassword.value);
  addLijst(users.fullname, users.email);
  console.log(users);
});
