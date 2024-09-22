(function () {
    'use strict';
    const femaleNames = ['shira', 'shayna', 'adina', 'shana', 'yael', 'chaya', 'rina', 'mindy', 'shayna'];
    const maleNames = ['dovid', 'avaraham', 'baruch', 'mendel', 'shaya', 'benny', 'abie', 'chaim'];
    const lastNames = ['acker', 'applebaum', 'abrahamson', 'gluck', 'babad', 'stern', 'stein', 'steinberg', 'shaulov', 'werner'];

    const females = [];
    const males = [];

    for (let i = 0; i < 20; i++) {
        const femalePerson = createPerson(i, femaleNames[Math.floor(Math.random() * femaleNames.length)], lastNames[Math.floor(Math.random() * lastNames.length)], 'female');
        const malePerson = createPerson(i + 20, maleNames[Math.floor(Math.random() * maleNames.length)], femalePerson.last, 'male');
        femalePerson.spouse = malePerson.first;
        femalePerson.spouseId = malePerson.id;
        malePerson.spouse = femalePerson.first;
        malePerson.spouseId = femalePerson.id;

        females.push(femalePerson);
        males.push(malePerson);
        console.log(`id: ${femalePerson.id} first: ${femalePerson.first} last: ${femalePerson.last} gender: ${femalePerson.gender} spouse: ${femalePerson.spouse} ${femalePerson.last} -${femalePerson.spouseId}`);
        console.log(`id: ${malePerson.id} first: ${malePerson.first} last: ${malePerson.last} gender: ${malePerson.gender} spouse: ${malePerson.spouse} ${malePerson.last} -${malePerson.spouseId} `);

    }


    function createPerson(id, first, last, gender) {
        return {
            id,
            first,
            last,
            gender
        };
    }


}());