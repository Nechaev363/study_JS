window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //Timer

    function countTimer(deadline) {
        let timerHours = document.getElementById('timer-hours'),
            timerMinutes = document.getElementById('timer-minutes'),
            timerSeconds = document.getElementById('timer-seconds');

        function getTimeReamaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }

        function updateClock() {
            let timer = getTimeReamaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if (timer.hours < 10) {
                timer.hours = '0' + timer.hours;
            }
            if (timer.minutes < 10) {
                timer.minutes = '0' + timer.minutes;
            }
            if (timer.seconds < 10) {
                timer.seconds = '0' + timer.seconds;
            }

            if (timer.timeRemaining > 0) {
                setInterval(updateClock, 100);
            } else if (timer.timeRemaining <= 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        updateClock();


    }

    countTimer('31 december 2019');

    // menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');
        let count = 0;
        let activeMenu;



        const handLerMenu = () => {
           
            activeMenu = requestAnimationFrame(handLerMenu); // присвоил переменной анимацию
           
            if(!menu.style.transform  || menu.style.transform === `translate(-100%)`) { //задал условие, при котором меню будет появляться в правом краю. Так как в css заданы параметры transform, манипулирю именно transform. Мнгю появляется даже, если не нажать кнопку меню
                menu.style.transform = `translate(100%)`; // меню появляется, но часто моргает
            }else if(document.documentElement.clientWidth < 991){ //анимация отключается, но меню не закрывается
                cancelAnimationFrame(handLerMenu);
            }else {
                menu.style.transform = `translate(-100%)`; //меню исчезает только при большом экране
            }
            // сделал все как в лекции 12
        };
        activeMenu = requestAnimationFrame(handLerMenu);


        btnMenu.addEventListener('click', handLerMenu);
        closeBtn.addEventListener('click', handLerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handLerMenu));

    };
    toggleMenu();
    //popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });

    };

    togglePopup();

});