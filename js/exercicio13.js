function verificarCodigoIdentificacao(numero) {
    const str = numero.toString();

    if (str.length < 2 || !/^\d+$/.test(str)) {
        return "Número inválido. Deve conter ao menos 2 dígitos numéricos.";
    }

    const digitos = str.slice(0, -1).split('').map(Number); 
    const verificadorRecebido = parseInt(str[str.length - 1]);

    let somaImpares = 0;
    let somaPares = 0;

    for (let i = 0; i < digitos.length; i++) {
        if (i % 2 === 0) {
            somaImpares += digitos[i];
        } else {
            somaPares += digitos[i];
        }
    }

    const total = (somaImpares * 3) + somaPares;
    const resto = total % 10;
    const verificadorCalculado = resto === 0 ? 0 : 10 - resto;

    return verificadorCalculado === verificadorRecebido
        ? "Código válido"
        : `Código inválido. O correto seria: ${str.slice(0, -1)}${verificadorCalculado}`;
}
