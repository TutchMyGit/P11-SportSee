import '../styles/welcome.css';
import PropTypes from 'prop-types';

function Welcome(props) {
    return (
        <div className="welcome_display">
            <h1 className="welcome_user">Bonjour <span className="user_name">{props.name}</span></h1>
            <h2 className="welcome_congratulations">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
    )
}

Welcome.propTypes = {
    name: PropTypes.string
}

export default Welcome