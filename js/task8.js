// отфильтровать выборкой массив и бинарным поиском найти элемент массив:[6,1,7,3,5,8,0,-1,3,2,4,5]
// искомое число 0

//исходный массив
let array = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5];

console.log(`Изначальный массив: ${array}`);

//фильтруем массив, чтобы оставить только положительные числа
let filteredArray = array.filter(element => element >= 0);

console.log(`Фильтрованный массив: ${filteredArray}`);

//сортируем фильтрованный массив
let sortedArray = filteredArray.sort((a, b) => a - b);

console.log(`Сортированный массив: ${sortedArray}`)

//функция для бинарного поиска, на вход идёт массив и искомое число
function binarySearch(array, targetNumber) {

    //левая граница поиска по умолчанию 0
    let left = 0;
    //правая граница поиска
    let right = array.length - 1;

    while (left <= right) {
        //определяем средний элемент массива, округлённый вниз, который будет сравниваться с искомым значением
        let middle = Math.floor((left + right) / 2);
        //если среднее значение равно искомому,
        if (array[middle] === targetNumber) {
            return middle; // возвращаем его индекс
        }
        //если меньше искомого, то обновляем левую границу, так как искомый элемент находится в правой половине
        else if (array[middle] < targetNumber) {
            left = middle + 1;
        }
        //если больше, тогда обновляем правую границу, так как искомое в левой половине
        else {
            right = middle - 1;
        }
    }
    //если элемент не был найден, то возвращаем false
    return -1;
}

//искомое число
let targetNumber = 0;

// вызов функции
let forFunction = binarySearch(sortedArray, targetNumber);

//если функция вернула нам на false, то выводим элемент и его индекс
if (forFunction !== -1) {
    console.log(`Элемент ${targetNumber} найден по индексу ${forFunction}`);
}else {
    console.log(`Элемент ${targetNumber} не найден в массиве`);
}
