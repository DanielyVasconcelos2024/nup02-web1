class Equation {
    constructor(a = 0, b = 0, c = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.passos = [];
    }

    resolver() {
        this.passos = [];

        const { a, b, c } = this;

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            return { erro: 'Erro! Nenhum parâmetro informado.', raizes: [] };
        }

        if (a === 0 && b === 0) {
            this.passos.push('1. Parâmetros insuficientes.');
            this.passos.push('Nenhuma raiz real.');
            return { passos: this.passos, raizes: [] };
        }

        if (a === 0) {
            
            this.passos.push(`1. ${b}x + ${c} = 0`);
            this.passos.push(`2. ${b}x = ${-c}`);
            this.passos.push(`3. x = ${-c}/${b}`);
            const x = -c / b;
            this.passos.push(`4. x = ${x}`);
            return { passos: this.passos, raizes: [x] };
        }

        
        this.passos.push(`1. Δ = (${b})² - 4*${a}*${c}`);
        const delta = b * b - 4 * a * c;
        this.passos.push(`2. Δ = ${delta}`);

        if (delta < 0) {
            this.passos.push('3. Nenhuma raiz real.');
            return { passos: this.passos, raizes: [] };
        }

        const raizDelta = Math.sqrt(delta);
        const x1 = (-b + raizDelta) / (2 * a);
        const x2 = (-b - raizDelta) / (2 * a);

        this.passos.push(`3. x' = (-(${b}) + √${delta}) / (2 * ${a})`);
        this.passos.push(`4. x" = (-(${b}) - √${delta}) / (2 * ${a})`);
        this.passos.push(`5. x' = (${ -b } + ${raizDelta}) / ${2 * a}`);
        this.passos.push(`6. x" = (${ -b } - ${raizDelta}) / ${2 * a}`);
        this.passos.push(`7. x' = ${x1}`);
        this.passos.push(`8. x" = ${x2}`);

        return { passos: this.passos, raizes: [x1, x2] };
    }
}


function resolverEquacao() {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const c = parseFloat(document.getElementById('inputC').value);

    const eq = new Equation(a, b, c);
    const resultado = eq.resolver();


    if (resultado.erro) {
        document.getElementById('outputResolucao').textContent = resultado.erro;
        document.getElementById('outputResultados').textContent = '[]';
        return;
    }

    document.getElementById('outputResolucao').innerHTML = resultado.passos.join('<br>');
    document.getElementById('outputResultados').textContent = JSON.stringify(resultado.raizes);
} 
