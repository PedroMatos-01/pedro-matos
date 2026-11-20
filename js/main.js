const botaoTema = document.getElementById("botao-tema");

if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("escuro");
}

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");
  const ativo = document.body.classList.contains("escuro");
  localStorage.setItem("tema", ativo ? "escuro" : "claro");
});