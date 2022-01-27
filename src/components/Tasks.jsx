import Task from "./Task";
const Tasks = ({ tasks, actions }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} actions={actions} />
            ))}
        </>
    );
};

export default Tasks;
