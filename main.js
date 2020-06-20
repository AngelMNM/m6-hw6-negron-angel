var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        // console.log(apiResult.name);
        // console.log(apiResult.weather[0].description);

        //variables from API
        var cityName = apiResult.name;
        var weatherCond = apiResult.weather[0].description;

        //Node Elements from HTML
        var h1Head = document.getElementsByTagName('H1');
        var mainElement = document.getElementById("theWeather");

        //create new text nodes to place
        var newTextName = document.createTextNode(cityName);
        var newTextWeather = document.createTextNode(weatherCond);

        //place nodes in HTML
        h1Head[0].appendChild(newTextName);
        mainElement.appendChild(newTextWeather);

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=07857,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();