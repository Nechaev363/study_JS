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
            if (timer.hours < 10) {
                timer.hours = '0' + timer.hours;
            }
            if (timer.minutes < 10) {
                timer.minutes = '0' + timer.minutes;
            }
            if (timer.seconds < 10) {
                timer.seconds = '0' + timer.seconds;
            }
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

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


            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            } else {
                menu.style.transform = `translate(-100%)`;
            }
        };
        main.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.menu');
            if (!target) {
                menu.style.transform = `translate(-100%)`;
            } else {
                menu.style.transform = `translate(0)`;
            }
        });


        menu.addEventListener('click', (el) => {
            let target = el.target;
            if (target === closeBtn) {
                handLerMenu();
            }

            for (let i = 0; i < a.length; i++) {
                target = target.closest('li');
                if (target === menuItems[i]) {
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
            if (!target) {
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

    // slider

    const slider = () => {
        const portfolioContent = document.querySelector('.portfolio-content');
        const slide = document.querySelectorAll('.portfolio-item');
        const portfolioBtn = document.querySelectorAll('.portfolio-btn');

        const portfolioDots = document.querySelector('.portfolio-dots');



        for (let i = 0; i < slide.length; i++) {
            const li = document.createElement('li');
            li.classList.add('dot');
            portfolioDots.appendChild(li);

        }

        const dot = document.querySelectorAll('.dot');



        let currentsSlide = 0;
        let interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);

        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentsSlide, 'portfolio-item-active');
            prevSlide(dot, currentsSlide, 'dot-active');
            currentsSlide++;
            if (currentsSlide >= slide.length) {
                currentsSlide = 0;
            }
            nextSlide(slide, currentsSlide, 'portfolio-item-active');
            nextSlide(dot, currentsSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        portfolioContent.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentsSlide, 'portfolio-item-active');
            prevSlide(dot, currentsSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentsSlide++;
            } else if (target.matches('#arrow-left')) {
                currentsSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentsSlide = index;
                    }
                });
            }
            if (currentsSlide >= slide.length) {
                currentsSlide = 0;
            }
            if (currentsSlide < 0) {
                currentsSlide = slide.length - 1;
            }
            nextSlide(slide, currentsSlide, 'portfolio-item-active');
            nextSlide(dot, currentsSlide, 'dot-active');
        });

        portfolioContent.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        portfolioContent.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1000);


    };

    slider();
    let img = document.querySelectorAll('.command__photo').forEach((elem) => {
        let save = elem.getAttribute('src');

        elem.addEventListener('mouseenter', (event) => {
            event.target.src = event.target.dataset.img;
        });
        elem.addEventListener('mouseout', (event) => {
            event.target.src = save;
        });

        


    });


    // calculator

    const input = document.querySelectorAll('.calc-item').forEach((e) => {

    e.addEventListener('input', (item) => {
        item.target.value = item.target.value.replace(/[^0-9]e\+\./g, '');
    });

    });

    const calc = (price = 100) => {

        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcCount = document.querySelector('.calc-count');
        const calcDay = document.querySelector('.calc-day');
        const totalValue = document.getElementById('total');
        

        const countSum = () => {
            let total = 0;
            let countValue = 1;
            let dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value;
            const squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }


            totalValue.textContent = total;


        };


        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });

    };

    calc();

    //send-ajax-form

    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так';
        const loadMessage = 'Загрузка';
        const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const form = document.getElementById('form1');

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'multipart/form-data');
            const formData = new FormData(form);
            request.send(formData);

        });

    };

    sendForm();


});