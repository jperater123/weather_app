'use client'

import { useEffect, useState } from "react";
import WeatherHourlyCards from './components/WeatherHourlyCards'



export default function Home() {

  // let sample =[ {
  //   base: "stations",
  //   clouds: {
  //     all: 100
  //   },
  //   cod: 200,
  //   coord: {
  //     lat: 10.3167,
  //     lon: 123.8907
  //   },
  //   dt: 1726323480,
  //   id: 1717512,
  //   main: {
  //     feels_like: 300.05,
  //     grnd_level: 1001,
  //     humidity: 94,
  //     pressure: 1005,
  //     sea_level: 1005,
  //     temp: 298.96,
  //     temp_max: 298.96,
  //     temp_min: 298.96
  //   },
  //   name: "Cebu City",
  //   rain: {
  //     1h: 0.87
  //   },
  //   sys: {
  //     country: "PH",
  //     id: 8187,
  //     sunrise: 1726263259,
  //     sunset: 1726307160,
  //     type: 1
  //   },
  //   timezone: 28800,
  //   visibility: 7000,
  //   weather: [{
  //   description: "light rain",
  //   icon: "10n",
  //   id: 500,
  //   main: "Rain"
  // }],
  //   wind: {
  //     deg: 230,
  //     speed: 6.17
  //   }} ]


//   "dt": 1726369200,
//   "main": {
//       "temp": 282.35,
//       "feels_like": 280.69,
//       "temp_min": 282.35,
//       "temp_max": 283.72,
//       "pressure": 1015,
//       "sea_level": 1015,
//       "grnd_level": 947,
//       "humidity": 49,
//       "temp_kf": -1.37
//   },
//   "weather": [
//       {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04n"
//       }
//   ],
//   "clouds": {
//       "all": 81
//   },
//   "wind": {
//       "speed": 3.01,
//       "deg": 224,
//       "gust": 2.72
//   },
//   "visibility": 10000,
//   "pop": 0,
//   "sys": {
//       "pod": "n"
//   },
//   "dt_txt": "2024-09-15 03:00:00"
// },
// {
//   "dt": 1726380000,
//   "main": {
//       "temp": 283.8,
//       "feels_like": 282.25,
//       "temp_min": 283.8,
//       "temp_max": 284.87,
//       "pressure": 1014,
//       "sea_level": 1014,
//       "grnd_level": 946,
//       "humidity": 51,
//       "temp_kf": -1.07
//   },
//   "weather": [
//       {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04d"
//       }
//   ],
//   "clouds": {
//       "all": 79
//   },
//   "wind": {
//       "speed": 2.55,
//       "deg": 213,
//       "gust": 2.35
//   },
//   "visibility": 10000,
//   "pop": 0,
//   "sys": {
//       "pod": "d"
//   },
//   "dt_txt": "2024-09-15 06:00:00"
// },
// {
//   "dt": 1726390800,
//   "main": {
//       "temp": 293.03,
//       "feels_like": 291.99,
//       "temp_min": 293.03,
//       "temp_max": 293.03,
//       "pressure": 1013,
//       "sea_level": 1013,
//       "grnd_level": 946,
//       "humidity": 35,
//       "temp_kf": 0
//   },
//   "weather": [
//       {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04d"
//       }
//   ],
//   "clouds": {
//       "all": 61
//   },
//   "wind": {
//       "speed": 0.73,
//       "deg": 37,
//       "gust": 0.95
//   },
//   "visibility": 10000,
//   "pop": 0,
//   "sys": {
//       "pod": "d"
//   },
//   "dt_txt": "2024-09-15 09:00:00"
// },

  let [searchLocation, setsearchLocation] = useState('');
  let [name, setName] = useState('');
  let [temperature, setTemperature] = useState('');
  let [humidity, setHumidity] = useState('');
  let [wind, setWind] = useState('');
  let [icon, setIcon] = useState('');
  let [lat, setLat] = useState('');
  let [lon, setLon] = useState('');
  const [hours , setHours] = useState<string[]>([])
  let [hour_icon , setHourIcon] = useState<String[]>([])
  let [hour_temp , setHourTemp] = useState<any[]>([])
  const [currentDate, setCurrentDate] = useState('')

  const [f_date , setf_date] = useState<String[]>([])
  let [f_icon , setf_icon] = useState<String[]>([])
  let [f_temp , setf_temp] = useState<any[]>([])

  let newhours : String[] =[]
  let newhour_icon : String[] = []
  let newhour_temp : String[] = []

  let forecast_date : String[] =[]
  let forecast_icon : String[] = []
  let forecast_temp : String[] = []
  const [isLoading, setIsLoading] = useState(false);
  const maps_url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1b11f41%3A0xb1bbdccae5695b5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1600332231819!5m2!1sen!2sau`


  // let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&AP			PID=3600339562a40594772c7e7eebfa002a`;
  const hourly_api = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3600339562a40594772c7e7eebfa002a`;

  const handleSearch = (e: React.FormEvent) => {
      
      e.preventDefault();
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false); 
        getDate();// Stop loading after 2 seconds
    }, 3000); 
      


    
      console.log(hourly_api)
      
  };

  function formatDate(inputDate: String) {
    // Replace dashes with slashes for the Date object
    const date = new Date(inputDate.replace(/-/g, '/'));

    // Define options for formatting
    const options = { day: 'numeric', month: 'long', weekday: 'short' };
    
    // Format the date
    return date.toLocaleDateString('en-US', options).replace(',', '');
}





  const getDate = async () => {
    const response = await fetch(`api/getData?searchLocation=${searchLocation}`);
    const data = await response.json();
    console.log("data"+data)
   
    setName(data.name);

    if(data.main){
      setTemperature(String(data.main.temp));
      setHumidity(data.main.humidity);
    }
    if(data.wind){
      setWind(data.wind.speed);
    }
    if(data.weather){
      setIcon(data.weather[0].icon);
    }
   if(data.coord){
    setLat(data.coord.lat);
    setLon(data.coord.lon);
   }
   
   
  };

  interface HourlyData {
    
    time: string;
    temperature: number;
    humidity: number;
  }
 

  const getHourly = async() => {
    const hourly_response = await fetch(`${hourly_api}`);
    const hourly_data : any = await hourly_response.json();

    if(hourly_data && hourly_data.list && hourly_data.list.length > 0){
      for(let i =0; i <11 ; i++){
        const items = (hourly_data.list[i]);
        console.log(items.weather[0].icon);
        const final_date = convertTimestampToTime(items.dt)
       
        newhours.push(final_date)
        newhour_icon.push(items.weather[0].icon)
        newhour_temp.push((parseFloat(items.main.temp) - 273.15).toFixed(2))

      }
      setHours(newhours);
      setHourIcon(newhour_icon);
      setHourTemp(newhour_temp);
      console.log(hour_icon)

        newhours = []
        newhour_icon = []
        newhour_temp = []
    }
  };
  const convertTimestampToTime = (timestamp:any) => {
    // Convert timestamp from seconds to milliseconds
    const date = new Date(timestamp * 1000);
    
    // Extract hours and minutes
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
   
    return `${hours}:${minutes}`;
  };

  const getForecast = async () => {
    const call_response = await fetch(`api/get3DayForecast?searchLocation=${searchLocation}`);
    const call_data = await call_response.json();

    
    for(let i=0 ; i < 3 ; i++){
      if(call_data[i]){
        forecast_date.push(call_data[i].date)
      forecast_icon.push(call_data[i].icon)
      forecast_temp.push(call_data[i].temp)
      }
      
    }
    setf_date(forecast_date)
    setf_icon(forecast_icon)
    setf_temp(forecast_temp)
  

  }

  useEffect(() => {
    getDate();
    const date = new Date().toLocaleString()
    setCurrentDate(date)

    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleString());
    }, 1000); // Update every second

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
   
   
    
  }, []);

  useEffect(() => {
    getHourly();
    getForecast();

    
  }, [lat]);

  return (
  <>
  <div className="dashboard">
    <div className="header">
      <div className="current-date">
        <div> {currentDate}</div>
        <div>  {isLoading ? 'Getting data...' : ''}</div>
       
      
      </div>

      <div className="header-tools">
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Search City"
          value={searchLocation}
          onChange={(e => setsearchLocation(e.target.value))}
           />
         
        </form>

        <select name="lang" id="lang">
          <option value="eng">ENG</option>
          <option value="eng">JAP</option>
          <option value="eng">POR</option>
        </select>
      </div>
    </div>

    <div className="info1">
      <div className="overview-container">
        <div className="overview">
          <ul>
            <li>
              {icon ? <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" /> : "- - - - - - - - - - -  " }
             
            </li>
            <li>
              <h1>{name ? name : '---'}</h1>
              <h3>Location</h3>
            </li>
            <li>
            <h1>{temperature ? (parseFloat(temperature) - 273.15).toFixed(2) : '---'}&deg;</h1>
            <h3>Temperature</h3>
            </li>
            <li>
         
            <h1>{humidity ?humidity : '---'}%</h1>
            <h3>Humidity</h3>
            </li>
            <li>
         
            <h1>{wind ?wind : '---'}km/h</h1>
            <h3>Wind Speed</h3>
            </li>
          </ul>

          <WeatherHourlyCards hours={hours} hour_icon={hour_icon} hour_temp={hour_temp}/>



        </div>
      </div>
      <div className="current-loc">
      <iframe 
      src = {maps_url}
      width="100%" 
      height="240" 
      loading="lazy" 
  >
</iframe>

      </div>
    </div>
    {/* end of info 1 */}

    <div className="info2">
      <div className="overview-container">
        <div className="forecast">
          <div className="title">
            <span>
              Forecast
            </span>
            </div>

            <div className="forecast-content">
              <div className="content1">
                <div className="left-side">
                {f_icon[0] ? <img src={`http://openweathermap.org/img/wn/${f_icon[0]}.png`} alt="" /> : "---"}
                <span>
                  + {f_temp[0] ? f_temp[0] : "---"}
                </span>
                </div>
                <div className="right-side">
                  {f_date[0]? formatDate(f_date[0]) : "---"}
                </div>
              </div>
              <div className="content1">
              <div className="left-side">
                {f_icon[1] ? <img src={`http://openweathermap.org/img/wn/${f_icon[1]}.png`} alt="" /> : "---"}
                <span>
                  + {f_temp[1] ? f_temp[1] : "---"}
                </span>
                </div>
                <div className="right-side">
                  {f_date[1]? formatDate(f_date[1]) : "---"}
                </div>
              </div>
              <div className="content1">
              <div className="left-side">
                {f_icon[2] ? <img src={`http://openweathermap.org/img/wn/${f_icon[2]}.png`} alt="" /> : "---"}
                <span>
                  + {f_temp[2] ? f_temp[2] : "---"}
                </span>
                </div>
                <div className="right-side">
                  {f_date[2]? formatDate(f_date[2]) : "---"}
                </div>

              </div>
             
            
          </div>
          </div>
      </div>
      <div className="credits">
        <h1>SUBSCRIBE!</h1>
        <p>Stay ahead of the weather with our daily <br/> forecasts and updates! Get ready to embrace <br/> the elements and make the most of your day. <br/>
        </p>
      </div>
    </div>


  </div>
  </>
   
  );
}
