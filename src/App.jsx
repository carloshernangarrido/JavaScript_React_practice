import { useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";


function App(props) {
  const [tasks, tasksSet] = useState(props.tasks);
  const taskList = tasks?.map((task) => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id} 
      removeTask={removeTask} 
      toggleTaskCompleted={toggleTaskCompleted} 
    />
    )
  );

  function addTask(name) {
    tasksSet([...tasks, { id: `todo-${nanoid()}`, name: name, completed: false }]);
  }

  function removeTask(id, name) {
    const response = confirm('Quiere borrar la tarea ' + name + ' con id: ' + id);
    if (response == true) {
      tasksSet(tasks.filter(item => item.id !== id));
    }    
  }

  function toggleTaskCompleted(id, name) {
    const indexToExtract = tasks.findIndex(item => item.id === id);
    let task_to_toggle = tasks[indexToExtract];
    // console.log(id, name, indexToExtract, task_to_toggle);
    task_to_toggle.completed = task_to_toggle.completed ? false : true;
    // console.log(id, name, indexToExtract, task_to_toggle);
    tasksSet(tasks);
    console.log(tasks);
  }

  const plural_s = (tasks.length == 1) ? '' : 's';

  return (
    <div className="todoapp stack-large">
      <h1>Lista de quehaceres</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id="list-heading">{`${tasks.length} tarea${plural_s} restante${plural_s}`}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {/* <Todo name='jugar' id="todo-0" /> */}
        {taskList}
      </ul>
    </div>
  );
}

export default App;