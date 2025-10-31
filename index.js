document.addEventListener("DOMContentLoaded", () => {
  let dadosJSON = {};

  // 1. Carrega o JSON (com anti-cache)
  fetch("explanations.json?nocache=" + Date.now())
    .then(response => response.json())
    .then(data => {
      dadosJSON = data;
      console.log("JSON carregado:", Object.keys(dadosJSON));
    })
    .catch(error => console.error("Erro ao carregar JSON:", error));



  // 2. Quando clicar no botão, busca e mostra o resultado
  const button = document.getElementById("explainButton");
  const input = document.getElementById("codeInput");
  const resultadoDiv = document.getElementById("resultado");



  input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // impede o comportamento padrão (como enviar formulário)
    button.click(); // simula o clique no botão
  }
});

  button.addEventListener("click", () => {
    const tag = input.value.trim().toLowerCase();

    if (dadosJSON[tag]) {
      const descricao = dadosJSON[tag].descricao;
      const exemplo = dadosJSON[tag].exemplo;

      resultadoDiv.innerHTML = `
        <h2>&lt;${tag}&gt;</h2>
        <p>${descricao}</p>
        <h3>Exemplo:</h3>
        <div>${exemplo}</div>
      `;

input.value = "";
input.focus();

    } else {
      resultadoDiv.innerHTML = `<p>Campo vazio, digite uma tag <strong>${tag}</strong>.</p>`;
      resultadoDiv.style.color = "red";
    }
  });
});
