import React, { useState } from "react";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const validateTask= (task) =>{
    if (!task|| !task.trim()){
      alert('El Campo de tarea es obligatorio')
    }
    setTask([...tasks, task]);setTask('');
  }
  const delateTask = (task)=>{
    const newTasks = task.filter((item) => item !== task);
    setTask([...newTasks]) 
    console.log(Tasks)
  }
  return (
    <div className="container  ">
      <h1>My Todos</h1>
      <div className="todolist">
        <input type="text" placeholder="Agregar Tarea"
        onChange={(evt) => setTask(evt.target.value)}
        onKeyDown={(evt) => evt.key ==='Enter' && validateTask(task)}
        value={task}
        />
        <div>
          {
          tasks.map((item, index) => <p key={index}> {item}<span onClick={()=> delateTask(item)}>X</span></p>)
          }
        </div>

      </div>
    </div>
  );
};

export default Home;
