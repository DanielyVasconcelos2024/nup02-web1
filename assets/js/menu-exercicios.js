function renderMenuExercicios() {
    const isIndex = window.location.pathname.endsWith('/index.html') || window.location.pathname === '/';
    const prefix = isIndex ? 'pages/exercicios/' : '';

    const arquivos = [
        2, 3, 4, 5, 6, 8, 9, 10,
        11, 12, 13, 14, 16, 17, 18, 19, 20,
        21, 22, 25, 26, 29, 30
    ];

    let links = '';
    arquivos.forEach((realNum, index) => {
        const visualNum = index + 1; 
        const filename = `desafio${realNum}.html`;
        links += `<a href="${prefix}${filename}">Exercício ${visualNum}</a>\n`;
    });

    const menu = `
        <div class="menu-suspenso">
            <button class="botao-suspenso">Exercícios</button>
            <div class="conteudo-suspenso">
                ${links}
            </div>
        </div>
    `;

    const container = document.getElementById('menu-exercicios');
    if (container) {
        container.innerHTML = menu;
    } else {
        console.error('Elemento com id "menu-exercicios" não encontrado no HTML.');
    }
}

window.addEventListener('DOMContentLoaded', renderMenuExercicios);
