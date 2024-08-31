import axios from 'axios'

export async function getWeatherData(
    endpoint,
    place_id,
    measurementSystem
){

const options = {
  method: 'GET',
  url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
  params: {
    place_id,
    timezone: 'auto',
    language: 'en',
    units: measurementSystem
  },
  headers: {
    'x-rapidapi-key': '31d8b878d9mshf48a00e8d0e9170p1fb3e2jsn08249c04cff1',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data;
} catch (error) {
	console.error(error);
}
}