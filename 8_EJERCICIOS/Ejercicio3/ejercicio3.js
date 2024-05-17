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
                btnMostrarRegiones.style.display = 'none';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});

function mostrarRegiones(data) {
    const regionList = document.getElementById('regionList');
    const casosConfirmadosPorRegion = {};

    data.forEach(regionData => {
        const region = regionData.region;
        let totalCasosConfirmados = 0;
        regionData.confirmed.forEach(caso => {
            totalCasosConfirmados += parseInt(caso.value);
        });
        casosConfirmadosPorRegion[region] = totalCasosConfirmados;
    });

    for (let region in casosConfirmadosPorRegion) {
        const li = document.createElement('li');
        li.textContent = `${region}: ${casosConfirmadosPorRegion[region]}`;
        regionList.appendChild(li);
    }
}