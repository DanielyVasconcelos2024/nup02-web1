class Ponto3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    calcularDistanciaOrigem() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2).toFixed(2);
    }

    identificarSetor() {
        const sinal = (v) => v >= 0 ? 'positivo' : 'negativo';

        const sinais = [
            sinal(this.x),
            sinal(this.y),
            sinal(this.z)
        ];

        const setores = {
            'positivo,positivo,positivo': 'Alfa',
            'positivo,positivo,negativo': 'Beta',
            'positivo,negativo,positivo': 'Gama',
            'positivo,negativo,negativo': 'Delta',
            'negativo,positivo,positivo': 'Épsilon',
            'negativo,positivo,negativo': 'Zeta',
            'negativo,negativo,positivo': 'Sigma',
            'negativo,negativo,negativo': 'Ômega',
        };

        const chave = sinais.join(',');
        return setores[chave] || 'Setor desconhecido';
    }

    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}

function analisarLocalizacao() {
    const x = parseFloat(document.getElementById("inputX").value);
    const y = parseFloat(document.getElementById("inputY").value);
    const z = parseFloat(document.getElementById("inputZ").value);

    const ponto = new Ponto3D(x, y, z);

    document.getElementById("outputPontoOriginal").innerText = ponto.toString();
    document.getElementById("outputSetor").innerText = ponto.identificarSetor();
    document.getElementById("outputDistancia").innerText = ponto.calcularDistanciaOrigem() + " unidades";
}
