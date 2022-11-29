import { ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { useState, useEffect } from 'react';
import { requestUserData } from '../api/service';
import { Score } from '../models/Score';

function ScoreSession() {

    const [userScore, getScore] = useState({})

    useEffect(() => {
        requestUserData()
        .then((data) => {
            console.log(data)
            getScore(new Score(data))
        })
    }, []);

    console.log(userScore)
    const score = [
        { value: userScore.score},
        { value: 1 - userScore.score}
    ]

    console.log(score)

    return (
        <div className='data_session score_session'>
            <h2 className='score_title'>Score</h2>
            <ResponsiveContainer>
                <PieChart >
                    <Pie data={score} dataKey="value" innerRadius={70} outerRadius={85} startAngle={90} fill='#ff0000'/>
                    {score.map((entry, index) =>
                        index === 0 ? (
                            <Cell key={`cell-${index}`} cornerRadius={10} />
                        ) : (
                            <Cell key={`cell-${entry}`} />
                        )
                    )}
                </PieChart>
            </ResponsiveContainer>
            <p className='score_text'>
                <span className='score_number'>
                    {score[0].value * 100}%<br />
                </span>
                de votre
                <br /> objectif
            </p>
        </div>
    )
}

export default ScoreSession