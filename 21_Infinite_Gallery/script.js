(() => {
  const KEY = "RQdBNhxzh5VZF_VKZsYTxnmYtaSdIeiAmENHxDdflC8";
  const loaderElem = document.querySelector(".loader");
  let page = 1;

  function showLoader() {
    loaderElem.classList.add("visible");
  }

  function hideLoader() {
    loaderElem.classList.remove("visible");
  }
  async function displayImages() {
    showLoader();

    const result = await fetch(
      `https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`
    );
    const imges = await result.json();

    const galleryElem = document.querySelector(".gallery");

    imges.forEach((imges) => {
      const imgElem = document.createElement("img");
      imgElem.src = imges.urls.small;
      galleryElem.appendChild(imgElem);
    });

    hideLoader();
    page += 1;
  }

  function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      displayImages();
    }
  }
  function run() {
    document.addEventListener("scroll", onScroll);
    displayImages();
  }
  run();
})();
