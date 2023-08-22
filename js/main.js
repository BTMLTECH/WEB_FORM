// window.addEventListener("load", (event) => {
//   document.getElementById("modal").style.display = "none";
//   console.log("page is fully loaded");
// });

// Webfont Loader
WebFont.load({
  google: {
    families: ["Inter", "Montserrat"],
  },
});

const banner = document.getElementById("banner");
const closeBannerBtn = document.getElementById("closeBanner");

// Navbar Logic
const navBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("menu");

function toggleMenu() {
  mobileMenu.classList.toggle("show-menu");
}

navBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// Store alerts
let alerts;

function handleAlerts() {
  // Check for alerts
  if (alerts) {
    banner.classList.remove("hide");
    const p = document.createElement("p");
    p.textContent = alerts[0].description;
    banner.appendChild(p);
  } else {
    banner.classList.add("hide");
  }
}

handleAlerts();

closeBannerBtn.addEventListener("click", function () {
  banner.classList.add("hide");
});

// Last Modified Date
const currentDateSpan = document.getElementById("currentDate");

const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);

async function loadCountry() {
  const country = await fetch("https://api.yeve.co.uk/country");
  const data = await country.json();
  console.log(data);
  let elementOption = `<option selected disabled value="">Please enter Country name.</option>`;
  data.map((element) => {
    elementOption += `<option value=${element.name}>${element.name}</option>`;
  });
  let Nationality = document.getElementById("Nationality");
  let Country_of_Arrival = document.getElementById("Country_of_Arrival");
  let Originating_country = document.getElementById("Originating_country");
  let issued_by = document.getElementById("issued_by");
  Nationality.innerHTML = elementOption;
  issued_by.innerHTML = elementOption;
  Country_of_Arrival.innerHTML = elementOption;
  Originating_country.innerHTML = elementOption;
  console.log(Nationality);
}
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  console.log(data);

  document.getElementById("modal").classList.add("modal_open");
});

document.getElementById("modal").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("modal_open");
});
loadCountry();
