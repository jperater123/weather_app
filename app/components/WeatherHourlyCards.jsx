import React from 'react'

const WeatherHourlyCards = ({hours ,hour_icon ,hour_temp}) => {
  return (
    <div className="weather-cards">
            <div className="card1">
              <span>{hours[0] ? hours[0] : "----" }</span>
              {hour_icon[0] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[0]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[0] : "----"}&deg;
              </span>
            </div>
            <div className="card2">
            <span>{hours[1] ? hours[1] : "----" }</span>
             {hour_icon[1] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[1]}.png`}  alt="icon" />  : "----" }
              <span>
               {hour_temp ? hour_temp[1] : "----"}&deg;
              </span>
            </div>
            <div className="card3">
            <span>{hours[2] ? hours[2] : "----" }</span>
             {hour_icon[2] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[2]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[2] : "----"}&deg;
              </span>
            </div>
            <div className="card4">
            <span>{hours[3] ? hours[3] : "----" }</span>
             {hour_icon[3] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[3]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[3] : "----"}&deg;
              </span>
            </div>
            <div className="card5">
            <span>{hours[4] ? hours[4] : "----" }</span>
             {hour_icon[4] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[4]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[4] : "----"}&deg;
              </span>
            </div>
            <div className="card6">
            <span>{hours[5] ? hours[5] : "----" }</span>
             {hour_icon[5] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[5]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[5] : "----"}&deg;
              </span>
            </div>
            <div className="card7">
            <span>{hours[6] ? hours[6] : "----" }</span>
             {hour_icon[6] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[6]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[6] : "----"}&deg;
              </span>
            </div>
            <div className="card8">
            <span>{hours[7] ? hours[7] : "----" }</span>
             {hour_icon[7] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[7]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[7] : "----"}&deg;
              </span>
            </div>
            <div className="card9">
            <span>{hours[8] ? hours[8] : "----" }</span>
             {hour_icon[8] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[8]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[8] : "----"}&deg;
              </span>
            </div>
            <div className="card10">
            <span>{hours[9] ? hours[9] : "----" }</span>
             {hour_icon[9] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[9]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[9] : "----"}&deg;
              </span>
            </div>
            <div className="card11">
           <span>{hours[10] ? hours[10] : "----" }</span>
             {hour_icon[10] ? <img src={`http://openweathermap.org/img/wn/${hour_icon[10]}.png`}  alt="icon" />  : "----" }
              <span>
                {hour_temp ? hour_temp[10] : "----"}&deg;
                {}
              </span>
            </div>
          </div>
  )
}

export default WeatherHourlyCards