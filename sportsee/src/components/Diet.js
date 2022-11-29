import '../styles/diet.css';
import PropTypes from 'prop-types';

function Diet(props) {
    return (
        <div className='diet_element'>
            <img src={props.img} alt={props.name} style={{backgroundColor: props.color}}/>
            <div className='diet_data'>
                <p className='diet_score'>{props.value}{props.mesurement}</p>
                <p className='diet_name'>{props.name}</p>
            </div>
        </div>
    )
}

Diet.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.number,
    mesurement: PropTypes.string,
}

export default Diet