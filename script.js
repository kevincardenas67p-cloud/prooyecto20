
let temperatura = document.getElementById("temperatura");
let origen = document.getElementById("origen");
let destino = document.getElementById("destino");
let boton = document.getElementById("convertir");
let resultado = document.getElementById("resultado");

// Revisar si los campos están completos
function revisarCampos() {

    if (temperatura.value !== "" && origen.value !== "" && destino.value !== "") {
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
}

// Revisar cuando el usuario escriba o seleccione
temperatura.addEventListener("input", revisarCampos);
origen.addEventListener("change", revisarCampos);
destino.addEventListener("change", revisarCampos);

// Convertir temperatura
boton.addEventListener("click", function() {

    let valor = Number(temperatura.value);
    let celsius;

    // Convertir primero a Celsius
    if (origen.value == "C") {
        celsius = valor;
    } else if (origen.value == "F") {
        celsius = (valor - 32) * 5 / 9;
    } else {
        celsius = valor - 273.15;
    }

    // Convertir a la unidad seleccionada
    let conversion;

    if (destino.value == "C") {
        conversion = celsius;
    } else if (destino.value == "F") {
        conversion = (celsius * 9 / 5) + 32;
    } else {
        conversion = celsius + 273.15;
    }

    resultado.innerHTML = "Resultado: " + conversion.toFixed(2) + "° " + destino.value;

});
