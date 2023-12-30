import { useState } from "react";

function Form(props) {
    const [name, nameSet] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (name == "") {
            alert("No se pueden agregar tareas sin nombre");
        }
        else {
            props.addTask(name);
            nameSet("");
        }
    }

    function handleChange(event) {
        let string = event.target.value;
        string = string.charAt(0).toUpperCase() + string.slice(1);
        nameSet(string);
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            ¿Qué hay que hacer?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        
        <button type="submit" className="btn btn-primary bnt-lg">
          Agregar
        </button>
      </form>
    );
}

export default Form