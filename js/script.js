alert("Site carregado com sucesso");

const menuMobile = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
    const windowHeight = window.innerHeight;
    reveals.forEach((element) => {
        const elementTop= element.getBoundingClientRect().top;
        const visiblePoint = 100;

        if(elementTop < windowHeight - visiblePoint){
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

const counters = document.querySelectorAll(".contador");

    counters.forEach(counter => {

    counter.innerText = "0";
    
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target) {
            counter.innerText = '${Math.ceil(c + increment)}';
            setTimeout(updateCounter, 20);

        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();

});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled")
    }
});

const form = document.getElementById("formContato");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    const erros = document.querySelectorAll(".erro");
    const sucesso = document.getElementById("sucesso");

    let valido = true;

  // limpa tudo antes
  erros.forEach(erro => erro.innerText = "");
  sucesso.innerText = " ";

  [nome, email,mensagem].forEach(input => {
    input.classList.remove("input-erro", "input-sucesso");
  });
  
  // valida nome
  if(nome.value.trim() === ""){
    erros[0].innerText = "Digite seu nome";
    nome.classList.add("input-erro");
    valido = false;
  } else {
    nome.classList.add("input-sucesso");
  }

  // valida email  
  if(email.value.trim() === ""){
    erros[1].innerText = "Digite seu email";
    email.classList.add("input-erro");
    valido = false;
  } else if (!email.value.includes("@")){
    erros[1].innerText = "email inválido";
    email.classList.add("input-erro");
    valido = false;
  } else {
    email.classList.add("input-sucesso");
  }

  // valida mensagem
  if(mensagem.value.trim() === ""){
    erros[2].innerText = "Digite uma mensagem";
    mensagem.classList.add("input-erro");
    valido = false;
  } else {
    mensagem.classList.add("input-sucesso");
  }

  // se tudo estiver correto
  if(valido){
    sucesso.innerText = "Mensagem enviada com sucesso!";
    form.reset();
  }

});//