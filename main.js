


window.onload = function () {

	function getWeather () {

		let temperature = document.querySelector('#temperature')
		let description = document.querySelector('#description')
		let location = document.querySelector('#location')

		let api = "https://api.openweathermap.org/data/2.5/weather"
		let apiKey = "90d8d5df36f8182a51096a83562b6d2c"


		location.innerHTML = "Locating..."

		navigator.geolocation.getCurrentPosition(success,error)




		function success (position) {

			/*console.log(position)*/
			latitude = position.coords.latitude;
		    longitude = position.coords.longitude;

		    let url =
		      api +
		      "?lat=" +
		      latitude +
		      "&lon=" +
		      longitude +
		      "&appid=" +
		      apiKey +
		      "&units=metric";

		    fetch(url)
		      .then(response => response.json())
		      .then(data => {
		        console.log(data);
		        let temp = data.main.temp;
		        temperature.innerHTML = temp.toFixed(1) + "° C";
		        location.innerHTML =
		          data.name +', ' +data.sys.country;
		        description.innerHTML = data.weather[0].description;
     		 })
		}


		function error (position) {
			/*console.log("error")*/
			location.innerHTML = "Unable to retrieve your location"
		
		}




	}


	getWeather()




		
}

	
