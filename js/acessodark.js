 
var btnIF = document.querySelector('.dol'); 

btnIF.addEventListener('click', function() {

    const original = window.location.href = "/logindark.html"

    if (original){
        window.location.href = "login2.html"
        
    }
       
    
});
    


function acesso(form){
    if (form.email.value == "aeda@unifavip.com.br" && form.senha.value == "123"){
        location = "bookslife2.html"
    }
    else{
        alert("Verifique os dados e tente novamente!")
    }
}