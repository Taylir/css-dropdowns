const selecter = document.querySelectorAll("select");

selecter.forEach(select => select.addEventListener("change", (e) => {
  console.log(e.target.value)
  select.blur();
}));
