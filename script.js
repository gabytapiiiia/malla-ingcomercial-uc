document.querySelectorAll('.curso').forEach(curso => {
  curso.addEventListener('click', () => {
    curso.classList.toggle('completed');
    actualizarCursos();
  });
});

function actualizarCursos() {
  const completados = new Set(
    [...document.querySelectorAll('.curso.completed')].map(c => c.dataset.id)
  );

  document.querySelectorAll('.curso').forEach(curso => {
    const prereqs = curso.dataset.prereq?.split(',') || [];
    const desbloqueado = prereqs.every(p => completados.has(p));

    if (!curso.classList.contains('completed') && desbloqueado) {
      curso.classList.add('unlocked');
    } else {
      curso.classList.remove('unlocked');
    }
  });
}
