 
var btnIF = document.querySelector('.dol'); 

btnIF.addEventListener('click', function() {

    const original = window.location.href = "/login2.html"

    if (original){
        window.location.href = "logindark.html"
        
    }else{
        original;
        
    }
       
    
});
    


function acesso(form){
    if (form.email.value == "aeda@unifavip.com.br" && form.senha.value == "123"){
        location = "/bookslife2.html"
    }
    else{
        form.email.value == ""
        form.senha.value =""
        alert("Dados incorretos")
    }
}