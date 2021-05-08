import PropTypes from 'prop-types';

const Button = ({ backgroundColor, text, onClick }) => {
    return (
        <div>
            <button className='btn' style={(backgroundColor = { backgroundColor })} onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

Button.defaultProps = {
    color: 'white',
    text: 'Default',
};

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
