const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('#input')
const resultado = document.querySelector('#result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//Insert events in all buttons
document.querySelectorAll('.charKey').forEach((charkeyBtn)=>{
    charkeyBtn.addEventListener('click', ()=>{
        const value = charkeyBtn.dataset.value
        input.value += value

    })
})

//Clear input

document.getElementById('clear').addEventListener('click', ()=>{
    input.value = ''
    input.focus()
})

document.getElementById('equal').addEventListener('click', calculate)


input.addEventListener('keydown', (evento)=>{
    evento.preventDefault()
    if(allowedKeys.includes(evento.key)){
        input.value += evento.key
        return
    }

    if(evento.key === 'Backspace'){
        input.value = input.value.slice(0,-1)
    }

    if(evento.key === 'Enter'){
        calculate()
    }
})

function calculate(){
    resultado.value = 'ERROR'
    resultado.classList.add('error')
    const result = eval(input.value)
    resultado.value = result
    resultado.classList.remove('error')
   
}

const themeSwitcher = document.getElementById('themeSwitcher').addEventListener('click', ()=>{
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme ='light'
        
    }else{
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff99')
        main.dataset.theme ='dark'
    }
})

document.getElementById('copyToClipboard').addEventListener('click', (ev)=>{
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied'
        button.classList.add('success')
        navigator.clipboard.writeText(resultado.value)
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})