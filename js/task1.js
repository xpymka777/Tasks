// Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"
//изначальная строка в которой будем производить поиск
let row = 'DDADSADASDAAADS';

//создаём Set, который будет хранить только уникальные значения
let unique = new Set();

//перебираем нашу строку по символам
for (let char of row){
    //если у нас в Set нет такого символа, то добавляем
    if (!unique.has(char)){
        unique.add(char);
    }
}

//преобразовываем полученный массив уникальных значений в строку
let uniqueString = Array.from(unique).join('');

//вывод итоговый
console.log(uniqueString);