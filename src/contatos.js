const generateContatos = (qtd) => {
  const container = document.querySelector("#container");
  const contatos = document.createElement("div");
  contatos.setAttribute("id", "contatos");
  container.appendChild(contatos);
  for (let i = 0; i < qtd; i++) {
    const contato = document.createElement("div");
    contato.classList.add("contato");
    contato.textContent = "joao da silva";
    contatos.appendChild(contato);
    const ul = document.createElement("ul");
    ul.setAttribute("id", "desc");
    contato.appendChild(ul);
    const li1 = document.createElement("li");
    li1.classList.add("descli");
    li1.textContent = "numero:(11)992312-23223";
    ul.appendChild(li1);
    const li2 = document.createElement("li");
    li2.classList.add("descli");
    li2.textContent = "Local:insira local";
    ul.appendChild(li2);
  }
};
export { generateContatos };
/*<div id = "contatos">
            <div class = "contato">
                joao da silva
            <ul id = "desc">
                <li class ="descli">
                    numero:(11)992312-23223
                </li>
                <li class ="descli">
                    Local:insira local
                </li>
            </ul>
            </div>
            <div class = "contato">
                joao da silva
            <ul id = "desc">
                <li class ="descli">
                    numero:(11)992312-23223
                </li>
                <li class ="descli">
                    Local:insira local
                </li>
            </ul>
            </div>*/
