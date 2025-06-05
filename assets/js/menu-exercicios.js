function renderMenuExercicios() {
    const isIndex = window.location.pathname.endsWith('/index.html') || window.location.pathname === '/';

    const prefix = isIndex ? '/pages/exercicios/' : '';

    const exercicios = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 25
    ];

    let links = '';
    exercicios.forEach(num => {
        links += `<a href="${prefix}exercicio${num}.html">Exercício ${num}</a>\n`;
    });

    const menu = `
        <div class="menu-suspenso">
            <button class="botao-suspenso">Exercícios</button>
            <div class="conteudo-suspenso">
                ${links}
            </div>
        </div>
    `;
    document.getElementById('menu-exercicios').innerHTML = menu;
}
window.addEventListener('DOMContentLoaded', renderMenuExercicios);