var data;
        var city;
        var newCity = "Boise";
        var api = "https://api.openweathermap.org/data/2.5/weather?q=";
        var units = "&units=imperial&appid=";
        var key = "00057adebe128a511fe0142d67c240bc";
        var api_url = api + newCity + units + key;
       
        
        async function getISS() {
        
           const response = await fetch(api_url);
           var data = await response.json();
           var country = ", " + data.sys.country;
           document.getElementById('temp').innerHTML = Math.floor(data.main.temp);
           document.getElementById('cityname').innerHTML = data.name + country + " Weather";
           document.getElementById('description').innerHTML = data.weather[0].description;
           var desc = data.weather[0].description;
           var img = document.getElementById('icon'); 
           img.src =  "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
           var gradient = "linear-gradient(to right bottom, rgba(43, 52, 41, 0.3), rgba(48, 56, 53, 0.3)),";
           
           if (desc.includes("clear")) {
            var bodyBG = document.body.style.backgroundColor = "#d9c4af";   
            var URLimg = document.getElementById('weather-section').style.backgroundImage = gradient + "url('img/sunny.jpg')";
            
           } else if (desc.includes("rain") || desc.includes("mist")){
            var URLimg = document.getElementById('weather-section').style.backgroundImage = gradient + "url('img/rain.jpg')";
            var bodyBG = document.body.style.backgroundColor = "#3c4c70";

           } else if (desc.includes("rain") || desc.includes("snow")){
            var URLimg = document.getElementById('weather-section').style.backgroundImage = gradient + "url('img/snow.jpg')";
            var bodyBG = document.body.style.backgroundColor = "#7b7778"; 

           } else {
            var URLimg = document.getElementById('weather-section').style.backgroundImage = gradient + "url('img/cloudy.jpg')";
            var bodyBG = document.body.style.backgroundColor = "#97b1c0";   

           }

           //.reset();
           
        }  

        document.getElementById('submit').addEventListener('click', function (){
            var newCity = document.getElementById('cityVal').value;
            city = newCity;
            api_url = api + newCity + units + key;
           
            
            getISS();
            
        })


        var input = document.getElementById('cityVal').addEventListener('keyup', function(event) {
            
        if (event.keyCode == 13) {
            event.preventDefault();
            document.getElementById('submit').click();
            getISS();
            
        }
    });
    
        //initial load (set to Boise weather)
       getISS();
       