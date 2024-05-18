document.addEventListener('DOMContentLoaded', function () {
    const list = document.getElementById('markdownList');
    // Función para obtener la lista de archivos Markdown
    function fetchMarkdownFiles() {
        const url = 'http://localhost:3000/markdown-files';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                list.innerHTML = ''; 
                data.forEach(file => {
                    const listItem = document.createElement('li');
                    listItem.textContent = file;
                    list.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching markdown files:', error));
    }

    fetchMarkdownFiles();
});