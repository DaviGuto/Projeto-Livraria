 
var btnIF = document.querySelector('.dol'); 

btnIF.addEventListener('click', function() {

    const original = window.location.href = "/recuperaçãodark.html"

    if (original){
        window.location.href = "recuperação.html"
        
    }else{
        original;
        
    }
       
    
});
    
function acesso(form){
    if (form.email.value == "aeda@unifavip.com.br"){
        alert("Sua Senha é 123, redirecionando para login...")
        window.location.href = '/logindark.html'

    }else{
        alert("Cadastro não localizado, retornando para tela de cadastro")
        window.location.href = '/Cadastro/cadastro.html'
    }
    
}

