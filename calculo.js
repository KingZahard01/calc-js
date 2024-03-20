// funcion para tomar el valor del boton y insertar en el 'display'
function addToDisplay(value) {
    // obtener el elemento por su 'id'
    document.getElementById("display").value += value;
}

// funcion para limpiar el 'display'
function clearDisplay() {
    // cambia el valor en el 'display' a vacio
    document.getElementById("display").value = "";
}

// funcion para hacer un calculo
function calculate() {
    try {
        // usa la funcion 'eval' para evaluar la expresion como codigo javascript y obtener el resultado
        const result = eval(document.getElementById("display").value);
        // cambia el valor del 'diplay' por el resultado
        document.getElementById("display").value = result;
    } catch (error) {
        // cambia el valor del 'diplay' a Error
        document.getElementById("display").value = "Error";
    }
}
