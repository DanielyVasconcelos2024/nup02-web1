function encontrarConexoes() {
    const input = document.getElementById("inputObjetoConexoes");
    const outputObjeto = document.getElementById("outputObjeto");
    const outputConexoes = document.getElementById("outputConexoes");

    let dados;
    try {
        dados = JSON.parse(input.value);
    } catch (e) {
        outputObjeto.textContent = "Erro: JSON inválido.";
        outputConexoes.textContent = "";
        return;
    }

    outputObjeto.textContent = JSON.stringify(dados, null, 2);

    const conexoes = [];

    function buscar(obj) {
        if (typeof obj !== "object" || obj === null) return;

        // Se for 'connection' direto
        if (obj.connection && typeof obj.connection === "object") {
            const c = obj.connection;
            if (c._id && c.label) {
                conexoes.push([c._id, c.label]);
            }
        }

        // Se for 'connections' (array)
        if (Array.isArray(obj.connections)) {
            obj.connections.forEach(conn => {
                if (conn._id && conn.label) {
                    conexoes.push([conn._id, conn.label]);
                }
            });
        }

        // Recursão em todas as chaves do objeto
        for (const chave in obj) {
            if (typeof obj[chave] === "object") {
                buscar(obj[chave]);
            }
        }
    }

    buscar(dados);

    outputConexoes.textContent = JSON.stringify(conexoes, null, 2);
}