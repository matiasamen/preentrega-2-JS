
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();


    let destino = document.getElementById("destino").value;
    let duracion = parseFloat(document.getElementById("duracion").value);
    let costoDiario = parseFloat(document.getElementById("costoDiario").value);


    if (isNaN(duracion) || duracion <= 0 || isNaN(costoDiario) || costoDiario <= 0) {
        alert("Por favor, ingresa valores válidos para la duración y el costo diario.");
        return;
    }

    
    let presupuestoTotal = duracion * costoDiario;
{console.log(`El costo total estimado es ${presupuestoTotal} valor moneda local`);
}

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `
        <h2>Presupuesto para el viaje a ${destino}:</h2>
        <p>Duración: ${duracion} días</p>
        <p>Costo diario estimado: ${costoDiario} unidades monetarias</p>
        <p><strong>Presupuesto total estimado: ${presupuestoTotal} unidades monetarias</strong></p>
    `;
});
