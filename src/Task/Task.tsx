import React from "react";
import '../App.css';

interface ITask extends React.PropsWithChildren {
    message: string;
    onRemoveMessage: React.MouseEventHandler;
}

const Task: React.FC<ITask> = props => {
    return(
        <div className="message-box">
            <div>

                <label>
                    <input type="checkbox" className="input2"/>
                    <span className="span">{props.message}</span>
                </label>
            </div>

            {/*<div>{props.message}</div>*/}
            <button type="button" onClick={props.onRemoveMessage} className="btn-remove"></button>
        </div>
    )
};

export default Task;