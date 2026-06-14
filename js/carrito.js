fetch("../data/productos.json")
  .then(response => response.json())
  .then(productos => {

    const carrito =
      JSON.parse(localStorage.getItem("carrito")) || [];

    const contenedor =
      document.getElementById("carrito-container");

    let total = 0;

    carrito.forEach(id => {

      const producto =
        productos.find(p => p.id === id);

      if(producto){

        total += producto.precio;

        contenedor.innerHTML += `
          <div class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p>${producto.descripcion}</p>

            <p>$${producto.precio}</p>

          </div>
        `;
      }

    });

    const totalCompra =
      document.getElementById("totalCompra");

    if (totalCompra) {

      totalCompra.textContent =
        `Total: $${total}`;

    }

  });

const vaciarCarritoBtn =
  document.getElementById("vaciarCarritoBtn");

if (vaciarCarritoBtn) {

  vaciarCarritoBtn.addEventListener("click", () => {

    const confirmar =
      confirm("¿Seguro que querés vaciar el carrito?");

    if (!confirmar) return;

    localStorage.removeItem("carrito");

    location.reload();

  });

}