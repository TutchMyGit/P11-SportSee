import '../styles/sidebar.css';
import Yoga from '../assets/yogaIcon.png';
import Swim from '../assets/natationIcon.png';
import Bicycle from '../assets/bicycleIcon.png';
import Musculation from '../assets/musculationIcon.png'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar_icons_menu">
                <div className="sidebar_icon_block">
                    <img className="sidebar_icon" src={Yoga} alt='Yoga' />
                </div>
                <div className="sidebar_icon_block">
                    <img className="sidebar_icon" src={Swim} alt='Swim' />
                </div>
                <div className="sidebar_icon_block">
                    <img className="sidebar_icon" src={Bicycle} alt='Bicycle' />
                </div>
                <div className="sidebar_icon_block">
                    <img className="sidebar_icon" src={Musculation} alt='Musculation' />
                </div>
            </div>
            <p className="copyright">Copiryght, SportSee 2020</p>
        </div>
    )
}

export default SideBar