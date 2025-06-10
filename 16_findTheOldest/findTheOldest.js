const findTheOldest = function (people) {
    return peoplesAge = people.map(person => ({
        name: person.name,
        age: (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth
    })).sort((a, b) => b.age - a.age)[0];
}

// Do not edit below this line
module.exports = findTheOldest;
