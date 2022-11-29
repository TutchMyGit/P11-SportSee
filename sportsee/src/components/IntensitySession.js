import { RadarChart, Radar, PolarGrid, PolarRadiusAxis, PolarAngleAxis, ResponsiveContainer, LabelList } from 'recharts';
import { useState, useEffect } from 'react';
import { requestUserPerformance } from '../api/service';
import { Performance } from '../models/Performance';

function IntensitySession() {

    const [performance, getPerformance] = useState([])

    useEffect(() => {
        requestUserPerformance()
        .then((data) => {
            const kind = data.kind
            data.data.forEach(element => {
                element.kind = kind[element.kind]
            })
            getPerformance(data.data.reverse().map(element => {
                return new Performance(element)
            }))
        });
    }, []);

    if (!performance) return null

    return (
        <div className='data_session' style={{backgroundColor: "#282D30"}}>
            <ResponsiveContainer width="100%">
                <RadarChart 
                    margin={{top: 20, left: 30, right: 30, bottom: 20}}
                    outerRadius="80%"
                    width={180}
                    height={180}
                    data={performance}
                    barSize={10}>
                        <PolarGrid radialLines={false}/>
                        <PolarAngleAxis dataKey="kind" tick={{fill: "white"}}/>
                        <PolarRadiusAxis tick={false} axisLine={false} tickCount={6} />
                        <Radar name='session' dataKey="value" stroke="#FF0101" fill='#FF0101' fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default IntensitySession