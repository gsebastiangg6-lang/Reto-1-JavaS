/**
 * Reto: Serie Fibonacci
 * Imprime los 20 primeros números de la serie Fibonacci en consola.
 */

function generarFibonacci(cantidad) {
    const fibonacci = [0, 1];

    for (let i = 2; i < cantidad; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    // Imprime el formato separado por comas tal como en el ejemplo: 0, 1, 1, 2, 3...
    console.log("Los 20 primeros números de la serie Fibonacci son:");
    console.log(fibonacci.join(", "));
    
    // Imprime también la tabla indexada en consola
    console.table(fibonacci);
}

generarFibonacci(20);
