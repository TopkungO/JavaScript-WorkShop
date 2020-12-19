(() => {
  let currentIndex = 0;

  function displayImag(imgElem, newIndex) {
    const lastImg = imgElem.length - 1;
    if (newIndex < 0) {
      newIndex = lastImg;
    } else if (newIndex > lastImg) {
      newIndex = 0;
    }

    const newImage = imgElem[newIndex];
    newImage.scrollIntoView({ behavior: "smooth" });
    currentIndex = newIndex;
  }

  function run() {
    const imgElem = document.querySelectorAll("img");
    const previousElem = document.querySelector(".previous");
    const nextElem = document.querySelector(".next");

    previousElem.addEventListener("click", () =>
      displayImag(imgElem, currentIndex - 1)
    );
    nextElem.addEventListener("click", () =>
      displayImag(imgElem, currentIndex + 1)
    );
  }
  run();
})();
