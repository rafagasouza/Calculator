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
    const result = eval(input.value)
    resultado.value = result
   
}