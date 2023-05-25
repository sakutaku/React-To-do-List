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

  const [tasks, setTasks] = useState([
      {task: '', id: ''}
  ]);

  const addTask = (e: React.ChangeEvent<HTMLInputElement>)=> {
      const tasksCopy = [...tasks];
      const taskCopy = {...tasksCopy[0]};
      taskCopy.task = e.target.value;
      tasksCopy[0] = taskCopy;
      setTasks(tasksCopy);
  };

  const randomNum = () => {
      const dateId = new Date();
      return dateId;
  };

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    const currentTask = tasks[0].task;
    const newTask = {
        task: currentTask,
        id: `${randomNum()}`,
    };

    setMessage([...messages, newTask]);
  };

  const removeMessage = (id: string) => {
    const messagesCopy = [...messages];

    const index = messages.findIndex(message => {
        if(message.id === id) {
              return true;
        } else {
              return false;
        }
    });

    messagesCopy.splice(index, 1);
    setMessage(messagesCopy);
  };

  const messageList = messages.map(oneMessage => {
    return(
      <Task
          message={oneMessage.task}
          onRemoveMessage={() => removeMessage(oneMessage.id)}
          key={oneMessage.id}
      />
    );
  });

  return (
      <div className="App">
          <h1>To-do list!</h1>
        <div>
          <AddTaskFrom  onChangeMessage={addTask} onSubmitMessage={sendMessage}/>
        </div>
        <div>
          {messageList}
        </div>
      </div>
  );
}

export default App;
