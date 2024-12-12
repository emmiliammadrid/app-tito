// Seleccionar el botón de alternar tema
const themeToggleButton = document.getElementById('theme-toggle');

// Verificar la preferencia del usuario guardada en localStorage
const currentTheme = localStorage.getItem('theme') || 'light';

// Aplicar el tema guardado en el body
document.body.classList.add(currentTheme);

// Cambiar el texto del botón según el tema actual
themeToggleButton.textContent = currentTheme === 'dark' ? 'Modo Claro' : 'Modo Oscuro';

// Función para alternar entre modos
themeToggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    themeToggleButton.textContent = 'Modo Oscuro';
  } else {
    document.body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggleButton.textContent = 'Modo Claro';
  }
});
