const generateProdutos = (qtd) => {
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
      p.textContent = "Produto" + " " + i;
      card.appendChild(p);
      const p2 = document.createElement("div");
  
      p2.classList.add("descricao");
      p2.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ullam doloribus soluta est eaque enim iusto e";
      card.appendChild(p2);
    }
  };
  export{generateProdutos}