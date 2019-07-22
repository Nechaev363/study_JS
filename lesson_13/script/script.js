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
        const main = document.querySelector('main');
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');
        const a = document.querySelectorAll('a');
        let count = 0;

        const handLerMenu = () => {
    

            if(!menu.style.transform  || menu.style.transform === `translate(-100%)`) { 
                menu.style.transform = `translate(0)`;
            }else {
                menu.style.transform = `translate(-100%)`; 
            }
        };
            main.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.menu');
            if(!target) {
                menu.style.transform = `translate(-100%)`;
            }else {
                menu.style.transform = `translate(0)`;
            }
        });
    
    
        menu.addEventListener('click', (el) => {
            let target = el.target;
            if(target === closeBtn) { 
                handLerMenu();
            }

            

            for (let i=0; i < a.length; i++) {
                target = target.closest('li');
                if(target === menuItems[i]) {
                handLerMenu();
                } 
            }
        });
    
        btnMenu.addEventListener('click', handLerMenu);
        
        

    };
    toggleMenu();

    //popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupClose = document.querySelector('.popup-close');

        let count = 0;
        let animatePopup;

        const animateSnowPopup = () => {
            animatePopup = requestAnimationFrame(animateSnowPopup);

            count += 0.005;
            if (count <= 1) {
                popup.style.opacity = count;
            } else {
                cancelAnimationFrame(animateSnowPopup);
            }
        };

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                if (document.documentElement.offsetWidth < 768) {
                    popup.style.display = 'block';
                    popup.style.opacity = 1;
                } else {
                    popup.style.display = 'block';
                    count = 0;
                    animatePopup = requestAnimationFrame(animateSnowPopup);
                }
                
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
        popup.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.popup-content');
            if(!target) {
                popup.style.display = 'none';
            }
        });

    };

    togglePopup();

    //Табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');

                if (target) {
                    tab.forEach((item, i) => {
                        if (item === target) {
                            toggleTabContent(i);
                        }
                    }); 
                }
        });
    };
    tabs();
});