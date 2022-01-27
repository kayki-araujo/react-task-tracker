import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ isAddTaskVisible, title, actions: { toggleAddTask } }) => {
    const onClick = () => {
        toggleAddTask();
    };

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={isAddTaskVisible ? "red" : "green"} text={isAddTaskVisible ? "close" : "add"} onClick={onClick}></Button>
        </header>
    );
};

Header.defaultProps = {
    title: "Task Manager!",
};

Header.propTypes = {
    title: PropTypes.string,
    actions: PropTypes.object,
};

export default Header;
