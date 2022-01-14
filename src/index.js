import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './crypto-service.js';

function clearFields() {
  $('#text').val("");
}

function getElements(response, dollars) {
  if (response) {
    $('.showRate').text(`The exchange rate is ${response[25].rate * dollars}`);
    $('.showCurrency').text(`The currency ${response[25].currency}`);
    console.log(response);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const currencyInput = parseFloat($("input#text").val());
    clearFields();
    CryptoService.getCrypto()
      .then(function(response) {
        getElements(response, currencyInput);
    
      });
  });
});










    // const response = async function()  {
    //   let cryptoService = new CryptoService();
    //   const response = await cryptoService.getCrypto();
    //   return response;
    // };
    // console.log(response);
//   });
// });



//       getElements(response);
//     })();

//     const getElements = function(response) {
//       if (response === false) {
//         $("#showAmount").append("There has been an error. Please try again!")
//         $("#showAmount").show();
//       } else if (response.cryptoService.length === 0) {
//         $("#showAmount").append("There are no results. Please try again.")
//         $("#showAmount").show();
//       } else if (response.cryptoService.length > 0 ) {
//         $("#showAmount").show();
//         let cryptoValue = ""
//         response.cryptoService.forEach(function(element) {
//           Object.keys(this.currency)

//           cryptoValue.concat(cryptoService.//converted value here//)
//         });
//       });
//     });
//   });
// };


// from api using fetch weather app

// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import WeatherService from './weather-service.js'
// import tempConverter from './tempConverter.js'

// function clearFields() {
//   $('#city').val("");
//   $('#state').val("");
//   $('.showErrors').text("");
//   $('.showHumidity').text("");
//   $('.showTemp').text("");
//   $('.showWindSpeed').text("");
// }

// function getElements(response) {
//   if (response.main) {
//     $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
//     $('.showTemp').text(`The temperature ${response.main.temp} degrees Kelvin, or ${tempConverter(response.main.temp)} degrees Fahrenheit.`);
//     $('.showWindSpeed').text(`The wind speed is ${response.wind.speed} m/s.`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     const city = $('#city').val();
//     const state = $('#state').val();
//     clearFields();
//     WeatherService.getWeather(city, state)
//       .then(function(response) {
//         getElements(response);
//       });
//   });
// });