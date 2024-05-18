document.addEventListener("DOMContentLoaded", function(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json". true);
    xhr.onload = function() {
        if (xhr.status = 200) {
            let data = JSON.parse(xhr.responseText);
            let arequipaData = data.find(region => region.region === "Arequipa");
            if (arequipaData) {
                mostrarGrafico(arequipaData);
            }
        }
    }
})

function mostrarGrafico(data) {
    
}