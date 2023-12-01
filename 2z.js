function createMatrixWithInput() {
    var size = parseInt(prompt("Введите размер квадратной матрицы:"));
    console.log("Введите размер квадратной матрицы: " + size)

    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = []
        for (let j = 0; j < size; j++) {
            matrix[i][j] = parseInt(prompt('Введите элемент матрицы (' + (i + 1) + ',' + (j + 1) + '):'));
        }
    }
    return matrix;
}
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log('[' + matrix[i].join(', ') + ']');
    }
}
function zero(matrix) {
    var size = matrix.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i + j >= size - 1 ) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}
let myMatrix = createMatrixWithInput();
if (myMatrix.length > 0) {
    console.log('Исходная матрица:');
    displayMatrix(myMatrix);
    console.log('Матрица после обнуления элементов под побочной диагональю:');
    let modifiedMatrix = zero(myMatrix);
    displayMatrix(modifiedMatrix);
}
