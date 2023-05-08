// 지금바로등록하기
const safetyBox = document.querySelector(".safety");
const safetyYesBtn = document.querySelector(".safety-yes-Btn");
const safetyNoBtn = document.querySelector(".safety-no-Btn");
const nowBtn = document.querySelector(".now-btn");
const safetyForm = document.getElementById("safety-form");
const modalBack = document.querySelector(".modal-back");
console.log(safetyBox);
console.log(safetyYesBtn);
console.log(safetyNoBtn);
console.log(nowBtn);
nowBtn.addEventListener("click", () => {
  safetyBox.style.display = "block";
  modalBack.style.display = "block";
});
console.log(safetyForm);
safetyNoBtn.addEventListener("click", safetyBoxClear);
function safetyBoxClear() {
  console.log("clearBtnOK");
  // safetyForm.reset();
  safetyBox.style.display = "none";
  modalBack.style.display = "none";
}
safetyYesBtn.addEventListener("click", () => {
  alert("登録完了しました");
});
safetyYesBtn.addEventListener("click", () => {
  alert("登録完了しました");
  safetyBox.style.display = "none";
  modalBack.style.display = "none";
  // safetyYesBtn.addEventListener("click", hideDivForDay);
  hideDivForDay();
});
