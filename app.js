const cardsContainer = $("#cardsContainer");
const btn = $("#getCountriesBtn");
const input1 = $("#countryInput");

btn.on("click", function () {
  const country = data.find(
    (country) => input1.val().toLowerCase() == country.name.toLowerCase()
  );

  _draw();

  function _draw() {
    cardsContainer.append(
      getSingleCard(country.name, country.population, country.flag)
    );
  }
});

function getSingleCard(countryName, population, flag) {
  return $(`<div class="card">
  <img src=${flag} style="width:100%">
  <div class="container">
  <h4><b>${countryName}</b></h4>
  <p>Number of citizens:${population}</p>
  </div>  
  </div>`);
}

{
}
