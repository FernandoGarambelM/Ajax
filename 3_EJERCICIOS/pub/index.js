document.addEventListener('DOMContentLoaded', function () {
    const list = document.getElementById('markdownList');
    const contentDiv = document.getElementById('markdownContent');

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
                    listItem.addEventListener('click', () => fetchMarkdownContent(file)); // Click en el nombre para mostrar el contenido
                    list.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching markdown files:', error));
    }

    // Función para obtener el contenido de un archivo Markdown específico
    function fetchMarkdownContent(file) {
        const url = `http://localhost:3000/markdown-content?file=${file}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                contentDiv.innerHTML = data.content; // Muestra el contenido del archivo
            })
            .catch(error => console.error('Error fetching markdown content:', error));
    }

    fetchMarkdownFiles();
});