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

            <div class="cantidad-control">

              <button onclick="cambiarCantidad(${producto.id}, -1)">
              -
              </button>

              <span id="cantidad-${producto.id}">
              1
              </span>

              <button onclick="cambiarCantidad(${producto.id}, 1)">
              +
              </button>

            </div>

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

function cambiarCantidad(id, cambio) {

  const cantidadSpan =
    document.getElementById(`cantidad-${id}`);

  let cantidad =
    parseInt(cantidadSpan.textContent);

  cantidad += cambio;

  if (cantidad < 1) {
    cantidad = 1;
  }

  cantidadSpan.textContent = cantidad;
}