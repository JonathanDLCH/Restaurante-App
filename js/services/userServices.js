const user = {
  email: "pep@email.com",
  pass: "123",
};

const loginService = (email, pass) => {
  if (user.email === email && user.pass === pass) {
    const token = `${email}.${pass} `;
    return token;
  } else {
    return new Error("error");
  }
};

const btn_add = document.querySelector("#btn-add-item");
const input_email = document.getElementById("exampleInputEmail1");
const input_pass = document.getElementById("exampleInputPassword1");

btn_add.addEventListener("click", login);

function login() {
  const response = loginService(input_email.value, "123");

  alert(response);

  sessionStorage.setItem("session", response)
  window.location.replace('./index.html')
}
