'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
        const output = `You are ${firstName}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }

            const output = 'NEW OUTPUT!';
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add2, 3);
        console.log(output);
    }
    printAge(); 
    return age;
}

const firstName = 'Desmond';
calcAge(2001);