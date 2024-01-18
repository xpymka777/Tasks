//Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
//name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days

class Worker {
    //метод вызываемый при создании нового объекта, который принимает параметры и сохраняет в соответствующие поля
    constructor(name,surname,rate,days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    //метод, который выводит зарплату сотрудника
    getSalary(){
        return this.rate * this.days;
    }

}

//создаём новый объект и передаём в него значения
let worker = new Worker('Mike','Vazovski',200,125);

//вывод
console.log(`Фамилия: ${worker.surname}; Имя: ${worker.name}; Кол-во дней: ${worker.days}; Раб.ставка: ${worker.rate}; Зарплата: ${worker.getSalary()};`);