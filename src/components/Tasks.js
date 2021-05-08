import Task from './Task';
import PropTypes from 'prop-types';

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>
            ))}
        </>
    );
};

Tasks.propTypes = {
    tasks: PropTypes.array,
    map: PropTypes.func,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
};

export default Tasks;
