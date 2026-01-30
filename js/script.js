document.querySelector("#botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.querySelector("#nome").value != "" &&
        document.querySelector("#email").value != "" &&
        document.querySelector("#telefone").value != "") {

        alert("Prontinho! você receberá as novidades por email.")
    } else {
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}