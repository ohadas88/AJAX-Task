const cardsContainer = $("#cardsContainer");
const btn = $("#getCountriesBtn");
const input1 = $("#countryInput");

btn.on("click", function () {
  const country = data.find(
    (country) => input1.val().toLowerCase() == country.name.toLowerCase()
  );
  console.log(country);
});

function getSingleCard(country) {
  const cardContainer = $(`<div class="card">${country}</div>`);
  console.log(cardContainer);
}

{
  /* <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div> */
}

function draw(array) {}
