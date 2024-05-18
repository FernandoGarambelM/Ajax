document.addEventListener("DOMContentLoaded", function() {
    const btnMostrarGrafico = document.getElementById('mostrarGrafico');
    const contenedor = document.querySelector('.contenedor');

    btnMostrarGrafico.addEventListener('click', () => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "../data.json", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                if (data.length > 0) {
                    mostrarGraficos(data);
                    contenedor.style.display = 'flex';
                    btnMostrarGrafico.style.display = 'none';
                } else {
                    console.error("No se encontraron datos de regiones");
                }
            } else {
                console.error('Error en la red:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Error en la red');
        };
        xhr.send();
    });
});

function mostrarGraficos(data) {
    const contenedor = document.querySelector('.contenedor');
    contenedor.innerHTML = ''; // Clear any existing content

    data.forEach(regionData => {
        const canvasContainer = document.createElement('div');
        canvasContainer.classList.add('canvas-container');
        const canvas = document.createElement('canvas');
        canvas.id = `Grafico-${regionData.region}`;
        canvasContainer.appendChild(canvas);
        contenedor.appendChild(canvasContainer);

        let dates = regionData.confirmed.map(entry => entry.date);
        let values = regionData.confirmed.map(entry => parseInt(entry.value));

        let ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: `Número de Confirmados en ${regionData.region}`,
                    data: values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                }]
            }
        });
    });
}

function getRandomColor(alpha = 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}