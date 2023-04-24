let put = document.querySelector(".put");
let safety = document.querySelector(".safety");
let first = document.querySelector(".first");
// setTimeout(() => {
//   put.classList.add("action");
//   console.log("putOK");
// }, 2000);
setTimeout(() => {
  put.classList.add("action");
  console.log("PutOK");
}, 1000);

setTimeout(() => {
  safety.classList.add("action");
  console.log("safetyOK");
}, 2000);

setTimeout(() => {
  first.classList.add("action");
  console.log("firstOK");
}, 3000);
// ここまでが文字が出るところ
let LoginBtn = document.querySelector(".login-btn");
LoginBtn.addEventListener("click", send);

let IDInput = document.querySelector(".ID-input");
let PasswordInput = document.querySelector(".password-input");
function send() {
  let ID = IDInput.value;
  let PASSWORD = PasswordInput.value;
  console.log(ID, PASSWORD);
}
