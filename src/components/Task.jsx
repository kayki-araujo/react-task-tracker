import { FaTimes } from "react-icons/fa";

const Task = ({
    task: { id, text, day, reminder },
    actions: { deleteTask, toggleReminder },
}) => {
    return (
        <div
            className={`task ${reminder && "reminder"}`}
            onDoubleClick={() => toggleReminder(id)}
        >
            <h3>
                {text}
                <FaTimes
                    style={{ color: "red" }}
                    onClick={() => deleteTask(id)}
                />
            </h3>
            <p>{day}</p>
        </div>
    );
};

export default Task;
