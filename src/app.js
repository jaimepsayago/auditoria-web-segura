const form = document.getElementById('logForm');
const historial = document.getElementById('historial');
let registros = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value;
  const cambio = document.getElementById('cambio').value;
  const fecha = new Date().toLocaleString();

  registros.push({ usuario, cambio, fecha });
  mostrarRegistros();
  form.reset();
});

function mostrarRegistros() {
  historial.innerHTML = '<h3>Historial de Cambios</h3>';
  registros.forEach(r => {
    historial.innerHTML += `<p><strong>${r.usuario}</strong>: ${r.cambio} (${r.fecha})</p>`;
  });
}
