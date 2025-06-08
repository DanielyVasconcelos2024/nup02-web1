<<<<<<< HEAD
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

        if (a === 0 && b === 0 && c === 0) {
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

    document.getElementById('outputResolucao').textContent = resultado.passos.join('\n');
    document.getElementById('outputResultados').textContent = JSON.stringify(resultado.raizes);
}
=======
class Equation {
    constructor(a = 0, b = 0, c = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.resolucao = '';
    }

    calcularRaizes() {
        const { a, b, c } = this;

        if (
            isNaN(a) && isNaN(b) && isNaN(c)
        ) {
            this.resolucao = "Erro! Nenhum parâmetro informado.";
            return [];
        }

        if ((a === 0 && b === 0)) {
            this.resolucao = "1. Parâmetros insuficientes.\nNenhuma raiz real.";
            return [];
        }

        if (a === 0) {
            const linha1 = `1. ${b}x + ${c} = 0`;
            const linha2 = `2. ${b}x = ${-c}`;
            const linha3 = `3. x = ${-c} / ${b}`;
            const x = -c / b;
            const linha4 = `4. x = ${x}`;
            this.resolucao = [linha1, linha2, linha3, linha4].join('\n');
            return [x];
        }

        const delta = b * b - 4 * a * c;

        const passos = [
            `1. Δ = ${b}² - 4 * ${a} * ${c}`,
            `2. Δ = ${delta}`
        ];

        if (delta < 0) {
            passos.push('3. Nenhuma raiz real.');
            this.resolucao = passos.join('\n');
            return [];
        }

        const raizDelta = Math.sqrt(delta).toFixed(2);
        const numerador1 = -b + Math.sqrt(delta);
        const numerador2 = -b - Math.sqrt(delta);
        const denominador = 2 * a;

        passos.push(
            `3. x' = (-(${b}) + √${delta}) / 2 * ${a}`,
            `4. x" = (-(${b}) - √${delta}) / 2 * ${a}`,
            `5. x' = ${-b} + √${delta} / ${denominador}`,
            `6. x" = ${-b} - √${delta} / ${denominador}`,
            `7. x' = ${-b} + ${Math.sqrt(delta)} / ${denominador}`,
            `8. x" = ${-b} - ${Math.sqrt(delta)} / ${denominador}`
        );

        const x1 = numerador1 / denominador;
        const x2 = numerador2 / denominador;

        passos.push(
            `9. x' = ${x1}`,
            `10. x" = ${x2}`
        );

        this.resolucao = passos.join('\n');
        return [x1, x2];
    }

    getResolucao() {
        return this.resolucao;
    }
}

function resolverEquacao() {
    let a = parseFloat(document.getElementById('inputA').value);
    let b = parseFloat(document.getElementById('inputB').value);
    let c = parseFloat(document.getElementById('inputC').value);

    const eq = new Equation(a, b, c);
    const raizes = eq.calcularRaizes();
    const resolucao = eq.getResolucao();

    const outputEq = isNaN(a) || isNaN(b) || isNaN(c)
        ? ``
        : `${a}x² + ${b}x + ${c} = 0`;

    document.getElementById('outputEquacao').innerText = outputEq;
    document.getElementById('outputResolucao').innerText = resolucao;
    document.getElementById('outputResultados').innerText = JSON.stringify(raizes);
}

>>>>>>> 98b96c6b462e330c62d01cfaaaa9c76504715c3a
