(() => {
  async function getCovid() {
    const response = await fetch(`https://covid19.th-stat.com/api/open/today`);

    const result = await response.json();
    console.log(result);

    return {
      confirmed: result.Confirmed,
      newConfirmed: result.NewConfirmed,
      hosp: result.Hospitalized,
      recovered: result.Recovered,
      newReco: result.NewRecovered,
      deaths: result.Deaths,
    };
  }

  function displayCovid({
    confirmed,
    newConfirmed,
    hosp,
    recovered,
    newReco,
    deaths,
  }) {
    const confirElem = document.querySelector(".Confirmed");
    const newConfirmedElem = document.querySelector(".newConfirmed");
    const RecoveredElem = document.querySelector(".Recovered");
    const NewRecoveredElem = document.querySelector(".NewRecovered");
    const HospElem = document.querySelector(".Hospitalized");
    const DeathsElem = document.querySelector(".Deaths");

    confirElem.innerText = confirmed;
    newConfirmedElem.innerText = `(+${newConfirmed})`;
    RecoveredElem.innerText = recovered;
    NewRecoveredElem.innerText = `(+${newReco})`;
    HospElem.innerText = hosp;
    DeathsElem.innerText = deaths;
  }

  async function run() {
    const {
      confirmed,
      newConfirmed,
      hosp,
      newHosp,
      recovered,
      newReco,
      deaths,
    } = await getCovid();

    displayCovid({
      confirmed,
      newConfirmed,
      hosp,
      recovered,
      newReco,
      deaths,
    });
  }
  run();
})();
