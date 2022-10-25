var br = "<br><br>";

// Ejercicio a)
function diaMes() {
    let mes = prompt("Introduce un numero del 1 al 12");
    let diasMes = new Date(0, mes, 0).getDate();
    alert(`El mes tiene: ${diasMes} dias.`);
}

//Ejercicio b)

function sum(num1, num2) {
    var num1 = parseInt(prompt("Introduce el primer numero"));
    var num2 = parseInt(prompt("Introduce el segundo numero"));
    var result = num1 + num2;
    alert(`La suma es ${result} `);
   


}
//ponemos la condicion si el primer numero es menor rstamos el segundo primero para evitar negativos
function subtract(num1, num2) {
    var num1 = parseInt(prompt("Introduce el primer numero"));
    var num2 = parseInt(prompt("Introduce el segundo numero"));
    if (num1 < num2) {
        result = num2 - num1;
        alert(`La resta es ${result}`);
    } else { document.write(`La resta es ${num1 - num2}`); }
    
}

function multiply(num1, num2) {
    var num1 = parseInt(prompt("Introduce el primer numero"));
    var num2 = parseInt(prompt("Introduce el segundo numero"));
    var result = num1 * num2;
    alert(`La multiplicacion es ${result}`);
    
}

function power(num1, num2) {
    var num1 = parseInt(prompt("Introduce el primer numero"));
    var num2 = parseInt(prompt("Introduce el segundo numero"));
    var result = Math.pow(num1, num2);
    alert(`La potencia es ${result}`);
    
}

//ejercicio c)

function rojo() {
    document.getElementById("frase").style.color = "red";
    document.getElementById("frase").style.backgroundColor = "white";
    document.getElementById("frase").style.padding = "5px";
    document.getElementById("frase").style.textAlign = "center"
}
function verde() {
    document.getElementById("frase").style.color = "green";
    document.getElementById("frase").style.backgroundColor = "white"
    document.getElementById("frase").style.textAlign = "center"
}

function azul() {
    document.getElementById("frase").style.color = "blue";
    document.getElementById("frase").style.backgroundColor = "white";
    document.getElementById("frase").style.textAlign = "center"
}





