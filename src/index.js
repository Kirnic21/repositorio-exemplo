import "./style.css";
import { generateHero } from "./principal";
import { generateContatos } from "./contatos";
import { generateServicos } from "./servicos";
import { generateProdutos } from "./produtos";
const container = document.querySelector("#container");
const sobrenos = document.querySelector("#sobrenos");
const servicos = document.querySelector("#servicos");
const produtos = document.querySelector("#produtos");
const contatos = document.querySelector("#contatosbotao");
let page = 1;
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
generateHero();
sobrenos.addEventListener("click", () => {
  if (page !== 1) {
    page = 1;
    removeAllChildNodes(container);
    generateHero();
  }
});
servicos.addEventListener("click", () => {
  if (page !== 2) {
    page = 2;
    removeAllChildNodes(container);
    generateServicos(2);
  }
});
produtos.addEventListener("click", () => {
  if (page !== 3) {
    page = 3;
    removeAllChildNodes(container);
    generateProdutos(2);
  }
});
contatos.addEventListener("click", () => {
  if (page !== 4) {
    page = 4;
    removeAllChildNodes(container);
    generateContatos(5);
  }
});
