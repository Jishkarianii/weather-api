import './App.scss';
import { useEffect, useState } from 'react';
import TodayWeatherItem from './components/TodayWeatherItem';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// Big icon "https://cdn.weatherapi.com/weather/128x128/day/353.png"
// Small icon "https://cdn.weatherapi.com/weather/64x64/day/113.png"

const currentApi = "https://api.weatherapi.com/v1/current.json?key=ba776fa7fed54f97ab7105705221603&q=";
const forecastApi = "https://api.weatherapi.com/v1/forecast.json?key=ba776fa7fed54f97ab7105705221603&q=";
const searchApi = "https://api.weatherapi.com/v1/search.json?key=ba776fa7fed54f97ab7105705221603&q=";

function App() {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch(`${forecastApi}tokio`)
    .then(res => res.json())
    .then(data => {
      console.log(data)

      setData(data)
      setIsLoaded(true)
    })
  }, [])

  return (
    <div className="App">
      <div className="bg"></div>
      <div className="weather-cont">
        <div className="weather-location">
          <h2 className="weather-location__name">London, UK</h2>
          <h2 className="weather-location__date">Sunday 4th August</h2>
        </div>
        <div className="current-weather">
          <div className="current-weather__inner__first">
            <div className="current-weather__inner__first__icon">
              <img src="https://cdn.weatherapi.com/weather/128x128/day/353.png" alt="icon" />
            </div>
            <div className="current-weather__inner__first__temp">
              <h2 className="current-weather__inner__first__temp--value">21°</h2>
              <p className="current-weather__inner__first__temp--summary">Mostly Sunny</p>
            </div>
          </div>
          <div className="current-weather__inner__second">
            <div className="current-weather__inner__second__status">
              <h3 className="current-weather__inner__second__status--value">23°</h3>
              <p className="current-weather__inner__second__status--label">High</p>
            </div>
            <div className="current-weather__inner__second__status">
              <h3 className="current-weather__inner__second__status--value">7mph</h3>
              <p className="current-weather__inner__second__status--label">Wind</p>
            </div>
            <div className="current-weather__inner__second__status">
              <h3 className="current-weather__inner__second__status--value">05:27</h3>
              <p className="current-weather__inner__second__status--label">Sunrise</p>
            </div>
            <div className="current-weather__inner__second__status">
              <h3 className="current-weather__inner__second__status--value">14°</h3>
              <p className="current-weather__inner__second__status--label">Low</p>
            </div>
            <div className="current-weather__inner__second__status">
              <h3 className="current-weather__inner__second__status--value">0%</h3>
              <p className="current-weather__inner__second__status--label">Rain</p>
            </div>
            <div className="current-weather__inner__second__status">
              <h3 className="current-weather__inner__second__status--value">20:57</h3>
              <p className="current-weather__inner__second__status--label">Sunset</p>
            </div>
          </div>
        </div>
        <div className="today-weather">
          <h3 className="today-weather__title">Today's weather</h3>
          <Swiper
            slidesPerView={7}
            spaceBetween={10}
            grabCursor={true}
            pagination={{
              dynamicBullets: true
            }}
            modules={[Pagination]}
            className="today-weather__swiper"
          >
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TodayWeatherItem
                hour={"12:00"}
                icon={"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
                temp={"14°"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default App;
