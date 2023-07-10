const fs = require('fs');

let tasks = [];

// Función para cargar las tareas desde el archivo tasks.json
function loadTasks() {
  try {
    const data = fs.readFileSync('tasks.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Función para guardar las tareas en el archivo tasks.json
function saveTasks(tasks) {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks));
}

// Agregar una tarea
function addTask(task) {
  if (tasks.length >= 10) {
    throw new Error('La lista de tareas está llena. No se pueden agregar más tareas.');
  } else {
    if (!task || task.trim() === '') {
      throw new Error('La tarea no puede estar vacía.');
    } else {
      if (tasks.includes(task)) {
        console.log(`La tarea "${task}" ya está en la lista.`);
      } else {
        tasks.push(task);
        saveTasks(tasks);
        console.log('Tarea agregada correctamente.');
      }
    }
  }
}

// Eliminar una tarea
function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    const removedTask = tasks.splice(index, 1);
    saveTasks(tasks);
    console.log(`Tarea "${removedTask}" eliminada correctamente.`);
  } else {
    throw new Error('Índice de tarea inválido.');
  }
}

// Modificar una tarea
function modifyTask(index, newTask) {
  if (index >= 0 && index < tasks.length) {
    if (!newTask || newTask.trim() === '') {
      throw new Error('La tarea no puede estar vacía.');
    } else {
      if (tasks.includes(newTask)) {
        console.log(`La tarea "${newTask}" ya está en la lista.`);
      } else {
        tasks[index] = newTask;
        saveTasks(tasks);
        console.log('Tarea modificada correctamente.');
      }
    }
  } else {
    throw new Error('Índice de tarea inválido.');
  }
}

// Cargar las tareas
// tasks = loadTasks();

// Ejemplo de uso
// addTask('Leer un libro');
// addTask('Ir al gimnasio');
// addTask('Llevar al perro al veterinario')
// addTask('Hacer la compra');
// addTask('Hacer yogha');
// console.log(tasks);

// removeTask(0);
// console.log(tasks);

// modifyTask(0, 'Estudiar para el examen');
// modifyTask(1, 'lavar los platos');
// console.log(tasks);
