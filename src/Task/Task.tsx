import React from "react";

interface ITask extends React.PropsWithChildren {
    message: string;
    onRemoveMessage: React.MouseEventHandler;
}

const Task: React.FC<ITask> = props => {
    return(
        <div className="message-box">
            <div>{props.message}</div>
            <button type="button" onClick={props.onRemoveMessage}>Delete</button>
        </div>
    )
};

export default Task;