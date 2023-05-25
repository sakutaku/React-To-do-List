import React from "react";
import '../App.css';

interface IAddTaskFormProps extends React.PropsWithChildren {
    id?: string;
    value: string;
    onChangeMessage?: React.ChangeEventHandler<HTMLInputElement>;
    onSubmitMessage?: React.MouseEventHandler<HTMLFormElement>;

}
const AddTaskForm: React.FC<IAddTaskFormProps> = props => {
    return(
        <form onSubmit={props.onSubmitMessage} className="form">
            <div>
                <input type="text" onChange={props.onChangeMessage} value={props.value} className="input"></input>
            </div>
            <button type="submit" className="btn-form">Add</button>
        </form>
    )
};

export default AddTaskForm;