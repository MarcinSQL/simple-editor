const textArea = document.querySelector("#editor--js");
const btnLoad = document.querySelector("#btn-load--js");
const btnSave = document.querySelector("#btn-save--js");

btnLoad.addEventListener("click", () => {
  const result = localStorage.getItem("text");
  textArea.value = result;
});

btnSave.addEventListener("click", () => {
  localStorage.setItem("text", textArea.value);
});
