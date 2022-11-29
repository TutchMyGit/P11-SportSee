import '../styles/header.css';
import Logo from '../assets/sportseeLogo.png'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo_img" src={Logo} alt="SportSee" />
                <p className="logo_title">SportSee</p>
            </div>
            <ul className="navbar">
                <li className="navbar_content">Accueil</li>
                <li className="navbar_content">Profil</li>
                <li className="navbar_content">Réglage</li>
                <li className="navbar_content">Communauté</li>
            </ul>
        </div>
    )
}

export default Header