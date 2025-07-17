// URL base de tu backend (ajusta según tu configuración)
const API_URL = 'http://localhost:5000';

document.addEventListener('DOMContentLoaded', () => {
  // Cargar cursos al iniciar
  cargarCursos();

  // Manejar el formulario
  document.getElementById('curso-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const curso = {
      CursoName: document.getElementById('nombre').value,
      IdiomaID: document.getElementById('codigo').value,
      DiaID: document.getElementById('dia').value
    };

    try {
      const response = await fetch(`${API_URL}/cursos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
      });

      if (response.ok) {
        cargarCursos();
        document.getElementById('curso-form').reset();
      } else {
        console.error('Error al guardar el curso');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
});

// Función para cargar y mostrar los cursos
async function cargarCursos() {
  try {
    const response = await fetch(`${API_URL}/cursos`);
    const cursos = await response.json();
    
    const cursosList = document.getElementById('cursos-list');
    cursosList.innerHTML = '';
    
    cursos.forEach(curso => {
      const cursoElement = document.createElement('div');
      cursoElement.className = 'curso-item';
      cursoElement.innerHTML = `
        <strong>${curso.CursoName}</strong> | IdiomaID: ${curso.IdiomaID} | DiaID: ${curso.DiaID}
        <button onclick="eliminarCurso('${curso.CursoID || curso._id || ''}')">Eliminar</button>
      `;
      cursosList.appendChild(cursoElement);
    });
  } catch (error) {
    console.error('Error al cargar cursos:', error);
  }
}

// Función para eliminar un curso
async function eliminarCurso(id) {
  try {
    const response = await fetch(`${API_URL}/cursos/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      cargarCursos();
    }
  } catch (error) {
    console.error('Error al eliminar curso:', error);
  }
}
