const generateHero = () => {
  const container = document.querySelector("#container");
  const hero = document.createElement("div");
  hero.classList.add("hero");
  container.appendChild(hero);
  const hero1 = document.createElement("div");
  hero1.classList.add("hero1");
  hero.appendChild(hero1);
  const h1 = document.createElement("h1");
  h1.textContent = "Insira alguma coisa";
  hero1.appendChild(h1);
  const p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque nesciunt similique eius dolores deleniti qui quidem hic quia cupiditate, minima ullam veritatis mollitia dolorum maxime magni! Saepe, inventore dolore!";
  hero1.appendChild(h1);
  const imagem = document.createElement("div");
  imagem.classList.add("imagem");
  hero.appendChild(imagem);
  const img = document.createElement("img");
  img.src = "imagem.jpg";
  img.setAttribute("id", "imagem");
  imagem.appendChild(img);
};
export { generateHero };
/*<div class = "hero">
        <div class = "hero1-c">
            <h1>Insira alguma coisa</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque nesciunt similique eius dolores deleniti qui quidem hic quia cupiditate, minima ullam veritatis mollitia dolorum maxime magni! Saepe, inventore dolore!</p>
        </div>
        <div class = "imagem">
            <img src = "imagem.jpg" id = "imagem">
        </div>
    </div>*/
