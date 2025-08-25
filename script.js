const pas=document.getElementById("pas")
const cpas=document.getElementById("cpas");

console.log(pas,cpas);

cpas.addEventListener("input", (e)=>{
    cpas.setCustomValidity("");
    if(!cpas.validity.valid){
        return;
    }
    if(cpas.value!==pas.valu){
        cpas.setCustomValidity("Passwords don't match");
    }
})