const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){
    logoutBtn.addEventListener("click", () => {

        sessionStorage.removeItem("usuario");

        window.location.href = "./page/login.html";
    })
    ;
}