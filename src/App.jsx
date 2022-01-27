import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "text 1",
            day: "01/01/01",
            reminder: true,
        },
        {
            id: 2,
            text: "text 2",
            day: "02/02/02",
            reminder: true,
        },
        {
            id: 3,
            text: "text 3",
            day: "03/03/03",
            reminder: true,
        },
        {
            id: 4,
            text: "text 4",
            day: "04/04/04",
            reminder: true,
        },
        {
            id: 5,
            text: "text 5",
            day: "05/05/05",
            reminder: true,
        },
    ]);

    const [isAddTaskVisible, setIsAddTaskVisible] = useState(false);

    const toggleAddTask = () => {
        setIsAddTaskVisible(!isAddTaskVisible);
    };

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className="container">
            <Header
                isAddTaskVisible={isAddTaskVisible}
                actions={{ toggleAddTask }}
            />

            {isAddTaskVisible && <AddTask actions={{ addTask }} />}

            {tasks.length > 0 ? (
                <Tasks tasks={tasks} actions={{ deleteTask, toggleReminder }} />
            ) : (
                "no tasks"
            )}
        </div>
    );
}

export default App;
