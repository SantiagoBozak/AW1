fetch("../data/productos.json")
  .then(response => response.json())
  .then(productos => {

    const contenedor = document.getElementById("productos");
    const categoriaPagina = document.body.dataset.categoria;

    if (!contenedor) return;

    productos
        .filter(producto =>
        !categoriaPagina ||
        producto.categoria === categoriaPagina
        )
        .forEach(producto => {

      contenedor.innerHTML += `
        <div class="card">

          <img src="${producto.imagen}" alt="${producto.nombre}">

          <div class="card-content">

            <h3>${producto.nombre}</h3>

            <p>${producto.descripcion}</p>

            <h4>$${producto.precio}</h4>

            <button onclick="agregarAlCarrito(${producto.id})">
              Agregar al carrito
            </button>

          </div>

        </div>
      `;
    });
  });

function agregarAlCarrito(id) {

  let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.push(id);

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

  alert("Producto agregado");
}