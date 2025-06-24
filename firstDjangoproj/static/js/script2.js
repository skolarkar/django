// get_location.js

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // You can display these coordinates in an HTML element
  // For example, assuming you have a div with id="location-display"
  const locationDisplay = document.getElementById("location-display");
  if (locationDisplay) {
    locationDisplay.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
  } else {
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }
}

function showError(error) {
  let errorMessage = "Geolocation error: ";
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMessage += "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage += "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      errorMessage += "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      errorMessage += "An unknown error occurred.";
      break;
  }
  console.error(errorMessage);

  const locationDisplay = document.getElementById("location-display");
  if (locationDisplay) {
    locationDisplay.innerHTML = errorMessage;
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    const locationDisplay = document.getElementById("location-display");
    const message = "Geolocation is not supported by this browser.";
    if (locationDisplay) {
      locationDisplay.innerHTML = message;
    } else {
      console.error(message);
    }
  }
}

// Call getLocation when the page loads or a specific event occurs
// For example, you might call it on a button click or when the DOM is ready.
// document.addEventListener('DOMContentLoaded', getLocation); // If you want to get location on page load
