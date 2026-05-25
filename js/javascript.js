// Ativar links menu
const links = document.querySelectorAll(".header-menu a"); // selecionamos a lista de links dentro do menu

function ativarLink(link) {
  const url = location.href; // para pegarmos o href da url
  const href = link.href; // para pegarmos o href dentro do a

  if (url.includes(href)) {
    // .includes verifica se em alguma parte da url tem uma palavra igual ao conteudo do href
    link.classList.add("ativo"); // então adicionamos uma classe de ativo no link para podermos deixar ele com tamanho de 100% quando estiver ativo
  }
}
links.forEach(ativarLink); // fazemos um loop para pegarmos o href da url e do href da tag a e compararmos, se na url existir uma string igual ao do href então adicionamos um classe de ativo onde o a::after terá tamanho de 100% na tela

// Ativar items orçamento

const parametros = new URLSearchParams(location.search); // usamos url searh params para pegarmos os parametros da url

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro); // procuramos o elemento no documento que tem a mesma id do valor retornado no parametro
  if (elemento) {
    elemento.checked = true; // elemento recebe checked true para já chegar na pagina ativo
  }
}

parametros.forEach(ativarProdutos); // foreach para aprlicarmos a função a cada um dos parametros

// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// trocar imagens galeria

const galeria = document.querySelectorAll(".interna-img img");
const containerGaleria = document.querySelector(".interna-img");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches; // matchmedia verifica o tamanho da tela, matches retorna true or false para a string que passamos

  if (media) {
    containerGaleria.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// animção
if (window.SimpleAnime) {
  new SimpleAnime();
}
