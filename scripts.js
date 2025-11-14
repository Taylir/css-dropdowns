const selector = document.querySelector("select");

selector.addEventListener("change", e => {
  console.log(e.target.value);
  selector.blur();
})
