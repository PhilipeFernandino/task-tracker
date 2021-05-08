import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import About from './components/About';
import AddTask from './components/AddTask';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        };
        getTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();
        return data;
    };

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleReminder = async (id) => {
        // const taskToToggle = await fetchTasks(id);
        // const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
        setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
        const idx = tasks.findIndex((task) => task.id === id);
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ ...tasks[idx], reminder: !tasks[idx].reminder }),
        });
        // const data = await res.json();
        // const taskToToggle = await fetchTasks(id);
        // await
    };

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        const data = await res.json();
        setTasks([...tasks, data]);
    };

    return (
        <Router>
            <div className='container'>
                <Header title='Trascker' onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
                <Route
                    path='/'
                    exact
                    render={() => (
                        <>
                            {showAddTask && <AddTask onAdd={addTask} />}
                            {tasks.length > 0 ? (
                                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                            ) : (
                                'You have completed all of your tasks. Go get some rest!'
                            )}
                        </>
                    )}
                />
                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
