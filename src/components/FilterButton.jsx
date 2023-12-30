
function FilterButton(props) {

    return (
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Mostrar </span>
          <span>todas</span>
          <span className="visually-hidden"> las tareas</span>
        </button>
    );
}

export default FilterButton