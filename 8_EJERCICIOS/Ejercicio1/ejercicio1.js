document.addEventListener("DOMContentLoaded", () => {
    const btnMostrarRegiones = document.getElementById('btnMostrarRegiones');

    btnMostrarRegiones.addEventListener('click', () => {
        fetch('../data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la red');
                }
                return response.json();
            })
            .then(data => {
                mostrarRegiones(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});

function mostrarRegiones(data) {
    const regionList = document.getElementById('regionList');
    regionList.innerHTML = '';
    
    data.forEach(regionData => {
        const li = document.createElement('li');
        li.textContent = regionData.region;
        regionList.appendChild(li);
    });
}