let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [john, pete, mary];

let usersMapped = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }
});

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

let arr = [ pete, john, mary ];

sortByAge(arr);

function sortByAge(array) {
    array.sort((a,b) => a.age - b.age);
}

function getAverageAge(users) {
    let ageSum = 0;
    users.forEach(user => {
        ageSum += user.age;
    });
    return ageSum / users.length;
}

users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById[0]);

function groupById(users) {
    return users.map(user => ({
        [user.id]: user 
    }));
}