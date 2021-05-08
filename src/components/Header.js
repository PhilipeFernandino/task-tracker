import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAddTask }) => {
    const location = useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
                    backgroundColor={showAddTask ? 'black' : 'purple'}
                    text={showAddTask ? 'Close' : 'Add'}
                    onClick={onAdd}
                ></Button>
            )}
        </header>
    );
};

Header.defaultProps = {
    title: 'Trascker',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func,
    showAddTask: PropTypes.bool,
};

export default Header;
