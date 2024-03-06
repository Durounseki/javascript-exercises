const findTheOldest = function(people) {

    return people.reduce((oldest,person) => {
        let ageOldest = findAge(oldest);
        let age = findAge(person);
        return ageOldest < age ? person : oldest;
    });

};

function findAge(person){
    //Get current year
    thisYear = new Date().getFullYear();
    return person.yearOfDeath ? person.yearOfDeath-person.yearOfBirth : thisYear-person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;