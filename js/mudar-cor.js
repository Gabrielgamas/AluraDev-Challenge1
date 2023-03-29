const corselecionada = document.querySelector ('.personalizar__cor')
const areacor = document.querySelector ('.codigo__espaco-cor')

botao.addEventListener('click', ()=>{
    areacor.style.backgroundColor = corselecionada.value
})