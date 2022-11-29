import WeightGraphic from "./WeightGraphic";

function Weight() {
    return (
        <div className='daily_activity'>
            <div className='daily_activity_header'>
                <h3 className='daily_activity_title'>Activité quotidienne</h3>
                <ul className='daily_activity_legends'>
                    <li>Poids (kg)</li>
                    <li>Calories brûlées (kCal)</li>
                </ul>
            </div>
            <WeightGraphic />
        </div>
    )
}

export default Weight