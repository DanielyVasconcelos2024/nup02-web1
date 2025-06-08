function permutacoes(prefixo, restantes, resultado) {
    if (restantes.length === 0) {
      resultado.push(prefixo.split(''));
      return;
    }

    for (let i = 0; i < restantes.length; i++) {
      let novaPrefixo = prefixo + restantes[i];
      let novosRestantes = restantes.slice(0, i).concat(restantes.slice(i + 1));
      permutacoes(novaPrefixo, novosRestantes, resultado);
    }
  }

function quebrarSenha(opcoes) {

  let resultado = [];
  permutacoes("", opcoes, resultado);
  return resultado;
}


function gerarSenhasPossiveis() {
    let inputCaracteres = document.getElementById("inputCaracteres").value;
    let inputArray = inputCaracteres.split(',');
    let senhasPossiveis = quebrarSenha(inputArray);
    let outputCaracteresOriginais = document.getElementById("outputCaracteresOriginais");
    let outputTotalSenhas = document.getElementById("outputTotalSenhas");
    let outputSenhasGeradas = document.getElementById("outputSenhasGeradas");
    let senhasGeradas = "";
    if (senhasPossiveis[0].length == 0) {
        alert("Por favor, insira pelo menos um caractere.");
        return;
    }
    outputCaracteresOriginais.innerHTML = `[${inputCaracteres}]`;
    outputTotalSenhas.innerHTML = `Total de senhas possíveis: ${senhasPossiveis.length}`;
    for (let i = 0; i < senhasPossiveis.length; i++) {
        senhasGeradas += `[${senhasPossiveis[i].join(',')}]<br>`;
    }
    outputSenhasGeradas.innerHTML = senhasGeradas;
}