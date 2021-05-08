import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}{' '}
                <FaTimes style={{ color: 'grey', cursor: 'pointer' }} onClick={() => onDelete(task.id)}></FaTimes>
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

Task.propTypes = {
    task: PropTypes.object,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
};

export default Task;
