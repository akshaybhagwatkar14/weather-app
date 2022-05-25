function getData(){
    let city = document.getElementById("city").value;

    const url=
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06b021f5f4bf52f54f3de8ca0895f464`;
     
    fetch(url)
    .then(function(res){

        return res.json();
    
    })
    .then(function (res){
        append(res);
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    });

}

function getDataLocation(lat,lon){
    

    const url=
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=06b021f5f4bf52f54f3de8ca0895f464`;
     
    fetch(url)
    .then(function(res){

        return res.json();
    
    })
    .then(function (res){
        append(res);
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    });

}

function append(data){

    let container=document.getElementById("container");

    let map= document.getElementById('gmap_canvas');

    container.innerHTML=null;
    
    let city=document.createElement('p');
 
    let span=document.createElement("span");
    // <i class="fa-solid fa-city"></i>
    let i=document.createElement("i");
    i.setAttribute("class","fa-solid fa-city");
 
 
    
 
    i.innerText = ` ${data.name}`;
    span.append(i);
    city.append(span);

    let min=document.createElement('p');
   
    min.innerText = `Min_temp: ${data.main.temp_min}`;

    let max=document.createElement('p');
    max.innerText=`Max_temp: ${data.main.temp_max}`;

    let temp=document.createElement('p');
    temp.innerText=`temp: ${data.main.temp}`;

    let wind=document.createElement('p');
    wind.innerText=`temp: ${data.wind.speed}`;

    let col=document.createElement('p');
    col.innerText=`coluds: ${data.clouds.all}`;

    let rise=document.createElement('p');
    rise.innerText=`sunrise: ${data.sys.sunrise}`;

    let set=document.createElement('p');
    set.innerText=`sunset: ${data.sys.sunset}`;

    container.append(city,min, max, temp, wind, col, rise, set)

    map.src=`https://maps.google.com/maps?q=${data.name}&z=13&ie=UTF8&iwloc=&output=embed`
}

function getWeather(){
    navigator.geolocation.getCurrentPosition(success);

    function success(position){
        let crd = position.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      getDataLocation(crd.latitude, crd.longitude);
    }
}
