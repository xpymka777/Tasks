//Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

let string = 'hello alexandr!';

// Разбиваем строку на слова по пробелу
let words = string.split(' ');

// Создаем новый массив, где каждый элемент заменяется символами из первого элемента
let resultArray = words.map(element => {
    // Создаем строку, состоящую из повторений первого символа текущего элемента
    let replacementString = element[0].repeat(element.length);
    //возвращаем изменённые слова
    return replacementString;
});

//преобразуем полученный массив в строку
let resultString = resultArray.join(' ');

console.log(resultString);