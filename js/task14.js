// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.

    class Worker {

    //объявляем свойства приватными через #
    #name;
    #surname;
    #rate;
    #days;

    //метод вызываемый при создании нового объекта, который принимает параметры и сохраняет в соответствующие поля
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#days = days;
        this.#rate = rate;
    }

    //методы для чтения
    getName() {
        return this.#name;
    }

    getSurname() {
        return this.#surname;
    }

    getDays() {
        return this.#days;
    }

    //метод для присвоения(сеттер)
    setDays(days){
        this.#days = days;
    }

    getRate() {
        return this.#rate;
    }

    //метод для присвоения(сеттер)
    setRate(rate){
        this.#rate = rate;
    }

    getSalary() {
        return this.#days * this.#rate;
    }

}

//создаём объект
let worker = new Worker('Mike','Vazovski',48,90);

//вывод
console.log(`Фамилия: ${worker.getSurname()}; Имя: ${worker.getName()}; Ставка: ${worker.getRate()}; Кол-во дней: ${worker.getDays()}; Зарплата: ${worker.getSalary()};`);

//вызываем методы-сеттеры и присваиваем с их помощью новое значение
worker.setDays(30);
worker.setRate(1000);

//проверяем новые значения
console.log(`Новая зарплата: ${worker.getSalary()}`);