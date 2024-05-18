document.addEventListener('DOMContentLoaded', function() {
    const btnMostrarGrafico = document.getElementById('mostrarGrafico');
    const contenedor = document.querySelector('.contenedor');

    btnMostrarGrafico,this.addEventListener('click', () => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "../data.json", true);
        xhr.onload = function() {
            if(xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                let regions = data.filter(region => region.region !== "Lima" && regiom.region !== "Callao");
                if (regiones.lenght > 0) {
                    mostrarGraficoComparativo(regiones);
                    contenedor.style.display = 'flex';
                    btnMostrarGrafico.style.display = 'none';
                }
            }
        };
        xhr.send();
    })
})

function mostrarGraficoComparativo(regions) {
    
}