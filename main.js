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
			
				const http = new XMLHttpRequest()
				http.open('GET', "https://api.weatherapi.com/v1/current.json?key=d19f73ef00a64948bd814612202207&q="+latitude+","+longitude+"&lang=es")
				http.send()

				http.onreadystatechange = function () {

					http.responseText

					if(http.responseText === '') {
						return
					}

					const data = JSON.parse(http.responseText)

					console.log(data)

					temperature.innerHTML = data.current.temp_c + "° C"

					description.innerHTML =data.current.condition.text

					location.innerHTML = 
					data.location.name + "," + data.location.region + "," + data.location.country

					st.innerHTML =data.current.feelslike_c + "° C"

				}

				
			}


			function error (position) {
				/*console.log("error")*/
				location.innerHTML = "We don´t know your location!"

			}




		}


		getWeather()





	}


