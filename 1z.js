function koordinati(x, y) {
    if (x > 0 && y > 0) {
        return 1; // Первая четверть
    } else if (x < 0 && y > 0) {
        return 2; // Вторая четверть
    } else if (x < 0 && y < 0) {
        return 3; // Третья четверть
    } else if (x > 0 && y < 0) {
        return 4; // Четвёртая четверть
    } else if (x === 0 && y === 0) {
        return "находится в начале координат"; 
    } else {
        return "лежит на оси"; 
    }
}

let x = parseFloat(prompt("Введите значение x:"));
let y = parseFloat(prompt("Введите значение y:"));
console.log("Введите значение x: " + x);
console.log("Введите значение y: " + y);

if (!isNaN(x) && !isNaN(y)) {
    let chetvert = koordinati(x, y);
    if (!isNaN(chetvert)){
        console.log(`Точка (${x}, ${y}) находится в ${chetvert} четверти.`);
    }
    else {
        console.log(`Точка (${x}, ${y}) ${chetvert}.`);      
    }
} else {
    console.log("Ошибка ввода. Пожалуйста, введите числовые значения.");
}
