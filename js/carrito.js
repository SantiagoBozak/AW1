fetch("../data/productos.json")
  .then(response => response.json())
  .then(productos => {

    const carrito =
      JSON.parse(localStorage.getItem("carrito")) || [];

    const contenedor =
      document.getElementById("carrito-container");

    if (carrito.length === 0) {

      contenedor.innerHTML = `
        <h3>No hay productos en el carrito</h3>
      `;

      return;
    }
      
    if (!contenedor) return;

    carrito.forEach(id => {

      const producto =
        productos.find(p => p.id === id);

      if (producto) {

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

  });
  //Mejora Etapa 4
  const vaciarCarritoBtn =
  document.getElementById("vaciarCarritoBtn");

if (vaciarCarritoBtn) {

  vaciarCarritoBtn.addEventListener("click", () => {

    localStorage.removeItem("carrito");

    alert("Carrito vaciado");

    location.reload();

  });

}