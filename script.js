 function getWeather(){
      document.getElementById("mainAnim").style.visibility="hidden";
	document.getElementById("resultTable").style.visibility="visible";
      let city = document.getElementById('mesto').value;
      let state = document.getElementById('stat').value;
      let reg = RegExp("^([a-zA-Z(š|č|ť|ž|ý|á|í|é|Š|Č|Ť|Ž|Ý|Á|É|Í|ú|Ú)])+$");
      console.log("city: "+city+" country: "+state);
  	  if (city.length>1 && (reg.test(city)|| (/\s/).test(city))) {
  	  	let req="http://api.openweathermap.org/data/2.5/forecast?q=";
      	req=req+city;
      	if (state.length==2 && reg.test(state)) {
      	req=req+","+state;
      	}
      	req=req+"&mode=HTML";
      	req=req+"&appid=57bf6232faa9519a9104b00b35753580";
      	console.log(req);

      	let xhttp= new XMLHttpRequest();
      	xhttp.onreadystatechange = function(){
      		if(this.readyState == 4 && this.status == 200){
      			let obj=JSON.parse(this.responseText);
      			document.getElementById("teplota").innerHTML=
      			Math.round((obj.list[0].main.temp-273.15)*100)/100+" °C"; 
      			document.getElementById("vlhkost").innerHTML=obj.list[0].main.humidity+" %";
      			document.getElementById("tlak").innerHTML=obj.list[0].main.pressure+" hPa";
      			document.getElementById("vietor").innerHTML=obj.list[0].wind.speed+" m/s";
      			document.getElementById("pocasie").innerHTML=obj.list[0].weather[0].main;

      		//pozadie
      		if(obj.list[0].weather[0].main=="Snow"){
      			document.body.style.backgroundImage = "url('snow.jpg')";
                        document.getElementById("mainDiv").style.color="black";
                        document.getElementById("resultTable").style.color="black";
                        document.getElementById("SnowFlake").style.visibility= "visible";
      		}
      		else if(obj.list[0].weather[0].main=="Rain"){
      			document.body.style.backgroundImage = "url('rain.jpg')";
                        document.getElementById("mainDiv").style.color="black";
                        document.getElementById("resultTable").style.color="black";
                        document.getElementById("SnowFlake").style.visibility= "hidden";

      		}
      		else if(obj.list[0].weather[0].main=="Clouds"){
      			document.body.style.backgroundImage = "url('clouds.jpg')";
                        document.getElementById("mainDiv").style.color="black";
                        document.getElementById("resultTable").style.color="black";
                        document.getElementById("SnowFlake").style.visibility= "hidden";
      		}
      		else if(obj.list[0].weather[0].main=="Drizzle"){
      			document.body.style.backgroundImage = "url('drizzle.jpg')";
                        document.getElementById("mainDiv").style.color="black";
                        document.getElementById("resultTable").style.color="black";
                        document.getElementById("SnowFlake").style.visibility= "hidden";
      		}
      		else if(obj.list[0].weather[0].main=="Thunderstorm"){
      			document.body.style.backgroundImage = "url('storm.jpg')";
                        document.getElementById("mainDiv").style.color="white";
                        document.getElementById("resultTable").style.color="white";
                        document.getElementById("SnowFlake").style.visibility= "hidden";
      		}
                  else if(obj.list[0].weather[0].main=="Clear"){
                        document.body.style.backgroundImage = "url('clear.jpg')";
                        document.getElementById("mainDiv").style.color="black";
                        document.getElementById("resultTable").style.color="black";
                        document.getElementById("SnowFlake").style.visibility= "hidden";
                  }
                  else if(obj.list[0].weather[0].main=="Atmosphere"){
                        document.body.style.backgroundImage = "url('atmosphere.jpg')";
                        document.getElementById("mainDiv").style.color="black";
                        document.getElementById("resultTable").style.color="black";
                        document.getElementById("SnowFlake").style.visibility= "hidden";
                  }

      		}

      	};
      	xhttp.open("GET",req, true);
      	xhttp.send();
  	  }

   	 }