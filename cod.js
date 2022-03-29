//Função responsável por mostrar o menu no modo mobile.

let btn_Mobile = document.querySelector("#btn-Mobile");

function toggleMenu(){

    let nav = document.querySelector("#nav");
    nav.classList.toggle('active');
}

   btn_Mobile.addEventListener('click', toggleMenu);


//Função para dar acesso ao usuario acessar os conteudos do site.
function logar(){

    let name = document.querySelector("#name").value;
    let senha = document.querySelector("#senha").value;

    if(name == 'jeferson' && senha == '202030'){
        location.href = 'logado.html';
    }else{
        alert('Usuário ou senha invalidos verifique os dados e tente novamente.');
    }
}

//Função para subir a página ao inicio de forma suave. 
function subir(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

//Função para fazer o botão de 'UP' sumir quando mover o scroll da página.
function decidir(){
   if(window.scrollY == 0){
       document.querySelector("#botaoSubir").style.display = 'none';
   }else{
        document.querySelector("#botaoSubir").style.display = 'block';
   }
}
window.addEventListener('scroll', decidir);


//Função para abrir e fachar o modal de login
function abrir(){
    let abModal = document.querySelector(".modal");
    
    abModal.style.top = '0';
}

function fechar(){
    let fcModal = document.querySelector(".modal");
    
    fcModal.style.top = "-100%";
}