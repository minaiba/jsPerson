// ES6 SPREAD REST ДЕСТРУКТУРИЗАЦИЯ 
// это операторы 
// тернарный оператор



// spread массив менен жана оьбект менен иштегени жардам берет
// развертывание и копирование

// в массиве можно развертывать, копировать, и добавлять что то еще
// а в объекте можно копировать добавлять что то еще 


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr);

// const arr2 = [...arr];

// console.log(...arr2);



// const obj = {name: 'aiba', age: 18}

// const obj2 = {...obj, city: 'eimke'}

// console.log(obj2);


// REST маалыматты кошуп сактай берет



// ДЕСТРУКТУРИЗАЦИЯ - только нужное можно расспаковать

// const info = ['name', 'my', 'tilek', 'is', 45, { hobby: 'swim' }];

// const [a, b, c, d, f, {hobby}] = info;

// console.log(b, a, d, c, f, hobby);


const person = {
    name: "anna",
    age: 28,
    city: "киев",
    profession: "учитель",
    family: ['maks', 'maks', 'maks', {old: 44}]
}

const pers = {...person}

const {name, age, city, profession} = person

const {'family':[a, b, c, {old}]} = person

console.log(pers, a, b, c, old);


