import { useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";


function App(props) {
  const [taskId, taskIdSet] = useState(1);
  const [tasks, tasksSet] = useState(props.tasks);
  const taskList = tasks?.map((task) => (<Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>));

  function addTask(name) {
    taskIdSet(taskId + 1);
    tasksSet([...tasks, { id: "todo-" + String(taskId), name: name, completed: false }]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>Lista de quehaceres</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id="list-heading">2 tareas restantes</h2>
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