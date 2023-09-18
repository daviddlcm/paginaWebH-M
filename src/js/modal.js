const openModal=document.querySelector('#idModal');
const modal=document.querySelector('.modalInicio')


openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--abrir')
});

const cambiar= document.querySelector("#switch-label");

cambiar.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
});
