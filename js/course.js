const back = document.querySelector("#backBtn");

if (back) {
    back.addEventListener("click", () => {
      window.history.back();
    });
}