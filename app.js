"use strict";
$(document).ready(function () {







    
    
    $("#btn").click(function (e) { 
        e.preventDefault()

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${$("#myWeather").val()}&appid=e9de91a45ac9470dc1bdf5abb260bfec`
        async function myWeather() {
            let responce = await fetch(url)
            let data = await responce.json()
            // $("#city").html(data.name);
            console.log(data)
        }
        myWeather()
        
    });

});