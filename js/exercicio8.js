function abreviarNomeAutor() {
    const nomeCompleto = document.getElementById("inputNomeAutor").value.trim();

    if (nomeCompleto === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    const nomes = nomeCompleto.split(" ");
    const ultimoNome = nomes.pop().toUpperCase();
    const iniciais = nomes.map(nome => nome.charAt(0).toUpperCase() + ".").join(" ");

    const nomeAbreviado = `${ultimoNome}, ${iniciais}`;

    document.getElementById("outputNomeOriginal").innerText = nomeCompleto;
    document.getElementById("outputNomeAbreviado").innerText = nomeAbreviado;
}
