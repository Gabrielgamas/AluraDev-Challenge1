const linguagem = document.querySelector ('.personalizar__linguagem')
const areacodigo = document.querySelector ('.codigo__area')
const botao = document.querySelector ('.codigo__botao')

function aplicaHighLight() {
    const codigo = areacodigo.innerText
    areacodigo.innerHTML = `<code class="codigo__txt hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de Texto"></code>`

    areacodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areacodigo.querySelector('code'))
}

botao.addEventListener ('click', () => {
    aplicaHighLight()
})