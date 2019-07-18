    'use script';
    let bodyParent = document.body;



    let divBlock = document.createElement("div");

    bodyParent.appendChild(divBlock);
    divBlock.style.fontSize = "22px";
    divBlock.style.fontWeight = "bold";


    let divH2 = document.createElement('h2');


    bodyParent.appendChild(divH2);
    divH2.style.fontSize = "20px";
    divH2.style.fontWeight = "normal";
    
    let divSpan = document.createElement('span');

    bodyParent.appendChild(divSpan);
    divSpan.style.fontSize = "18px";
    divSpan.style.fontWeight = "normal";
    let time = new Date();


    let divP = document.createElement('p');
    bodyParent.appendChild(divP);
    divP.style.fontSize = "16px";
    divP.style.fontWeight = "normal";

    let p = document.createElement("p");
    bodyParent.appendChild(p);
    p.style.fontSize = "16px";
    p.style.fontWeight = "normal";

    function happyNewYear() {


        let clock = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();

        if (clock >= 5 && clock < 12) {
            divBlock.textContent = 'Дорое утро';
        } else if (clock >= 12 && clock < 18) {
            divBlock.textContent = 'Дорый день';
        } else if (clock >= 18 && clock < 23) {
            divBlock.textContent = 'Дорый вечер';
        } else if (clock >= 23) {
            divBlock.textContent = 'Дорой ночи';
        }

        if (time > 18) {
            divSpan.textContent = 'Текущее время: ' + clock + ':' + minutes + ':' + seconds + ' PM';
        } else {
            divSpan.textContent = 'Текущее время: ' + clock + ':' + minutes + ':' + seconds + ' AM';
        }
        let now = new Date();
        let dayNames = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");
        let moment = new Date();
        let textout;
        let month = now.getMonth();
        let getDate = now.getDate();
        textout = getDate;
        if (month == 0) {
            textout += " января";
        }
        if (month == 1) {
            textout += " февраля";
        }
        if (month == 2) {
            textout += " марта";
        }
        if (month == 3) {
            textout += " апреля";
        }
        if (month == 4) {
            textout += " мая";
        }
        if (month == 5) {
            textout += " июня";
        }
        if (month == 6) {
            textout += " июля";
        }
        if (month == 7) {
            textout += " августа";
        }
        if (month == 8) {
            textout += " сентября";
        }
        if (month == 9) {
            textout += " октября";
        }
        if (month == 10) {
            textout += " ноября";
        }
        if (month == 11) {
            textout += " декабря";
        }

        divH2.textContent = 'Сегодня ' + textout + ", " + dayNames[now.getDay()];
        let date = new Date().getTime(),
        newYear = new Date("1 january 2020").getTime(),
        timeRemaining = ((newYear - date) / 1000),
        dateResult = Math.floor(((timeRemaining / 60) / 60) / 24);
        p.textContent = 'До нового года осталось ' + dateResult + ' дней';
    }
    setInterval(happyNewYear, 1000);