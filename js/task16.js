//создать класс calculation, в котором будет одна переменная calculationLine.
//методы: setterCalculationLine который будет к переменной приравнивать значение которое передается,
// setLastSymbolCalculationLine который будет в конец строки прибавлять символ,
// gettercalCulationLine который будет выводить переменную,
// lastSymbol получение последнего символа,
// deleteLastSymbol удаление последнего символа из строки

class calculation {
    //приватное свойство класса
    #calculationLine

    //используем его как строку
    constructor() {
        this.#calculationLine = '';
    }

    //метод сеттер для присвоения значения
    setterCalculationLine(number){
        this.#calculationLine = number;
    }

    //метод для добавления сомволов в конец строки
    setLastSymbolCalculationLine(symbol){
        this.#calculationLine += symbol;
    }

    //метод геттер для отображения
    gettercalCulationLine(){
        return this.#calculationLine;
    }

    //метод для показа последнего символа
    lastSymbol(){
        //проверка на наличие длины строки
        if (this.#calculationLine.length > 0) return this.#calculationLine.charAt(this.#calculationLine.length - 1);
        //если строка пустая вернём null
        return null;
    }

    //метод для удаления последнего символа строки
    deleteLastSymbol(){
        //если в строке что-то есть, то удаляем последний символ
        if (this.#calculationLine.length > 0) this.#calculationLine = this.#calculationLine.slice(0,-1);
    }

}

//создаём объект
let calculator = new calculation();

//присваиваем значение
calculator.setterCalculationLine('12345');

//вывод
console.log((calculator.gettercalCulationLine()));

//добавляем значение
calculator.setLastSymbolCalculationLine('91');

//вывод
console.log((calculator.gettercalCulationLine()));

//вывод последнего символа строки
console.log(calculator.lastSymbol());

//удаляем последний символ
calculator.deleteLastSymbol();

//вывод
console.log((calculator.gettercalCulationLine()));
