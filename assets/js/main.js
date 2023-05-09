var gastos = []
var presupuesto = 0;
var saldo = 0;

function guardarPresupuesto() {
    var presupuesto = document.getElementById("examplePresupuesto").value;
    $("#mostrarPresupuesto").html("$" + presupuesto.toLocaleString('es-CL'))
    
    if (presupuesto < 1 || isNaN(presupuesto)) {
        alert("Cantidad no válida");
        return;
    }
    //console.log(presupuesto)
}

function guardarGasto() {
    var nombre = document.getElementById("exampleNombreGasto").value;
    var monto = document.getElementById("exampleCantidadGasto").value;
    //console.log(nombre, monto)
    $("#agregarGasto").html(nombre)
    $("#agregarValor").html(monto.toLocaleString('es-CL'))

    gastos.push({ nombre: nombre, monto: monto });
    mostrarSaldo();
    $("#mostrarGastos").value("");
    $("#mostrarSaldo").value("");

}

function mostrarSaldo() {
    var totalGasto = [];
    $.each(gastos, function (index, gasto) {
        totalGasto += gasto.monto;
    });
    saldo = presupuesto - totalGasto
    $("#mostrarGastos").html("$" + totalGasto.toLocaleString('es-CL'));
    $("#mostrarSaldo").html("$" + saldo.toLocaleString('es-CL'));
}

