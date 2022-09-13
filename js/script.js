// Ativar links do menu

const links = document.querySelectorAll(".header-menu a");

function linksAtivated(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(linksAtivated);

// ativar itens do orçamento

const params = new URLSearchParams(location.search);

function activateProduct(parametre) {
  const element = document.getElementById(parametre);
  if (element) {
    element.checked = true;
  }
}

params.forEach(activateProduct);

// questions

const questions = document.querySelectorAll(".questions-container button");

function ativateQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("ativa");
  const ativa = answer.classList.contains("ativa");
  question.setAttribute("aria-expanded", ativa);
}

function eventsQuestions(question) {
  question.addEventListener("click", ativateQuestion);
}

questions.forEach(eventsQuestions);

// galery of bicycles

const galery = document.querySelectorAll(".bicycles-img img");
const galeryContainer = document.querySelector(".bicycles-img");

function imgChange(event) {
  const img = event.currentTarget;
  galeryContainer.prepend(img);
  console.log(img);
}

function galeryEvents(img) {
  img.addEventListener("click", imgChange);
}

galery.forEach(galeryEvents);

// Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}
