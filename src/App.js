import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDo,setList] = useState([
      {
          task: "Create theme",
          isDone: false
      },
      {
          task: "Work on wordpress",
          isDone: false
      },
      {
          task: "Organize office main department",
          isDone: false
      },
      {
          task: "Error solve in HTML template",
          isDone: false
      }
  ]);
  const [task,setTask] = useState("");
  let handleCraete = () => {
      setList([...toDo,{task:task,isDone: false}]);
      setTask("");
  }
  let handleChange = (e,id) => {
      toDo[id].isDone = e.target.checked
      setList([...toDo]);
  } 
  let handleDelete = (index) => {
      let confirm = window.confirm("Do you want to delete ?");
        if(confirm)
        {
            toDo.splice(index,1);
            setList([...toDo]);
        }
  }
  return (
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card card-white">
                <div class="card-body">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" value={task} onChange={e => setTask(e.target.value)} placeholder="Add Task..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button onClick={handleCraete} class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
                    </div>
                    <ul class="nav nav-pills todo-nav">
                        <li role="presentation" class="nav-item all-task active"><a href="" class="nav-link">All</a></li>
                        <li role="presentation" class="nav-item active-task"><a href="" class="nav-link">Active</a></li>
                        <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link">Completed</a></li>
                    </ul>
                    <div class="todo-list">
                        {
                            toDo.map((items,index) => {
                                return(
                                    <div class="todo-item">
                                        <div class="checker"><span class=""><input type="checkbox" checked={items.isDone} onChange={(e) => {handleChange(e,index)}}/></span></div>
                                        <span style={{textDecoration:items.isDone ? "line-through" : ""}}>{items.task}</span>
                                        <a class="float-right remove-todo-item"><span class="badge bg-primary rounded-pill" onClick={() => {handleDelete(index)}}>X</span></a>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
