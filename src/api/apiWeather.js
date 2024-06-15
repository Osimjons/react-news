import axios from 'axios';
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

// const api = '61dc1a61284946aa730345e4647fb62d';
const city = 'Москва';

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric`;
// const urll = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric`;

export async function getWaether() {
  const data = await axios.get(
    `${WEATHER_BASE_URL}weather?q=${city}&lang=ru&units=metric`,
    {
      params: {
        appid: WEATHER_API_KEY,
      },
    }
  );

  return data.data;
}
///////////////////////////////////////////////////////////////////

// async function getLocation() {
//   // Если геолокация поддерживается браузером
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(async (position) => {
//       console.log('position: ', position);
//       const { lat, lon } = showPosition(position);
//       console.log('lat: ', lat);
//       console.log('lon: ', lon);
//       await getWaether(lat, lon);
//     });
//   } else {
//     alert('Геолокация не поддерживается');
//   }
// }

// function showPosition(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   return { lat, lon };
// }

// getLocation();
/////////////////////////////////////////////////////////
