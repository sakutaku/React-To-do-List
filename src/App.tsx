import React, {useState} from 'react';
import './App.css';
import AddTaskFrom from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

const App = () => {
  const[messages, setMessage] = useState([
      {task: 'Add new task', id: '1234'},
      {task: 'Buy coffee', id: '5678'},
      {task: 'Exercise', id: '9112'},
  ]);

  const addTask = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const messagesCopy = [...messages];
    const messageCopy = {...messagesCopy[0]};
    // messagesCopy.push(newMessage);
    messageCopy.task = e.target.value;
    messagesCopy[0] = messageCopy;
    setMessage(messagesCopy);
  };

  const randomNum = () => {
      const date = new Date();
      return date;
  };

  const sendMessage = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentTask = messages[0].task;
    const newtask = {
        task: currentTask,
        id: `${randomNum()}`,
    };
    messages.push(newtask);
    console.log(messages);
  };

  const removeMessage = () => {
    console.log('lets imagine that message was removed');
  };

  const messageList = messages.map(oneMessage => {
    return(
      <Task
          message={oneMessage.task}
          onRemoveMessage={removeMessage}
          key={oneMessage.id}
      />
    );
  });

  return (
      <div className="App">
          <h1>To-do list!</h1>
        <div>
          <AddTaskFrom value={messages[0].task} onChangeMessage={addTask} onSubmitMessage={sendMessage}/>
        </div>
        <div>
          {messageList}
        </div>
      </div>
  );
}

export default App;
