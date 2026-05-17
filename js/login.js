const loginButton = document.getElementById("loginBtn");

if (loginButton) {
    loginButton.addEventListener("click", () => {

        const usuario = document.getElementById("usuario").value;

        if(usuario.trim() === ""){
            alert("Ingresá un usuario");
            return;
        }

        sessionStorage.setItem("usuario", usuario);

        window.location.href = "../index.html";
    })
    ;
}