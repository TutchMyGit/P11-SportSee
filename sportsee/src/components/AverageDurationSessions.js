import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { requestUserAverageSessions } from '../api/service';
import { AverageDuration } from '../models/AverageDuration';

function AverageDurationSessions() {

    const [duration, getDuration] = useState([])
    

    useEffect(() => {
        requestUserAverageSessions()
        .then((data) => {
            const dayName = {
                1: 'L',
                2: 'M',
                3: 'M',
                4: 'J',
                5: 'V',
                6: 'S',
                7: 'D'
            }
            data.sessions.forEach(element => {
                element.day = dayName[element.day]
            })
            getDuration(data.sessions.map(element => {
                return new AverageDuration(element)
            }))
        });
    }, []);

    if (!duration) return null

    const averageSessionTooltip = ({ active, payload }) => {
        
        if(active) {
            return (
                <div className='tooltip_container'>
                    <h3 className='tooltip_text'>{payload[0].value}min</h3>
                </div>
            )
        }
        return null;
    }

    return (
        <div className="data_session average_session" style={{backgroundColor: "#FF0000"}}>
            <p>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="75%">
                <LineChart data={duration} strokeWidth={1}
                    onMouseMove={(e) => {
                        if (e.isTooltipActive === true) {
                            let div = document.querySelector('.average_session')
                            let windowWidth = div.clientWidth
                            let mouseXpercentage = Math.round(
                                (e.activeCoordinate.x / windowWidth) * 100
                            )
                            // @ts-ignore
                            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                        }
                    }}
                >
                    <XAxis axisLine={false} tickLine={false} dataKey="day" padding={{right:5, left:5}} tick={{ fontSize: 13, stroke: "white", opacity: 0.8}} style={{color: "#FFFFFF", fontWeight: "500"}}/>
                    <YAxis axisLine={false} tick={false} hide={true} dataKey="sessionLength" domain={[0, "dataMax + 30"]} />
                    <Tooltip content={averageSessionTooltip} />
                    <Line name="sessionLength" type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AverageDurationSessions