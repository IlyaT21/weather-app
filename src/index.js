const apiKey = '7c59b3b5b5304930b2a205048231111';
const cities = [
  'Belgrade',
  'Novi Sad',
  'Nis',
  'Pristina',
  'Cacak',
  'Subotica',
  'Kragujevac',
  'Leskovac',
  'Zrenjanin',
  'Pancevo',
  'Novi Pazar',
  'Kraljevo',
  'Smederevo',
  'Valjevo',
  'Kruševac',
  'Užice',
  'Šabac',
  'Sombor',
  'Požarevac',
  'Pirot',
  'Zajecar',
  'Jagodina',
  'Vranje',
  'Sremska Mitrovica',
  'Vršac',
  'Prokuplje',
  'Sabac',
  'Loznica',
	'Prizren',
];

// Assuming you have a <main> element in your HTML with id 'weatherContainer'
const mainElement = document.getElementById('weatherContainer');

cities.forEach(city => {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(apiUrl, { mode: 'cors' })
    .then(response => response.json())
    .then(data => {
      // Process the weather data for each city
      const weatherInfo = `${city}: ${data.current.temp_c}°C, ${data.current.condition.text}`;

      // Create li element
      const listItem = document.createElement('li');
      listItem.textContent = weatherInfo;

      // Append li to ul
      const unorderedList = document.createElement('ul');
      unorderedList.appendChild(listItem);

      // Append ul to main
      mainElement.appendChild(unorderedList);
    })
    .catch(error => {
      console.error(`Error fetching data for ${city}: ${error}`);
    });
});
