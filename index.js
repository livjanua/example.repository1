let now = new Date();

let p = document.querySelector("p");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

p.innerHTML = `${day} ${hours}:${minutes}, moderate rain <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            `;

function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${h1.value}`;
}
let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("submit", enterCity);
