document.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
  div = document.querySelector(".div");
  div.style.left = e.clientX + "px";
  div.style.top = e.clientY + "px";
});
