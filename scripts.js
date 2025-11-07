const selecter = document.querySelector("select");

selecter.addEventListener("change", (e) => {
  console.log(e.target.value)
  selecter.blur();
});
