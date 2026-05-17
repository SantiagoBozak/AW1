document.querySelectorAll(".card").forEach(card => {

    const controls = document.createElement("div");

    let cantidad = 1;

    controls.innerHTML = `
        <button class="menos">-</button>
        <span>${cantidad}</span>
        <button class="mas">+</button>
    `;

    card.appendChild(controls);

    const menos = controls.querySelector(".menos");
    const mas = controls.querySelector(".mas");
    const texto = controls.querySelector("span");

    mas.addEventListener("click", () => {
        cantidad++;
        texto.textContent = cantidad;
    });

    menos.addEventListener("click", () => {

        if(cantidad > 1){
            cantidad--;
            texto.textContent = cantidad;
        }

    });

});