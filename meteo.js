
const rl = require('readline').createInterface
({
  input: process.stdin, output: process.stdout
})
rl.question('Quelle est le nom de la Ville?', (answer) => {
var city = answer ; // ajouter la ville qui vous interesse
var http = require("http");    //permet de travailler sur URL  
function printMessage(city, country, temperature , weather ,description ){      //recuperation des données
  console.log();
  console.log(" Pays:"+ country);
  console.log(" Ville:" + city);
  console.log(" weather:" + weather);
  console.log(" Description:" + description);
  console.log(" temperature:"  + temperature + "°C ");
}
var request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6db93a028b58851dcd81193539d903de&units=metric`, function (response){
  var body = "";
  response.on("data", function (chunk) {

    body += chunk;

  });

  response.on("end", function () {

    try{
      var data_weather = JSON.parse(body);
      printMessage(city,data_weather.sys.country,data_weather.main.temp,data_weather.weather[0].main,data_weather.weather[0].description);
    }

    catch(error){
      console.error( "ville non trouvée ");
    }
    process.exit();
  });
});
})