const navBtn = document.querySelectorAll(".list p");
const mainBox = document.querySelectorAll(".title-box");
const navBox = document.querySelector(".navinner");
console.log(navBox);

for (let i = 0; i < navBtn.length; i++) {
  console.log("forOk");
  navBtn[i].addEventListener("click", () => {
    console.log("eventOK");
    console.log(mainBox[i].getBoundingClientRect().top);
    console.log(navBtn[i]);
    console.log(mainBox[i]);
    console.log(navBox);
    window.scrollTo({
      top: mainBox[i].getBoundingClientRect().top,
      behavior: "smooth",
    });
    navBox.scrollTo({
      top: mainBox[i].getBoundingClientRect().top,
      behavior: "smooth",
    });
  });
}

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
  safetyBox.style.display = "none";
  modalBack.style.display = "none";
  // safetyYesBtn.addEventListener("click", hideDivForDay);
  hideDivForDay();
});
