(() => {
  function onScroll() {
    const sectionElems = Array.from(document.querySelectorAll("section"));

    sectionElems.forEach((sectionElems) => {
      const imgElem = sectionElems.querySelector("img");
      const textElem = sectionElems.querySelector(".text");

      const scrollPosition = window.pageYOffset;
      const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;

      console.log(scrollPosition);

      if (scrollPosition >= revealPosition) {
        textElem.classList.add("reveal");
      }
    });
  }
  function run() {
    document.addEventListener("scroll", onScroll);
  }
  run();
})();
