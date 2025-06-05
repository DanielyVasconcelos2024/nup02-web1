function validarCodigo() {
    const codigo = document.getElementById("inputCodigo").value.trim();
    const outputOriginal = document.getElementById("outputCodigoOriginal");
    const outputValidacao = document.getElementById("outputValidacao");

    if (codigo === "") {
        outputOriginal.textContent = "";
        outputValidacao.textContent = "Digite um código.";
        return;
    }

    outputOriginal.textContent = codigo;

    const contador = {};

    for (let char of codigo) {
        contador[char] = (contador[char] || 0) + 1;
    }

    const quantidades = Object.values(contador);
    const todosIguais = quantidades.every(qtd => qtd === quantidades[0]);

    outputValidacao.textContent = todosIguais ? "Código válido: todos os caracteres têm a mesma quantidade." : "Código inválido: os caracteres não têm a mesma quantidade.";
}
