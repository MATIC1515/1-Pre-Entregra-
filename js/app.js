function calcularGastos() {
    const diasViaje = parseInt(document.getElementById("diasViaje").value);
    const costoTransporte = parseFloat(document.getElementById("transporte").value);
    const costoAlojamiento = parseFloat(document.getElementById("alojamiento").value);
    const costoComida = parseFloat(document.getElementById("comida").value);
    const costoActividades = parseFloat(document.getElementById("actividades").value);

    if (isNaN(diasViaje) || isNaN(costoTransporte) || isNaN(costoAlojamiento) || isNaN(costoComida) || isNaN(costoActividades)) {
        alert("Por favor, ingresa valores válidos en todos los campos.");
        return;
    }

    const costoDiario = calcularCostoDiario(diasViaje, costoAlojamiento, costoComida);
    const costoTotal = costoTransporte + costoDiario + costoActividades;
    const totalConDescuento = aplicarDescuento(diasViaje, costoTotal);

    document.getElementById("resultado").textContent = `El costo total del viaje es: $${totalConDescuento.toFixed(2)}`;
}

function calcularCostoDiario(dias, alojamiento, comida) {
    let totalDiario = 0;
    for (let i = 0; i < dias; i++) {
        totalDiario += alojamiento + comida;
    }
    return totalDiario;
}

function aplicarDescuento(dias, total) {
    let descuento = 0;
    if (dias > 7) {
        descuento = total * 0.1;
    }
    return total - descuento;
}
