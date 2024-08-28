// Definimos las tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
};

// Función para sumar dos números
const sum = (a, b) => {
    return a + b;
};

// Función para convertir euros a dólares
const fromEuroToDollar = (valueInEuro) => {
    return valueInEuro * oneEuroIs["USD"];
};

// Función para convertir dólares a yenes
const fromDollarToYen = (valueInDollar) => {
    // Convertimos dólares a yenes directamente
    return valueInDollar * 156.5; // Usamos la tasa de conversión directa
};

// Función para convertir yenes a libras
const fromYenToPound = (valueInYen) => {
    // Convertimos yenes a libras directamente
    return valueInYen * 0.006; // Usamos la tasa de conversión directa
};

// Exportamos las funciones para usarlas en las pruebas
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
