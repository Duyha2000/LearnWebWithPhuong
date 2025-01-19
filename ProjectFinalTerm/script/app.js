const customPointer = document.querySelector(".custom-pointer");

document.addEventListener("mousemove", (e) => {
  customPointer.style.left = `${e.pageX}px`;
  customPointer.style.top = `${e.pageY}px`;
});

document.addEventListener("click", () => {
  customPointer.classList.add("expand");

  setTimeout(() => {
    customPointer.classList.remove("expand");
  }, 500);
});
