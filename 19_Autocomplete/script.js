(() => {
  const carBrands = [
    "BMW",
    "Maserati",
    "Mercedes Benz",
    "Ferrari",
    "Toyota",
    "Honda",
    "Hyundai",
  ];

  const searchElem = document.querySelector(".search");

  function clearResults() {
    const ulElem = document.querySelector(".results");
    if (ulElem) {
      document.body.removeChild(ulElem);
    }
  }

  function onInput(event) {
    const inputText = event.target.value.toLowerCase();

    const matchedCarBrands = carBrands.filter((carBrands) =>
      carBrands.toLocaleLowerCase().startsWith(inputText)
    );

    function selectCarBrand(event) {
      searchElem.value = event.target.innerText;
      clearResults();
    }
    const ulElem = document.createElement("ul");
    ulElem.classList.add("results");

    matchedCarBrands.forEach((carBrands) => {
      const liElme = document.createElement("li");
      liElme.innerHTML = carBrands;
      liElme.onclick = selectCarBrand;
      ulElem.appendChild(liElme);
    });
    document.body.appendChild(ulElem);
  }

  function run() {
    searchElem.addEventListener("input", onInput);
    document.addEventListener("click", clearResults);
  }
  run();
})();
