/* 1. Haga una función que dado un texto lo convierta todo en mayúsculas o en minúsculas según
lo decida un usuario. */

// let eleccionUsuario = prompt("Quieres convertir el texto a mayusculas (MY) o a minusculas (MN)")
// let textoAConvertir = "Hola Soy El Texto Que Necesitamos Convertir"

// convertirTexto()

// function convertirTexto () {
//     let textoConvertido
//     if(eleccionUsuario == "MY"){
//         textoConvertido = textoAConvertir.toUpperCase()
//         console.log(textoConvertido);
//     }else if(eleccionUsuario == "MN"){
//         textoConvertido = textoAConvertir.toLowerCase()
//         console.log(textoConvertido);
//     }else {
//         alert("Elige una opcion valida")
//     }
// }

/* 2. Haga una función que retorne un único carácter según una posición específica dado
cualquier texto. */


// retomarCaracter("Hola", 0)

// function retomarCaracter(texto, posicion) {
//     console.log(texto.charAt(posicion));
// }

/* 3. Haga una función que elimine los espacios al inicio y al final de cualquier texto y retorne un
// subtexto dada una posición inicial y una posición final. */


// subTexto("     Hola Mundo     ", 2,7)

// function subTexto(texto, posIni, posFin) {
//     console.log(texto.trim().slice(posIni,posFin))
// }

/* 4. Haga una función que reemplace todas las coincidencias de un texto por otro texto que le
envíe el usuario. */

// let texto = prompt("¿Que frace quieres usar para el ejercicio?")
// let textoARemplazar = prompt("¿Que palabras quieres remplazar?")
// let textoDeRemplazo = prompt("¿Por cual parabra lo vas a remplazar?")


// reemplazarTexto()


// function reemplazarTexto() {
//     console.log(texto.replaceAll(textoARemplazar, textoDeRemplazo));
// }


/* 5. Haga una función que verifique si un texto inicia con un carácter o texto dado. */

// iniciaCon("Hola mundo", "Hola")

// function iniciaCon(texto,inicia) {
//     console.log(texto.startsWith(inicia));
// }


/* 6. Haga una función que dado un número con decimales retorne el número redondeado hacia 
el número entero más próximo (Math.round) o hacia el siguiente número entero (Math.ceil) 
// según lo decida el usuario. */

// let numeroARedondear = prompt("Ingresa el numero decimal que deseas redondear")
// let opcionARedondear = prompt("¿Quieres redondear al entero mas cercano (EC) o al siguiente entero (SE)?")


// redondearNumero()

// function redondearNumero() {
//     if(opcionARedondear == "EC"){
//         console.log(Math.round(numeroARedondear));
//     }else if(opcionARedondear == "SE"){
//         console.log(Math.ceil(numeroARedondear));
//     }else {
//         alert("Ingresa una opcion valida")
//     }
// }


/* 7. Haga una función que normalice un texto (elimine los espacios al inicio y al final y luego lo 
deje en minúscula). */

// normalizarTexto("                             Hola MUNDO    ")

// function normalizarTexto(texto) {
//     textoNormalizado = texto.trim().toLowerCase()
//     console.log(textoNormalizado);
// }


/* 8. Haga una función que, dado el siguiente texto " thIs Is a StrIng MounTAin AndES ", retorne 
“This is a string mountain andes”. */


// formatearTexto(" thIs Is a StrIng MounTAin AndES")

// function formatearTexto(texto) {
//     let = textoFormateado = texto.toLowerCase().trim()
//     let = primeraLetra = textoFormateado.charAt(0).toUpperCase()
//     let = restoDeTexto = textoFormateado.slice(1)
//     textoFormateado = primeraLetra + restoDeTexto
//     console.log(textoFormateado);
// }


/* 9. Haga una función que dado un número verifique si es un número entero o un número 
decimal.*/


// esEntero(5)

// function esEntero(numero) {
//     if(Number.isInteger(numero) == true){
//         console.log("El numero ingresado es entero");
//     }else{
//         console.log("El numero ingresado es decimal");
//     }
    
// }


/* 10. Haga una función que dado tres números devuelva un objeto con el número mayor y el 
número menor. */


// encontrarExtremos(5,9,8)

// function encontrarExtremos(num1, num2, num3) {
//     let numerosMayorYMenor = {
//         numeroMayor : Math.max(num1, num2, num3),
//         numeroMenor : Math.min(num1, num2, num3)
//     }
//     console.log(numerosMayorYMenor);
// }