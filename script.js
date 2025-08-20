// Modo oscuro para todos los botones
// Código existente...

// Cargar proyectos desde projects.json
async function loadProjects() {
  try {
    const res = await fetch('projects.json');
    const projects = await res.json();
    const list = document.getElementById('projects-list');
    list.innerHTML = '';
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card bg-white rounded-lg p-6 shadow border border-gray-200 hover:border-blue-200 transition';
      card.innerHTML = `
        <h3 class="text-2xl font-extrabold mb-2 text-gray-800">${project.title}</h3>
        <p class="mb-2 text-gray-700">${project.description}</p>
        <p class="mb-2 text-sm text-gray-500 font-semibold">${project.technologies.join(', ')}</p>
        <a href="${project.link}" target="_blank" rel="noopener" class="inline-block px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded shadow hover:bg-blue-100 hover:border-blue-400 transition">Ver proyecto</a>
      `;
      list.appendChild(card);
    });
  } catch (err) {
    document.getElementById('projects-list').innerHTML = '<p class="text-red-500">No se pudieron cargar los proyectos.</p>';
  }
}
loadProjects();

// Accesibilidad: Enfocar el primer campo del formulario al abrir la sección de contacto
const contactoLink = document.querySelector('a[href="#contacto"]');
if (contactoLink) {
  contactoLink.addEventListener('click', () => {
    setTimeout(() => {
      document.querySelector('#contacto input[name="nombre"]').focus();
    }, 500);
  });
}
