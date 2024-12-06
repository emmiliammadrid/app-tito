//Base de datos de usuarios de trabajo
const bdUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [
    { username: "admin", password: "admin", id: 1 },
  ];