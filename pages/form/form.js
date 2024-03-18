
// pulsanti
const signInButton=document.querySelector("button#signIn");
const signUpButton=document.querySelector("button#signUp");
let switchRegistration=true;//indice per capire lo stato accedi/registrati
const titleForm=document.querySelector("#titleForm");
const forgotPassword=document.querySelector("#forgotPassword");
    console.log("Pulsanti:",signInButton, signUpButton, titleForm,forgotPassword);
// Form system
const form=document.querySelector("form"); 
const username=document.querySelector("#username"); 
const indirizzo=document.querySelector("#indirizzo"); 
const email=document.querySelector("#email"); 
const password=document.querySelector("#password");
const submit=document.querySelector("#submit");
    // console.log("Form system:",form,username,indirizzo,email,password,submit);
// errori
const errorMessage=document.querySelector("#errorMessage"); 
    errorMessage.style.display='none';

// TODO setTitle
function setTitle(){
    if (switchRegistration==true) { //se è affermativo REGISTRAZIONE
        titleForm.innerText='Registrati';//il titolo sarà di registrazione
        username.style.display=indirizzo.style.display='block';//mostra tutti i campi
        forgotPassword.style.display='none';//non c'è password da recuperare

        signInButton.style.background='var(--t1)';//il pulsante manderà all'accesso
        signUpButton.style.background='var(--c3)';//il pulsante manderà all'accesso
        switchRegistration=false;//lo stato manderà all'accesso
    } else {//se è negativo ACCESSO
        titleForm.innerText='Accedi';//il titolo sarà di accesso
        username.style.display=indirizzo.style.display='none';//nasconde alcuni campi
        forgotPassword.style.display='block';//mostra recupero password

        signInButton.style.background='var(--c3)';//il pulsante manderà all'accesso
        signUpButton.style.background='var(--t1)';//il pulsante manderà all'accesso
        switchRegistration=true;//lo stato manderà alla registrazione
    }
}setTitle();

signInButton.addEventListener("click",function(){//quando premi lo switch
    errorMessage.style.display='none';
    switchRegistration=true
    setTitle()
})
signUpButton.addEventListener("click",function(){//quando premi lo switch
    errorMessage.style.display='none';
    switchRegistration=false
    setTitle()
})

// TODO form controlls
form.addEventListener('submit',function(e){
    let messages=[]
    function redBorder(input){ input.style.border='1px solid red' }

    if (switchRegistration===false) {
        //optimize username
        if (username.value==='' || username.value===null) {
            messages.push("L'username è obbligatorio")
            redBorder(username)
        }
        //optimize indirizzo
        if (indirizzo.value==='' || indirizzo.value===null) {
            messages.push("L'indirizzo è obbligatorio")
            redBorder(indirizzo)
        }
    }
    //optimize email
    if (email.value==='' || email.value===null) {
        messages.push("L'Email è obbligatoria")
        redBorder(email)
    }
    if (email.value==/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) {
        messages.push("L'Email deve contenere il simbolo @")
        redBorder(email)
    }

    //optimize password
    if (password.value==='' || password.value===null) {
        messages.push("La password è obbligatoria")
        redBorder(password)
    }
    if(password.value.length<6 || password.length>16){
        messages.push("La password deve contenere dai 6 ai 16 caratteri")
        redBorder(password)
    }

    //fix messagio errore
    if(messages.length>0){
        e.preventDefault();
        errorMessage.style.display='block';
        errorMessage.innerText=messages.join("\n")
    }
})

