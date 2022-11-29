import WeightGraphic from "./WeightGraphic";
import AverageDurationSessions from "./AverageDurationSessions";
import IntensitySession from "./IntensitySession";
import ScoreSession from "./ScoreSession";

import '../styles/daily.css'

function Daily() {
    return (
        <div className='daily_data'>
            <div className="daily_activity" style={{width: "100%", height: 320}}>
                <WeightGraphic />
            </div>
            <div className="session_data">
                <AverageDurationSessions />
                <IntensitySession />
                <ScoreSession />
            </div>
        </div>
    )
}

export default Daily