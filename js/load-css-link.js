function loadCssLinks() {
    fetch('css-links.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const html = parser.parseFromString(data, 'text/html');
            const links = html.querySelectorAll('link');
            links.forEach(link => document.head.appendChild(link));
        })
        .catch(error => console.error('Erro ao carregar os links CSS:', error));
}

// Chama a função para carregar os links CSS
loadCssLinks();
