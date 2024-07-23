console.log("Let's get started");

const API_KEY = "b6a9bc4abec1f1a9b55adb749f378d26";

async function fetchWeatherDetails(){

    try {
        let cityName = "Bhopal";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
    
        const data = await response.json();
    
        console.log("Weather ", data);
    
        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;
    
        document.body.appendChild(newPara);

    } catch (error) {
        console.log('tumse nai ho payga beta');
    }

}

async function getLatWeatherDetails(){
    try {
        let latitude = 15.6333;
        let longitude = 17.3333;
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        
        const data = await response.json();
    
        console.log('Weather ', data);
        
    } catch (error) {
        console.log("error found ", error);
    }
    
    

    
    
}