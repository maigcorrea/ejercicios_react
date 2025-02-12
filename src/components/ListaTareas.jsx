import React from 'react'

const ListaTareas = () => {

    // Estado para las tareas. Cada tarea tendrá un texto y un estado de completada.
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([
        ...tareas,
        { texto: nuevaTarea, completada: false }
      ]);
      setNuevaTarea('');
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  // Función para marcar una tarea como completada o no completada
  const toggleCompletada = (indice) => {
    const nuevasTareas = tareas.map((tarea, i) => 
      i === indice ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
  };

  return (
    <>
        {/* Input para agregar una nueva tarea */}
      <input 
        type="text" 
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)} 
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>

      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            <span onClick={() => toggleCompletada(indice)}>
              {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(indice)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListaTareas