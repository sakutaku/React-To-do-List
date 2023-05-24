import React, {useState} from 'react';
import './App.css';
import AddTaskFrom from "./AddTaskForm/AddTaskForm";

const App = () => {
  const[messages, setMessage] = useState([
    {value: 'Add new task', id: '1234'}
  ]);

  const addTask = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const messagesCopy = [...messages];
    const messageCopy = {...messagesCopy[0]};
    messageCopy.value = e.target.value;
    messagesCopy[0] = messageCopy;
    // e.preventDefault();
    setMessage(messagesCopy);
    // console.log(e.target.value);
  }

  const sendMessage = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const messagesCopy = [...messages];
    console.log(messagesCopy);
  }
  return (
      <AddTaskFrom value={messages[0].value} onChangeMessage={addTask} onSubmitMessage={sendMessage}/>
  );
}

export default App;
