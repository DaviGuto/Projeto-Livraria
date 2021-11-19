 
var btnIF = document.querySelector('.dol'); 

btnIF.addEventListener('click', function() {

    const original = window.location.href = "/cadastrodark.html"

    if (original){
        window.location.href = "cadastro.html"
        
    }else{
        original;
        
    }
       
    
});


function login(form){
    window.location.href = "/logindark.html"
}
