import "./SuggestedCityItem.scss"

function SuggestedCityItem({ city, region, country, getSearchedCity }) {
    return (
        <div className="weather-control__search-bar__suggestions__item" onClick={getSearchedCity}>
            <div className="weather-control__search-bar__suggestions__item__wrapper">
                <h3 className="weather-control__search-bar__suggestions__item--city">{city}</h3>
                <p className="weather-control__search-bar__suggestions__item--region">{`${region}, ${country}`}</p>
            </div>
        </div>
    )
}

export default SuggestedCityItem
