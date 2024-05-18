const fs = require('fs')
const path = require('path')
const express = require('express')
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
	md = new MarkdownIt();
const app = express()

app.use(express.static('pub'))
app.use(bp.json())
app.use(bp.urlencoded({
	extended: true
}))

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
})

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'pub/index.html'))
})

app.get('/markdown-files', (request, response) => {
    const markdownDir = path.resolve(__dirname, 'Mrkd');
    fs.readdir(markdownDir, (err, files) => {
        if (err) {
            console.error(err);
            response.status(500).json({ error: 'Incapaz de leer el directorio' });
            return;
        }
        const markdownFiles = files.filter(file => file.endsWith('.md')); // Filtrar solo los archivos .md
        response.json(markdownFiles);
    });
});