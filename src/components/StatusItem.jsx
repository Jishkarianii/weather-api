import "./StatusItem.scss"

function StatusItem({ value, label }) {
    return (
        <div className="current-weather__inner__second__status">
            <h3 className="current-weather__inner__second__status--value">{value}</h3>
            <p className="current-weather__inner__second__status--label">{label}</p>
        </div>
    )
}

export default StatusItem
