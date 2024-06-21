let form = document.querySelector("form")
form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let place=document.getElementById("location").value
    console.log(place);
    let key = "4368eebeb10ad8d313984a665b50ca0f";
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`
    let data=await fetch(api);//this gives promise so using await
    let finaldata=await data.json();//this also gives promise so using await
    console.log(finaldata);
    //*-------------------------------------------------------
    //!till here fetching the data in object has been completed
    //*-------------------------------------------------------
    let temp=document.querySelector(".temp_value")//targets the temp in browser that paragraph with 0degC
    let humid=document.querySelector(".humid_value")//targets the humid in browser that paragraph with 0 %
    // *--checking whether or nit am getting the temp and humidity----
    // console.log(finaldata.main.temp)// this gives temp in kelvin which is stored in api 
    // console.log(finaldata.main.humidity)// this gives humidity in kelvin which is stored in api
    // *-------------------------------------------------------------- 
    let finaltemp=Math.round((finaldata.main.temp)-273)// this will store temp in celcius
    let finalhumid=finaldata.main.humidity//this will store the humidity value
    //!writing the temp and humid values to the browser
    temp.innerHTML=`${finaltemp}<sup>o</sup>C`
    humid.innerHTML=`${finalhumid}%`
    //!writing the description of the weather
    let desc=document.getElementById("description")//getting acess of that description of weather
    let descriptiondata=(finaldata.weather[0].main).toLowerCase()
    desc.innerHTML=descriptiondata
    //!getting image and setting the image
    //!changing the background
    // let body=document.body
    let walli=document.getElementById("main_container")
    let imageofcard=document.getElementById("img")
    switch(descriptiondata){
        case "ash":
            imageofcard.src="./assets/ash.webp"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/ash.webp)"
             walli.style.backgroundSize="cover"
            break;
        case "clear":
            imageofcard.src="./assets/clear.jpg"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/backgrounds/clear.gif)"
            walli.style.backgroundSize="cover"
            break;
        case "clouds":
            imageofcard.src="./assets/clouds.webp"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/backgrounds/cloudy.gif)"
            walli.style.backgroundSize="cover"
            
            break;
        case "drizzle":
            imageofcard.src="./assets/drizzle.webp"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/backgrounds/drizzle.gif)"
            walli.style.backgroundSize="cover"
            break;
        case "dust":
            imageofcard.src="./assets/dust.jpg"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/backgrounds/dust.gif)"
            walli.style.backgroundSize="cover"
            break;
        case "fog":
            imageofcard.src="./assets/fog.webp"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/fog.jpg)"
             walli.style.backgroundSize="cover"
            break;
        case "haze":
            imageofcard.src="./assets/haze.webp"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/backgrounds/haze.gif)"
            walli.style.backgroundSize="cover"
            break;
        case "mist":
            imageofcard.src="./assets/mist.webp"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/backgrounds/mist.gif)"
             walli.style.backgroundSize="cover"
            break;
        case "rain":
            imageofcard.src="./assets/rain.jpg"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/backgrounds/rain.gif)"
            walli.style.backgroundSize="cover"
            break;
        case "sand":
            imageofcard.src="./assets/sand.webp"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/backgrounds/dust.gif)"
            walli.style.backgroundSize="cover"
            break;
        case "smoke":
            imageofcard.src="./assets/smoke.jpg"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/smoke.jpg)"
             walli.style.backgroundSize="cover"
            break;
        case "snow":
            imageofcard.src="./assets/snow.webp"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
           walli.style.background="url(./assets/backgrounds/snow.gif)"
            walli.style.backgroundSize="cover"
           break;
        case "squall":
            imageofcard.src="./assets/squall.jpg"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            walli.style.backgroundSize="cover"
            imageofcard.style.width="150px"
            walli.style.background="url(./assets/squall.jpg)"
                
            break;
        case "thunderstorm":
            imageofcard.src="./assets/thunderstorm.webp"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
                walli.style.backgroundSize="cover"
            walli.style.background="url(./assets/thunderstorm.webp)"
            imageofcard.style.width="150px"
            break;
        case "tornado":
            imageofcard.src="./assets/tornado.jpg"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            walli.style.background="url(./assets/tornado.jpg)"
            imageofcard.style.width="150px"
            walli.style.backgroundSize="cover"
            break;
        default:
            imageofcard.src="./assets/allweather.jpg"
            imageofcard.style.borderRadius="50%"
            imageofcard.style.height="150px"
            imageofcard.style.width="150px"
             walli.style.backgroundSize="cover"
        }
})


let contentcard=document.getElementById("card_container")
contentcard.addEventListener("mouseenter",()=>{
    contentcard.style.height= "450px";
    contentcard.style.width= "350px";
   
})
contentcard.addEventListener("mouseleave",()=>{
    contentcard.style.height= "430px";
    contentcard.style.width= "330px";
})