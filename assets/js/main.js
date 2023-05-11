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
        console.log(gasto);
        totalGasto += gasto.monto;
    });
    saldo = presupuesto - totalGasto
    $("#mostrarGastos").html("$" + totalGasto.toLocaleString('es-CL'));
    $("#mostrarSaldo").html("$" + saldo.toLocaleString('es-CL'));
}

// document.getElementById("examplePresupuesto").addEventListener("change", function() {
// 			presupuesto = parseInt(document.getElementById("examplePresupuesto").value);
// 			document.getElementById("agregarValor").innerHTML = presupuesto;
// 			remainingBudget = presupuesto - monto;
// 			document.getElementById("mostrarSaldo").innerHTML = remainingBudget;
// 		});


function limpiar() {
			gastos = 0;
			presupuesto = 0;
			saldo = 0;
			document.getElementById("mostrarPresupuesto").innerHTML = "$";
			document.getElementById("mostrarGastos").innerHTML = "$";
			document.getElementById("mostrarSaldo").innerHTML = "$";
			document.getElementById("agregarGasto").innerHTML = "";
			document.getElementById("agregarValor").innerHTML = "$";
		}
