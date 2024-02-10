function enviar() {

    let datos = {}
    datos = { actividad: document.getElementById("textJs").value, fecha: document.getElementById("fecha").value }

    let data = []
    data.push(datos)
    console.log(data)

    pintar()
    limpiar()
    function pintar() {
        if (datos.actividad === "" || datos.fecha === "") {
            alert("Llena todos los campos para poder agregarlos a la tabla!")
        } else {
            let prioridad = ""
            if (document.getElementById("check").checked) {
                prioridad = "Alta"

                let fila = document.createElement("tr")
                fila.classList.add("filaAlta")
                let celda = document.createElement("td")

                celda.textContent = datos.actividad
                fila.appendChild(celda)

                celda = document.createElement("td")
                celda.textContent = prioridad
                fila.appendChild(celda)

                celda = document.createElement("td")
                celda.textContent = datos.fecha
                fila.appendChild(celda)

                document.getElementById("dataTable").appendChild(fila)
            } else {
                prioridad = "Baja"

                let fila = document.createElement("tr")
                fila.classList.add("filaBaja")
                let celda = document.createElement("td")

                celda.textContent = datos.actividad
                fila.appendChild(celda)

                celda = document.createElement("td")
                celda.textContent = prioridad
                fila.appendChild(celda)

                celda = document.createElement("td")
                celda.textContent = datos.fecha
                fila.appendChild(celda)

                document.getElementById("dataTable").appendChild(fila)
            }
        }
    }

    function limpiar() {
        document.getElementById("textJs").value = ""
        document.getElementById("fecha").value = ""
        document.getElementById("check").checked = false
    }

}

let countClic = 1;

const botonOrdenar = document.getElementById("ordenar");
botonOrdenar.addEventListener("click", function () {
    ordenar();
});

function ordenar() {
    const filasAlta = document.querySelectorAll(".filaAlta");
    const filasBaja = document.querySelectorAll(".filaBaja");
    console.log("Función ordenar() llamada")
    console.log("Valor de countClic: " + countClic);

    if (countClic % 2 == 0) {
        filasAlta.forEach(fila => fila.style.order = "2");
        filasBaja.forEach(fila => fila.style.order = "1");
        console.log("Ordenar por prioridad alta")
    } else {
        filasAlta.forEach(fila => fila.style.order = "1");
        filasBaja.forEach(fila => fila.style.order = "2");
        console.log("Ordenar por prioridad baja")
    }

    console.log("Valor de countClic: " + countClic);
    countClic++;
}