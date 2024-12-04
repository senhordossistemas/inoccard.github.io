function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
}

// Chama a função para carregar o header
loadHeader();
