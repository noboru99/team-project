let modalBox = document.querySelector(".modal-box");
let modalBack = document.querySelector(".modal-back");
let modalRight = -100;
let modalYesBtn = document.getElementById("Yes-btn");
let modalNoBtn = document.getElementById("No-btn");
// --------------------------------------
const safetyBox = document.querySelector(".safety");
const safetyYesBtn = document.querySelector(".safety-yes-Btn");
const safetyNoBtn = document.querySelector(".safety-no-Btn");

const checkbox = document.getElementById("Checkbox");
const nowBtn = document.querySelector(".now-btn");
nowBtn.addEventListener("click", () => {
  modalBack.style.display = "block";
  safetyBox.style.display = "block";
});

setTimeout(() => {
  modalBox.style.right = "0";
}, 100);
console.log(checkbox);

modalNoBtn.addEventListener("click", modalClear);
function modalClear() {
  if (checkbox.checked) {
    return modalNoBtn.addEventListener("click", hideDivForDay);
  }
  modalBack.style.display = "none";
  modalBox.style.display = "none";
}
modalYesBtn.addEventListener("click", showSafety);
function showSafety() {
  safetyBox.style.display = "block";
  modalBox.style.display = "none";
}
let safetyForm = document.getElementById("safety-form");

safetyYesBtn.addEventListener("click", () => {
  alert("登録完了");
  safetyBox.style.display = "none";
  modalBack.style.display = "none";
  // safetyYesBtn.addEventListener("click", hideDivForDay);
  hideDivForDay();
});

safetyNoBtn.addEventListener("click", safetyBoxClear);
function safetyBoxClear() {
  console.log("clearBtnOK");
  // safetyForm.reset();
  safetyBox.style.display = "none";
  modalBack.style.display = "none";
}

// 하루동안 보이지 않게하는 코드

// modalNoBtn.addEventListener("click", hideDivForDay);
function hideDivForDay() {
  // 보이는 div 요소를 보이지 않게 합니다.
  modalBox.style.display = "none";
  modalBack.style.display = "none";
  // localStorage에 값을 설정합니다.
  sessionStorage.setItem("visibleDivHidden", "true");
  sessionStorage.setItem("visibleDivHiddenDate", new Date().toISOString());
}

function checkSessionStorage() {
  let visibleDivHidden = sessionStorage.getItem("visibleDivHidden");
  if (visibleDivHidden == "true") {
    let visibleDivHiddenDate = new Date(
      sessionStorage.getItem("visibleDivHiddenDate")
    );
    let now = new Date();

    // 보이지 않는 시간이 지나지 않았으면 div 요소를 보이지 않게 합니다.
    if (now - visibleDivHiddenDate < 10000) {
      modalBox.style.display = "none";
      modalBack.style.display = "none";
    }
  }
}

window.onload = function () {
  checkSessionStorage();
};
