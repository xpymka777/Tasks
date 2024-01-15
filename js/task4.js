//вывести из объекта (тут fetch'ем отправить запрос надо) адресс в формате 'Город: city2 Улица: street2 Дом: house2'.' +'
// из этого же объекта вывести 'фамилия personLastName имя personFirstName купил 5 штук товаров name'

//сохраняем адресс в переменную для удобства
let url = 'https://raw.githubusercontent.com/jakiichu/data/main/data.json';

//делаем запрос через fetch
fetch(url).then(response => {
    //если статус ответа не ОК
    if (!response.ok){
        throw new Error(`Ошибка HTTP: ${response.status}`)
    }
    //иначе возвращаем ответ
    return response.json();
}).then(data => {
    //из тела ответа получаем информацию
    let city = data.address.city;
    let street = data.address.street;
    let house = data.address.house;
    //после выводим в необходимом нам формате
    console.log(`Город: ${city} Улица: ${street} Дом: ${house}`);

    let lastName = data.person.lastName;
    let firstName = data.person.firstName;
    let itemCount = data.productsOrder.count;

    console.log(`${lastName} ${firstName} купил ${itemCount} штук товаров`)
}).catch(error => {
    //логирование ошибки в случае если fetch не отработает
    console.error('Ошибка при выполнении fetch:', error.message);
})
