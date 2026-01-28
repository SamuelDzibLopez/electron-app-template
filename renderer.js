//P de texto
const information = document.getElementById('info');

//Button de FullScreen
const btn = document.getElementById("btnFullscreen");

//Texto utilizando variables y funciones precargadas 
information.innerText = `Esta aplicación está usando Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()}), Creador de app ${dates.author}`;

//Utilización de funcion precargada asincrona
const func = async () => {
  const response = await dates.ping()
  console.log(response) // prints 'pong'
}

func()

//Desactiva el menú contextual del navegador (el menú que aparece al hacer clic derecho)
window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

//Funcionamiento de Button de FullScreen
btn.addEventListener("click", () => {
  window.windowAPI.toggleFullscreen();
});


document.getElementById("closeBtn").addEventListener("click", () => {
  window.electronAPI.closeApp();
});
