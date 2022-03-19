import "./TodayWeatherItem.scss"

function TodayWeatherItem({ hour, icon, temp }) {
    return (
        <div className="today-weather__swiper__item">
            <p className="today-weather__swiper__item--hour">{hour}</p>
            <img src={icon} alt="icon" />
            <p className="today-weather__swiper__item--temp">{temp}</p>
        </div>
    )
}

export default TodayWeatherItem
