var gastos = [];
var presupuesto = 0;
var saldo = 0;

function guardarPresupuesto() {
    presupuesto = parseInt(document.getElementById("examplePresupuesto").value);
    $("#mostrarPresupuesto").html("$" + presupuesto.toLocaleString('es-CL'))
    $("#examplePresupuesto").val("");
    mostrarSaldo();
    
    if (presupuesto < 1 || isNaN(presupuesto)) {
        alert("Cantidad no válida");
        return;
    }
    //console.log(presupuesto)
}

function guardarGasto() {
    var nombre = document.getElementById("exampleNombreGasto").value;
    var monto = parseInt(document.getElementById("exampleCantidadGasto").value);
    $("#exampleNombreGasto").val("");
    $("#exampleCantidadGasto").val("");

    //console.log(nombre, monto)
    $("#agregarGasto").append(`<div> ${nombre} </div>`);
    $("#agregarValor").append("<div>$" + monto.toLocaleString('es-CL') + "</div>");
    
    gastos.push({ nombre: nombre, monto: Number(monto) });
    $("#mostrarGastos").html("");
    $("#mostrarSaldo").html("");
        mostrarSaldo();
    
}

function mostrarSaldo() {
    var totalGasto = 0;
    $.each(gastos, function (index, gasto) {
        //console.log(gasto);
        totalGasto += gasto.monto;
    });
    saldo = presupuesto - totalGasto
    $("#mostrarGastos").html("$" + totalGasto.toLocaleString('es-CL'));
    $("#mostrarSaldo").html("$" + saldo.toLocaleString('es-CL'));
}

function borrarGasto() {
    
}

function limpiar() {
			gastos = 0;
			presupuesto = 0;
			saldo = 0;
			$("#mostrarPresupuesto").html("$");
			$("#mostrarGastos").html("$");
			$("#mostrarSaldo").html("$");
            $("#agregarGasto").html("");
			$("#agregarValor").html("$");
		}
