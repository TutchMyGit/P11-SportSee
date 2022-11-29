import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { requestUserActivity } from '../api/service';
import { Session } from '../models/Session';

function WeightGraphic() {
    const [sessions, getSessions] = useState([])

    useEffect(() => {
        requestUserActivity()
        .then((data) => {
            getSessions(data.sessions.map(element => {
                return new Session(element)
            }))
        });
    }, []);

    if (sessions.length === 0) return null

    const barChartTooltip = ({ active, payload }) => {
        
        if(active){
            return (
                <div className='barchart_tooltip'>
                    <h3 className='barchart_tooltip_value'>{payload[0].value}kg</h3>
                    <h3 className='barchart_tooltip_value'>{payload[1].value}Kcal</h3>
                </div>
            )
        }
    }

    return (
        <ResponsiveContainer>
            <BarChart 
                width={800} height={200} 
                data={sessions} 
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis type='category' stroke='grey' strokeOpacity={0.4}/>
                    <YAxis
                        yAxisId='right-axis'
                        dataKey="kilogram"
                        domain={['dataMin - 5', 'dataMax + 8']} 
                        type='number' 
                        orientation='right' 
                        tickCount={3} 
                        axisLine={false}/>
                    <YAxis
                        yAxisId='left-axis'
                        dataKey="calories"
                        domain={['dataMin - 100', 'dataMax + 20']}
                        type='number'
                        orientation='left'
                        tickCount={3}
                        hide={true}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray='3' vertical={false}/>
                    <Tooltip content={barChartTooltip}/>
                    <Legend 
                        verticalAlign='top' 
                        align='right' 
                        iconType="circle" 
                        iconSize={10} 
                        height={70} 
                        wrapperStyle={{
                            marginTop: "16px",
                            marginRight: "10px"
                        }}/>
                    <Bar name="Poids (Kg)" yAxisId='right-axis' dataKey="kilogram" data={sessions.kilogram} fill="black" barSize={7} radius={[10, 10, 0, 0]}/>
                    <Bar name="Calories brûlées (Kcal)" yAxisId='left-axis' dataKey="calories" data={sessions.calories} fill='red' barSize={7} radius={[10, 10, 0, 0]}/>
                    <text x="20" y="36" fontSize="16" fontWeight="700">Activité quotidienne</text>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default WeightGraphic