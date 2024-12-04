function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
}

// Chama a função para carregar o footer
loadFooter();
