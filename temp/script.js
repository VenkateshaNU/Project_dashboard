const form = document.querySelector("form");
const searchField = document.querySelector(".searchField");
const locationField = document.querySelector(".time_location p");
const dateTime = document.querySelector(".time_location span");
const temprature = document.querySelector(".temp");
const conditionField = document.querySelector(".weather_condition span");
const conditionImage = document.querySelector(".weather_condition img");

form.addEventListener("submit", search);

function search(e) {
  e.preventDefault();
  fetchData(searchField.value);
}

async function fetchData(target) {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=yes`;

    // Fetch data
    const response = await fetch(url);
    const data = await response.json();

    if (!data.location) {
      alert("Invalid location. Please try again.");
      return;
    }

    let currentLocation = data.location.name;
    let currentCondition = data.current.condition.text;
    let currentTemp = data.current.temp_c;
    let currentTime = data.location.localtime;
    let currentConditionIcon = data.current.condition.icon;

    updateValues(currentTime, currentLocation, currentCondition, currentTemp, currentConditionIcon);

    console.log(data);
  } catch (error) {
    console.error("Cannot Fetch:", error);
    alert("Failed to fetch data. Please check your connection or API key.");
  }
}

function updateValues(time, location, condition, temp, icon) {
  dateTime.innerText = time;
  locationField.innerText = location;
  conditionField.innerText = condition;
  temprature.innerText = temp;
  conditionImage.src = icon;
}

// Fetch initial data for a default location
fetchData("Mumbai");