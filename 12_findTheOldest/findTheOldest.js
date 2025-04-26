const findTheOldest = function(people) {

    return people.reduce(function(lastPerson, nextPerson) {
        if (lastPerson.yearOfDeath === undefined) {
            lastPerson.yearOfDeath = 2025;
        } if (nextPerson.yearOfDeath === undefined) {
            nextPerson.yearOfDeath = 2025;
        } 

        const lastPersonAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
        const nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;

        return lastPersonAge > nextPersonAge ? lastPerson : nextPerson;
    });    
};

// Do not edit below this line
module.exports = findTheOldest;
