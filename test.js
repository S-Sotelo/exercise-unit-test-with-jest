const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para sumar dos números
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Prueba para convertir euros a dólares
test('One euro should be 1.07 dollars', () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected, 2);
});

// Prueba para convertir dólares a yenes
test('Converts dollars to yen correctly', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(156.5, 2);
    expect(fromDollarToYen(10)).toBeCloseTo(1565, 2);
});

// Prueba para convertir yenes a libras
test('Converts yen to pounds correctly', () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.006, 3); // Corregido a 0.006
    expect(fromYenToPound(1000)).toBeCloseTo(6, 2); // Corregido a 6
});
