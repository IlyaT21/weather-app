/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const apiKey = '7c59b3b5b5304930b2a205048231111';\nconst cities = [\n  'Belgrade',\n  'Novi Sad',\n  'Nis',\n  'Pristina',\n  'Cacak',\n  'Subotica',\n  'Kragujevac',\n  'Leskovac',\n  'Zrenjanin',\n  'Pancevo',\n  'Novi Pazar',\n  'Kraljevo',\n  'Smederevo',\n  'Valjevo',\n  'Kruševac',\n  'Užice',\n  'Šabac',\n  'Sombor',\n  'Požarevac',\n  'Pirot',\n  'Zajecar',\n  'Jagodina',\n  'Vranje',\n  'Sremska Mitrovica',\n  'Vršac',\n  'Prokuplje',\n  'Sabac',\n  'Loznica',\n\t'Prizren',\n];\n\n// Assuming you have a <main> element in your HTML with id 'weatherContainer'\nconst mainElement = document.getElementById('weatherContainer');\n\ncities.forEach(city => {\n  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;\n\n  fetch(apiUrl, { mode: 'cors' })\n    .then(response => response.json())\n    .then(data => {\n      // Process the weather data for each city\n      const weatherInfo = `${city}: ${data.current.temp_c}°C, ${data.current.condition.text}`;\n\n      // Create li element\n      const listItem = document.createElement('li');\n      listItem.textContent = weatherInfo;\n\n      // Append li to ul\n      const unorderedList = document.createElement('ul');\n      unorderedList.appendChild(listItem);\n\n      // Append ul to main\n      mainElement.appendChild(unorderedList);\n    })\n    .catch(error => {\n      console.error(`Error fetching data for ${city}: ${error}`);\n    });\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;