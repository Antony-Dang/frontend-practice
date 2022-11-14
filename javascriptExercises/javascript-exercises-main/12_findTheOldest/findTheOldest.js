const findTheOldest = function(people) {
    let oldestPerson;
    let oldest = people.reduce((oldestAge, person) => {
        let personAge = person["yearOfDeath"] - person["yearOfBirth"];
        if (personAge > oldestAge) {
            oldestPerson = person;
            return personAge;
        }
    }, 0);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
