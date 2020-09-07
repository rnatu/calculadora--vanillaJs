const display = document.querySelector('.display')
const history = document.querySelector('.history');

display.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) execOperation();
})

document.addEventListener('click', e => {
    if (display.value === 'Conta Inválida') clearDisplay();
   
    const el = e.target

    if (el.classList.contains('btn-num') || el.classList.contains('btn-sign')) addOnDisplay(el);

    if (el.classList.contains('btn-clear')) clearDisplay();

    if (el.classList.contains('btn-del')) del();

    if (el.classList.contains('btn-equal')) execOperation();
})

const addOnDisplay = el => {
    display.value += el.innerText;
}

const clearDisplay = () => {
    display.value = '';
    history.value = '';
}

const del = () => {
    display.value = display.value.slice(0, -1);
}

const execOperation = () => {
    
    if(display.value ==='') return;

    try {
        const displayWithSymbols = display.value
        replaceSymbols(display.value);

        addOnHistory(displayWithSymbols)
        
        const result = eval(display.value);
        display.value = result;
    } catch (e) {
        display.value = 'Conta Inválida';
        history.value = '';
    }
}

const addOnHistory = (displayWithSymbols) => {
    history.value = displayWithSymbols;
}

const replaceSymbols = () => {
    if (display.value.includes('÷')) {
        display.value = display.value.replace('÷', '/');
    }

    if (display.value.includes('x')) {
        display.value = display.value.replace('x', '*');
    }
}