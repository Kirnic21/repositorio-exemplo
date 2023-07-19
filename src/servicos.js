const generateServicos = (qtd) => {
  const container = document.querySelector("#container");
  const produtos = document.createElement("div");
  produtos.classList.add("produtos");
  container.appendChild(produtos);
  for (let i = 0; i < qtd; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    produtos.appendChild(card);
    const p = document.createElement("div");
    p.classList.add("title");
    p.textContent = "Servico" + " " + i;
    card.appendChild(p);
    const p2 = document.createElement("div");

    p2.classList.add("descricao");
    p2.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam doloribus soluta est eaque enim iusto e";
    card.appendChild(p2);
  }
};
export { generateServicos };
/*<div class = "produtos">
        <div class="card">
            <p class="title">Servico 1</p>
            <p class="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam doloribus soluta est eaque enim iusto expedita praesentium nesciunt itaque, amet velit perspiciatis dolore impedit eveniet sint tempore! Reprehenderit, harum.</p>
        </div>
        <div class="card">
            <p class="title">Servico 1</p>
            <p class="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam doloribus soluta est eaque enim iusto expedita praesentium nesciunt itaque, amet velit perspiciatis dolore impedit eveniet sint tempore! Reprehenderit, harum.</p>
        </div>
        <div class="card">
            <p class="title">Servico 1</p>
            <p class="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam doloribus soluta est eaque enim iusto expedita praesentium nesciunt itaque, amet velit perspiciatis dolore impedit eveniet sint tempore! Reprehenderit, harum.</p>
        </div>
        <div class="card">
            <p class="title">Servico 1</p>
            <p class="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam doloribus soluta est eaque enim iusto expedita praesentium nesciunt itaque, amet velit perspiciatis dolore impedit eveniet sint tempore! Reprehenderit, harum.</p>
        </div>
        <div class="card">
            <p class="title">Servico 1</p>
            <p class="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam doloribus soluta est eaque enim iusto expedita praesentium nesciunt itaque, amet velit perspiciatis dolore impedit eveniet sint tempore! Reprehenderit, harum.</p>
        </div>
    </div>*/
