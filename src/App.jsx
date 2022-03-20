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
import SuggestedCityItem from './components/SuggestedCityItem';

const forecastApi = "https://api.weatherapi.com/v1/forecast.json?key=ba776fa7fed54f97ab7105705221603&q=";
const searchApi = "https://api.weatherapi.com/v1/search.json?key=ba776fa7fed54f97ab7105705221603&q=";

// Global variables
const defaultCity = "Kutaissi";
const showSuggestedCity = 5;

function App() {
  const [data, setData] = useState([])
  const [isLoadedData, setIsLoadedData] = useState(false)
  
  const [editedDate, setEditedDate] = useState("")
  const [editedIcon, setEditedIcon] = useState("")
  
  const [cityName, setCityName] = useState("")
  const [suggestedCity, setSuggestedCity] = useState([])
  const [isLoadedSuggested, setIsLoadedSuggested] = useState(false)

  // To get default city forecast
  useEffect(() => {
    getWeatherApi()
  }, [])

  // To get suggested cities from API
  useEffect(() => {
    fetch(`${searchApi}/${cityName}`)
    .then(res => res.json())
    .then(data => {
      setSuggestedCity(data)
      
      // Check if is suggested cities
      if (data.length) {
        setIsLoadedSuggested(true)
      } else {
        setIsLoadedSuggested(false)
      }
    })
  }, [cityName])
  
  // To get forecast for searched city
  const getSearchedCity = city => {
    setIsLoadedSuggested(false)
    getWeatherApi(city)
  }

  // For clear search bar
  const clearSearchBar = () => {
    setCityName("")
  }
  
  // To get Data from API
  const getWeatherApi = (city = defaultCity) => {
    fetch(`${forecastApi}${city}`)
    .then(res => res.json())
    .then(data => {
      setData(data)
      dateHandler(data)
      iconHandler(data)
      setIsLoadedData(true)
    })
  }

  // To get the correct date
  const dateHandler = data => {
    const currentDate = new Date(data.location.localtime_epoch)
    const editingDate = currentDate.toDateString().split(" ")
    editingDate.pop()
    const doneDateEditing = editingDate.join(" ")

    setEditedDate(doneDateEditing)
  }

  // To get the bigger icon
  const iconHandler = data => {
    const currentIcon = data.current.condition.icon;
    const editingIcon = currentIcon.split("/")
    editingIcon[4] = "128x128";
    const doneIconEditing = editingIcon.join("/")

    setEditedIcon(doneIconEditing)
  }

  return (
    <div className="App">
      {isLoadedData && (
        <>
          <div className={`bg ${data.current.is_day ? "bg__day" : "bg__night"}`}></div>
          <div className="weather-cont">
            <div className="weather-control">
              <div className="weather-control__search-bar">
                <div className={`weather-control__search-bar__input ${isLoadedSuggested && "active"}`}>
                  <i className="fa-solid fa-magnifying-glass-location" />
                  <input 
                    className="weather-control__search-bar__input--value"
                    placeholder="Search city"
                    value={cityName}
                    onChange={e => {
                      setCityName(e.target.value)
                    }}
                  />
                  <i className="fa-solid fa-xmark" onClick={clearSearchBar} />
                </div>
                <div className="weather-control__search-bar__suggestions">
                  {isLoadedSuggested && (
                    suggestedCity.map((city, idx) => {
                      if (idx < showSuggestedCity) {
                        return (
                          <SuggestedCityItem 
                            key={city.id}
                            city={city.name}
                            region={city.region}
                            country={city.country}
                            getSearchedCity={() => {
                              getSearchedCity(city.name)
                            }}
                          />
                        )
                      }
                    })
                  )}
                </div>
              </div>
            </div>
            <div className="weather-location">
              <h2 className="weather-location__name">{`${data.location.name}, ${data.location.country}`}</h2>
              <h2 className="weather-location__date">{editedDate}</h2>
            </div>
            <div className="current-weather">
              <div className="current-weather__inner__first">
                <div className="current-weather__inner__first__icon">
                  <img src={editedIcon} alt="icon" />
                </div>
                <div className="current-weather__inner__first__temp">
                  <h2 className="current-weather__inner__first__temp--value">{`${Math.round(data.current.temp_c)}°`}</h2>
                  <p className="current-weather__inner__first__temp--summary">{data.current.condition.text}</p>
                </div>
              </div>
              <div className="current-weather__inner__second">
                <div className="current-weather__inner__second__status">
                  <h3 className="current-weather__inner__second__status--value">{`${Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°`}</h3>
                  <p className="current-weather__inner__second__status--label">High</p>
                </div>
                <div className="current-weather__inner__second__status">
                  <h3 className="current-weather__inner__second__status--value">{`${Math.round(data.current.wind_mph)} mph`}</h3>
                  <p className="current-weather__inner__second__status--label">Wind</p>
                </div>
                <div className="current-weather__inner__second__status">
                  <h3 className="current-weather__inner__second__status--value">{data.forecast.forecastday[0].astro.sunrise}</h3>
                  <p className="current-weather__inner__second__status--label">Sunrise</p>
                </div>
                <div className="current-weather__inner__second__status">
                  <h3 className="current-weather__inner__second__status--value">{`${Math.round(data.forecast.forecastday[0].day.mintemp_c)}°`}</h3>
                  <p className="current-weather__inner__second__status--label">Low</p>
                </div>
                <div className="current-weather__inner__second__status">
                  <h3 className="current-weather__inner__second__status--value">{`${data.current.humidity}%`}</h3>
                  <p className="current-weather__inner__second__status--label">Humidity</p>
                </div>
                <div className="current-weather__inner__second__status">
                  <h3 className="current-weather__inner__second__status--value">{data.forecast.forecastday[0].astro.sunset}</h3>
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
                {data.forecast.forecastday[0].hour.map((weather, idx) => (
                  <SwiperSlide key={idx}>
                    <TodayWeatherItem
                      hour={weather.time.split(" ")[1]}
                      icon={weather.condition.icon}
                      temp={`${Math.round(weather.temp_c)}°`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
