// switch
const switchButton=document.querySelector("#switch");
let switchIndex=true;//indice per capire lo stato accedi/registrati
const titleForm=document.querySelector("#titleForm");
    console.log("Switch:",switchButton, switchIndex, titleForm);
// Form system
const form=document.querySelector("form"); 
const username=document.querySelector("#username"); 
const indirizzo=document.querySelector("#indirizzo"); 
const email=document.querySelector("#email"); 
const password=document.querySelector("#password");
const submit=document.querySelector("#submit");
    console.log("Form system:",form,username,indirizzo,email,password,submit);
// errori
const errorMessage=document.querySelector("#errorMessage"); 
    errorMessage.style.display='none';

// TODO setTitle
function setTitle(){
    if (switchIndex==true) { //se è affermativo
        titleForm.innerText='Registrati';//il titolo sarà di registrazione
        username.style.display=indirizzo.style.display='block';//mostra tutti i campi

        switchButton.innerText='Accedi';//il pulsante manderà all'accesso
        switchIndex=false;//lo stato manderà all'accesso
    } else {//se è negativo
        titleForm.innerText='Accedi';//il titolo sarà di accesso
        username.style.display=indirizzo.style.display='none';//nasconde alcuni campi
        
        switchButton.innerText='Registrati';//il pulsante manderà alla registrazione
        switchIndex=true;//lo stato manderà alla registrazione
    }
}setTitle();
    switchButton.addEventListener("click",function(){//quando premi lo switch
    setTitle()
})

// TODO form controlls
form.addEventListener('submit',function(e){
    let messages=[]
    function redBorder(input){ input.style.border='1px solid red' }

    //optimize email
    if (indirizzo.value==='' || indirizzo.value===null) {
        messages.push("L'indirizzo è obbligatorio")
        redBorder(indirizzo)
    }
    //optimize email
    if (email.value==='' || email.value===null) {
        messages.push("L'Email è obbligatoria")
        redBorder(email)
    }

    //optimize password
    if(password.length<6 || password.length>16){
        messages.push("La password deve contenere dai 6 ai 16 caratteri")
        redBorder(password)
    }
    if (password.value==='' || password.value===null) {
        messages.push("La password è obbligatoria")
        redBorder(password)
    }

    //fix messagio errore
    if(messages.length>0){
        e.preventDefault();
        errorMessage.style.display='block';
        errorMessage.innerText=messages.join("\n")
    }
})