const paginas = [
  { titulo: "Home", rutaRoot: "index.html", rutaPage: "../index.html" },

  { titulo: "Wireless", rutaRoot: "./page/categoria1.html", rutaPage: "./categoria1.html" },

  { titulo: "Wired", rutaRoot: "./page/categoria2.html", rutaPage: "./categoria2.html" },

  { titulo: "Gaming", rutaRoot: "./page/categoria3.html", rutaPage: "./categoria3.html" },

  { titulo: "Login", rutaRoot: "./page/login.html", rutaPage: "./login.html" },

  { titulo: "Registro", rutaRoot: "./page/registro.html", rutaPage: "./registro.html" },

  { titulo: "Carrito", rutaRoot: "./page/carrito.html", rutaPage: "./carrito.html" }
];

function crearNavbar() {

  const navbar = document.getElementById("navbar");

  if (!navbar) return;

  const estamosEnPage = window.location.pathname.includes("/page/");

  let contenido = `
    <nav>
      <div class="container">
        <h1 class="logo">👌 Mickey Mouses 👌</h1>
        <ul>
  `;
  //Mejora Etapa 4
  const carrito = 
    JSON.parse(localStorage.getItem("carrito")) || [];

  paginas.forEach(pagina => {

    const ruta = estamosEnPage
      ? pagina.rutaPage
      : pagina.rutaRoot;

    let tituloMostrar = pagina.titulo;

    if (pagina.titulo === "Carrito") {

      tituloMostrar = `Carrito (${carrito.length})`;

    }
    
    contenido += `
      <li>
        <a href="${ruta}">
          ${tituloMostrar}
        </a>
      </li>
    `;
  });

  const usuario = sessionStorage.getItem("usuario");

  if (usuario) {

    contenido += `
      <li>
        <a href="#" id="logoutBtn">Logout</a>
      </li>
    `;
  }

  contenido += `
        </ul>
      </div>
    </nav>
  `;

  navbar.innerHTML = contenido;

  const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

  logoutBtn.addEventListener("click", () => {

    sessionStorage.removeItem("usuario");

    const rutaLogin = estamosEnPage
      ? "./login.html"
      : "./page/login.html";

    window.location.href = rutaLogin;

  });

}
}

crearNavbar();

//Mejora Etapa 4
const bienvenida =
  document.getElementById("bienvenida");

  const usuario =
  sessionStorage.getItem("usuario");

  if (bienvenida && usuario) {

  bienvenida.textContent =
    `Hola!!! ${usuario} 😊😊😊`;
  }