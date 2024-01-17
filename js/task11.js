//Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]] Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

function objectToArray(obj) {
    // Получаем ключи объекта
    let keys = Object.keys(obj);

    // Создаем массив, содержащий вложенные массивы [key, value]
    let resultArray = keys.map(key => [key, obj[key]]);

    return resultArray;
}

// Пример использования
let example = { a: 1, b: 2, c: 3, d: 4};


let resultArray = objectToArray(example);

console.log(resultArray);
