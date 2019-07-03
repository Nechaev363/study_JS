'use script';

let argument = prompt('Введите строку');
    if(argument != String) {
        console.log('Это не строка! ', argument.trim());
    } else if(argument.length > 30) {
        console.log(argument + '...');
    }

 


