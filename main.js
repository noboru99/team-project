let modalBox = document.querySelector(".modal-box");
let modalBack = document.querySelector(".modal-back");
let modalRight = -100;
let modalMove = setInterval(rightMove, 10);
let modalYesBtn = document.getElementById("Yes-btn");
let modalNoBtn = document.getElementById("No-btn");
// --------------------------------------
let safetyBox = document.querySelector(".safety");
let safetyYesBtn = document.getElementById("safety-yes-Btn");
let safetyNoBtn = document.querySelector("safety-no-Btn");
console.log(modalYesBtn);
function rightMove() {
  if (modalRight >= 3) {
    clearInterval(modalMove);
  } else {
    modalRight += 1;
    modalBox.style.right = modalRight + "%";
  }
}

modalNoBtn.addEventListener("click", modalClear);
function modalClear() {
  modalBack.style.display = "none";
  modalBox.style.display = "none";
}
modalYesBtn.addEventListener("click", showSafety);
function showSafety() {
  safetyBox.style.display = "block";
  modalBox.style.display = "none";
}
let safetyForm = document.getElementById("safety-form");
// safetyForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // 기본 제출 동작을 취소합니다.

//   // 폼 제출을 처리하는 코드를 작성합니다.

// });

safetyNoBtn.addEventListener("click", safetyBoxClear);
function safetyBoxClear() {
  console.log("clearBtnOK");
  // safetyForm.reset();
  safetyBox.style.display = "none";
  modalBack.style.display = "none";
}
