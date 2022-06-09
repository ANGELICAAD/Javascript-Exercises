/**
 * Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
 */
function showAlert() {
    alert("Hello World")
}

/**
 * Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
 */
function showText() {
    document.write("Hello World")
}

/**
 * Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
 */
function showSum() {
    document.write(3 + 5)
}

/**
 * Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
 */
function showWelcomeText() {
    let name = prompt("Por favor, ingrese su nombre de usuario", "Nombre")
    document.write("Hola " + name)
}

/**
 * Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
 */
function showNumberSum() {
    let numberOne = prompt("Por favor, digite un número", "Número uno")
    let numberTwo = prompt("Por favor, digite un número", "Número dos")
    document.write(Number(numberOne) + Number(numberTwo))
}

/**
 * Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 */
function showLargerNumberTwo() {
    let numberOne = prompt("Por favor, digite un número", "Número uno")
    let numberTwo = prompt("Por favor, digite un número", "Número dos")
    (Number(numberOne) > Number(numberTwo)) ? document.write(numberOne) : document.write(numberTwo)
}

/**
 * Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
 */
function showLargerNumberThree() {
    let numberOne = prompt("Por favor, digite un número", "Número uno")
    let numberTwo = prompt("Por favor, digite un número", "Número dos")
    let numberThree = prompt("Por favor, digite un número", "Número tres")
    if (Number(numberOne) > Number(numberTwo) && Number(numberOne) > Number(numberThree)) {
        document.write(numberOne)
    } else if (Number(numberTwo) > Number(numberThree)) {
        document.write(numberTwo)
    } else {
        document.write(numberThree)
    }
}

/**
 * Escribe un programa que pida un número y diga si es divisible por 2
 */
function showIfDivisible() {
    let number = prompt("Por favor, digite un número", "Número")
    console.log(number);
    (Number(number) % 2 === 0) ? alert("Es divisible por 2") : alert("No es divisible por 2")
}

/**
 * Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
 */
function showLetterQuantityA() {
    let letter = prompt("Por favor, escriba una frase", "Frase")
    let quantity = 0
    for (let i = 0; i < letter.length; i++) {
        if (letter.charAt(i) === 'a') {
            quantity++
        }
    }
    alert("La cantidad de veces que aparece la letra a en la frase es: " + quantity)
}

/**
 * Escribe un programa que pida una frase y escriba las vocales que aparecen
 */
function showVowels() {
    let phrase = prompt("Por favor, escriba una frase", "Frase")
    let vowels = ""
    for (let i = 0; i < phrase.length; i++) {
        (phrase.charAt(i) === 'a' || phrase.charAt(i) === 'e' || phrase.charAt(i) === 'i' || phrase.charAt(i) === 'o' || phrase.charAt(i) === 'u')
        ? vowels += phrase.charAt(i) + " " : vowels += ""
    }
    const arrVowels = vowels.split(" ")

    const newArrVowels = arrVowels.filter((valor, indice) => {
        return arrVowels.indexOf(valor) === indice;
    });
    alert("Las vocales que tiene la frase escrita son: " + newArrVowels)
}

/**
 * Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
 */
function showNumberVowels() {
    let phrase = prompt("Por favor, escriba una frase", "Frase")
    let vowels = 0
    for (let i = 0; i < phrase.length; i++) {
        if (phrase.charAt(i) === 'a' || phrase.charAt(i) === 'e' || phrase.charAt(i) === 'i' || phrase.charAt(i) === 'o' || phrase.charAt(i) === 'u') {
            vowels++
        }
    }
    alert("De la frase " + phrase + " que contiene : " + phrase.length + " carácteres, " + vowels + " son vocales")
}

/**
 * Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
 */
function showNumberEachVowel() {
    let phrase = prompt("Por favor, escriba una frase", "Frase")
    let vowels = [0, 0, 0, 0, 0]
    for (let i = 0; i < phrase.length; i++) {
        if (phrase.charAt(i) === 'a' || phrase.charAt(i) === 'A') {
            vowels[0]++
        } else if (phrase.charAt(i) === 'e' || phrase.charAt(i) === 'E') {
            vowels[1]++
        } else if (phrase.charAt(i) === 'i' || phrase.charAt(i) === 'I') {
            vowels[2]++
        } else if (phrase.charAt(i) === 'o' || phrase.charAt(i) === 'O') {
            vowels[3]++
        } else if (phrase.charAt(i) === 'u' || phrase.charAt(i) === 'U') {
            vowels[4]++
        }
    }
    alert("De la frase (" + phrase + ") que contiene : " + phrase.length + " carácteres, " +
        vowels[0] + " tiene la vocal a, " + vowels[1] + " tiene la vocal e, " +
        vowels[2] + " tiene la vocal i, " + vowels[3] + " tiene la vocal o, " +
        vowels[4] + " tiene la vocal u.")
}

/**
 * Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
 * (sólo hay que comprobar si lo es por uno de los cuatro)
 */
function showIsDivisible() {
    let number = prompt("Por favor, escriba un número", "Número")
    console.log(number);
    ((number % 2) === 0) ? alert("El número " + number + " es divisible por 2")
    : ((number % 3) === 0) ? alert("El número " + number + " es divisible por 3")
    : ((number % 5) === 0) ? alert("El número " + number + " es divisible por 5")
    : ((number % 7) === 0) ? alert("El número " + number + " es divisible por 7")
    : alert("El número " + number + " no es divisible por 2, 3, 5 o 7")
}

/**
 * Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible 
 * (hay que decir todos por los que es divisible)
 */
function showQuantityIsDivisible() {
    let number = prompt("Por favor, escriba un número", "Número")
    console.log(number);
    if((number % 2) === 0) {
        alert("El número " + number + " es divisible por 2")
    }
    if((number % 3) === 0) {
        alert("El número " + number + " es divisible por 3")
    }
    if((number % 5) === 0) {
        alert("El número " + number + " es divisible por 5")
    }
    if((number % 7) === 0) {
        alert("El número " + number + " es divisible por 7")
    } else {
        alert("El número " + number + " no es divisible por 2, 3, 5 o 7")
    }
}

/**
 * Escribir un programa que escriba en pantalla los divisores de un número dado
 */
function showDivisorsANumber() {
    let number = prompt("Por favor, escriba un número", "Número")
    let divisors = []
    for (let i = 1; i <= number; i++) {
        if(number % i === 0) {
            divisors.push(i)
        }
    }
    alert("Los divisores del número " + number + " son: " + divisors)
}

/**
 * Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
 */
function showDivisorsOfNumbers() {
    let numberOne = prompt("Por favor, escriba un número", "Número")
    let numberTwo = prompt("Por favor, escriba un número", "Número")
    let divisors = []
    let lowerNumber = (numberOne < numberTwo) ? numberOne : numberTwo
    for (let i = 1; i <= lowerNumber; i++) {
        if((numberOne % i === 0) && (numberTwo % i === 0)) {
            divisors.push(i)
        }
    }
    alert("Los divisores de los números " + numberOne + " y " + numberTwo + " son: " + divisors)
}

/**
 * Escribir un programa que nos diga si un número dado es primo 
 * (no es divisible por ninguno otro número que no sea él mismo o la unidad)
 */
function showIsprime() {
    let number = prompt("Por favor, escriba un número", "Número")
    let count = 0
    for (let i = 1; i <= number; i++) {
        if(number % i === 0) {
            count++
        }
    }
    (count === 2) ? alert("El número " + number + ", es un número primo") 
    : alert("El número " + number + ", no es un número primo")
}