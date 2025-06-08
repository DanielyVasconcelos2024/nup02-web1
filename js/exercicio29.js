function resolverLabirinto() {
    const input = document.getElementById("inputLabirinto").value;

    let labirinto;
    try {
        // Avalia o texto como um array JavaScript
        labirinto = eval(input);
    } catch (e) {
        alert("Erro ao interpretar o labirinto. Verifique a sintaxe.");
        return;
    }

    if (!Array.isArray(labirinto) || !labirinto.length) {
        alert("Labirinto inválido.");
        return;
    }

    const numRows = labirinto.length;
    const numCols = labirinto[0].length;

    let start = null;
    let end = null;

    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (labirinto[r][c] === 'S') start = [r, c];
            if (labirinto[r][c] === 'E') end = [r, c];
        }
    }

    if (!start || !end) {
        alert("Labirinto inválido: precisa de 'S' (início) e 'E' (fim).");
        return;
    }

    document.getElementById("outputMapa").textContent = labirinto.map(l => l.join("")).join("\n");

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
    const queue = [[...start, []]];

    let caminhoMaisCurto = [];

    while (queue.length > 0) {
        const [row, col, path] = queue.shift();

        if (row < 0 || col < 0 || row >= numRows || col >= numCols) continue;
        if (visited[row][col] || labirinto[row][col] === '#') continue;

        visited[row][col] = true;
        const novoCaminho = [...path, [row, col]];

        if (row === end[0] && col === end[1]) {
            caminhoMaisCurto = novoCaminho;
            break;
        }

        for (const [dr, dc] of directions) {
            queue.push([row + dr, col + dc, novoCaminho]);
        }
    }

    if (!caminhoMaisCurto.length) {
        document.getElementById("outputCaminhoCurto").textContent = "Não há caminho até a saída.";
        document.getElementById("outputLabirintoSolucao").textContent = "";
        return;
    }

    document.getElementById("outputCaminhoCurto").textContent = caminhoMaisCurto.map(([r, c]) => `(${r},${c})`).join(" → ");

    const labirintoSolucao = labirinto.map(l => l.slice());

    for (const [r, c] of caminhoMaisCurto) {
        if (labirintoSolucao[r][c] === ' ' || labirintoSolucao[r][c] === '') {
            labirintoSolucao[r][c] = '.';
        }
    }

    document.getElementById("outputLabirintoSolucao").textContent = labirintoSolucao.map(l => l.join("")).join("\n");
}

