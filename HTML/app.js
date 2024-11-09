function actualizarFechaHora() {
    const ahora = new Date();
    document.getElementById('fecha-actual').textContent = ahora.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('hora').textContent = ahora.toLocaleTimeString('es-ES');
}
export { actualizarFechaHora };

