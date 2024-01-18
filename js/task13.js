//Модифицируйте класс Worker из предыдущей задачи следующим образом: 
// сделайте все его свойства приватными, 
// а для их чтения сделайте методы-геттеры.
class Worker {
    //объявляем свойства приватными через #
    #name;
    #surname;
    #rate;
    #days;

    //метод вызываемый при создании нового объекта, который принимает параметры и сохраняет в соответствующие поля
    constructor(name,surname,rate,days) {
        this.#name = name;
        this.#surname = surname;
        this.#days = days;
        this.#rate = rate;
    }

    //методы для чтения
    getName(){
        return this.#name;
    }

    getSurname(){
        return this.#surname;
    }

    getDays(){
        return this.#days;
    }

    getRate(){
        return this.#rate;
    }

    getSalary(){
        return this.#days * this.#rate;
    }

}

//создаём объект
let worker = new Worker('Mike','Vazovski',48,90);

//вывод
console.log(`Фамилия: ${worker.getSurname()}; Имя: ${worker.getName()}; Ставка: ${worker.getRate()}; Кол-во дней: ${worker.getDays()}; Зарплата: ${worker.getSalary()};`);
