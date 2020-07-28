	window.onload = function () {

		function getWeather () {

			let temperature = document.querySelector('#temperature')
			let description = document.querySelector('#description')
			let location = document.querySelector('#location')
			let timezone= document.querySelector('.timezone')
			let st= document.querySelector('.feels-like')
			
			let api = "https://api.openweathermap.org/data/2.5/weather"
			let apiKey = "90d8d5df36f8182a51096a83562b6d2c"


			location.innerHTML = "Wait a few seconds..."

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
				"&units=metric" +

				"&lang=es";

				fetch(url)
				.then(response => response.json())
				.then(data => {
					console.log(data)
					let temp = data.main.temp
					let ts= data.main.feels_like
					let iconcode = data.weather[0].icon
					let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"
					let time = data.dt
					let date = new Date(time * 1000)
					let hours = date.getHours()
					let minutes = "0" + date.getMinutes()
					let seconds = "0" + date.getSeconds()
					temperature.innerHTML = temp.toFixed(1) + "° C"
					location.innerHTML =
					data.name +', ' +data.sys.country
					description.innerHTML = data.weather[0].description
					document.getElementById('wicon').src=iconurl
					st.innerHTML ="ST " + ts.toFixed(1) + "° C"
					timezone.innerHTML = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

					setInterval(timezone,1000)

				})
			}


			function error (position) {
				/*console.log("error")*/
				location.innerHTML = "We don´t know your location!"

			}




		}


		getWeather()





	}


