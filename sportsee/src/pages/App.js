import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Welcome from '../components/Welcome';
import Daily from '../components/Daily';
import Diet from '../components/Diet';

import { useState, useEffect } from 'react';
import { requestUserData } from '../api/service';

import Calories from '../assets/caloriesIcon.svg';
import Proteines from '../assets/proteineIcon.svg';
import Glucides from '../assets/appleIcon.svg';
import Lipides from '../assets/bugerIcon.svg';

import '../styles/App.css';
import '../styles/main.css'

function App() {

  const [diet, getDiet] = useState(null)

  useEffect(() => {
    requestUserData()
    .then((data) => {
      getDiet(data);
    });
  }, []);

  if(!diet) return null;

  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <div className='main'>
          <SideBar />
          <div className='main_content'>
            <Welcome name={diet.userInfos.firstName}/>
            <Daily />
            <div className='diet_user'>
              <Diet img={Calories} value={diet.keyData.calorieCount} mesurement="kCal" name="Calories" color="rgba(255, 0, 0, 0.06)"/>
              <Diet img={Proteines} value={diet.keyData.proteinCount} mesurement="g" name="Proteines" color="rgba(74, 184, 255, 0.1)"/>
              <Diet img={Glucides} value={diet.keyData.carbohydrateCount} mesurement="g" name="Glucides" color="rgba(249, 206, 35, 0.1)"/>
              <Diet img={Lipides} value={diet.keyData.lipidCount} mesurement="g" name="Lipides" color="rgba(253, 81, 129, 0.1)"/>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;