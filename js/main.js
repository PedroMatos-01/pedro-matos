const botaoTema = document.getElementById("botao-tema");
const botoesFiltro = document.querySelectorAll(".filtros button");
const projetos = document.querySelectorAll(".projetos li");

if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("escuro");
}

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");
  const ativo = document.body.classList.contains("escuro");
  localStorage.setItem("tema", ativo ? "escuro" : "claro");
});

botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const filtro = botao.dataset.filtro;

    projetos.forEach(function (projeto) {
      const tecnologias = projeto.dataset.tecnologia.split(" ");

      if (filtro === "todos" || tecnologias.includes(filtro)) {
        projeto.style.display = "";
      } else {
        projeto.style.display = "none";
      }
    });
  });
});