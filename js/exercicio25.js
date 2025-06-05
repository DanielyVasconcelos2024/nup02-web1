function verificarString() {
    const input = document.getElementById('inputString').value;

    const valido = validaAgrupadores(input);

    if (valido) {
        document.getElementById('outputValido').textContent = "Distribuição VÁLIDA!";
        document.getElementById('outputValido').style.backgroundColor = 'green';
    } else {
        document.getElementById('outputValido').textContent = "Distribuição INVÁLIDA!";
        document.getElementById('outputValido').style.backgroundColor = 'darkred';
    }
}

function validaAgrupadores(str) {
    const stack = [];
    const pares = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== pares[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

