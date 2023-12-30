
function Todo(props) {
    const removeTask = props.removeTask, toggleTaskCompleted = props.toggleTaskCompleted;

    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => toggleTaskCompleted(props.id, props.name)}/>
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Editar <span className="visually-hidden">{props.name}</span>
                </button>
                <button type="button" className="btn btn__danger" onClick={() => removeTask(props.id, props.name)}>
                    Borrar <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    );
}

export default Todo;