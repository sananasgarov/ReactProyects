const countryCard = document.querySelector(".country-card");
function renderCountryCard() {
  countryCard.innerHTML = "";
  fetch("https://restcountries.com/v3.1/name/azerbaijan").then((res) =>
    res.json().then((data) => {
      countryCard.innerHTML = `
        <img
          src=${data[0].flags.png}
          alt
          class="w-full object-cover rounded-t-[20px]">
        <img
          src=${data[0].coatOfArms.png}
          alt
          class="w-full object-cover rounded-t-[20px]">
        <div class="flex flex-col p-[10px]">
          <p class="text-black mb-[20px]">${data[0].name.common}</p>
          <div class="flex items-center justify-between mb-4">
            <p class="text-red-500 font-bold">${data[0].area}</p>
            <span class="font-bold">${data[0].capital}</span>
          </div>
          <p class="flex gap-[5px] items-center mt-2">
          </p>
        </div>
      `;
    })
  );
}
renderCountryCard();
