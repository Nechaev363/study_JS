'use strict';

let start = document.getElementById('start'),  // Возвращаю ссылку на элемент по его идентификатору (ID) (кнопка рассчитать)
    cancel = document.getElementById('cancel'), // Возвращаю ссылку на элемент по его идентификатору (ID) (кнопка сбросить)
    btnPlus = document.getElementsByTagName('button'), // этим методом возвращаю живую коллекцию элементов, учитывая имя тэга
    incomePlus = btnPlus[0], //задал переменную и приравнял к плюсу обязательных расходов, чтобы добавлять импуты
    expensesPlus = btnPlus[1], //задал переменную и приравнял к плюсу дополнительных расходов, чтобы добавлять импуты
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'), //возвращаю все элементы внутри класса additional_income-item
    depositCheck = document.querySelector('#deposit-check'), // возвращаю элемент с ID 
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0], // возвращаю элементы, которые являются потомками указанного корневого элемента
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'), // возвращаю элемент с класса
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items');
    
    

    start.disabled = true; //кнопка рассчитать неактивна, пока поле инпута не заполнено
    
    

let appData = {  //создал объект и пометсил переменные, которые в дальнейшем будут принимать данные, исходя из расчетов, путем создания определенных методов
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    procentDeposit: 0,
    moneyDeposit: 0,
    start: function () { // метод старт включает в себя методы, которые записывают в себя расчеты
        
        this.budget = +salaryAmount.value; // перемення, в которую записывется месячный доход
        
        this.getExpenses(); //
        this.getIncome();
        this.getExpensesMoth();
        this.getBudget();
        this.getAddExpenses();
        this.getAddIncome();
        this.rangeChange();
        this.showResult();
        this.blocked();
        
    },
    
    blocked: function () { // метод делает неактивной кнопку рассчитать при нуловом значении импута обязательный доход
        document.querySelectorAll('.data input[type=text]').forEach(function (item) { // разобрали все импуты
            item.disabled = true; // сделал их неактивными
        });
        start.style.display = 'none'; // кнопка рассчитать пропадает
        cancel.style.display = 'block'; // появляется кнопка сбросить
    },
    addExpensesBlock: function () { // прибавляет импуты аналогично дополнительным дохлдам
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length == 3) {
            expensesPlus.style.display = 'none';
        }
        cloneExpensesItem.querySelectorAll('input').forEach(function (item) {
            item.value = '';
        });
    },

    getExpenses: function () { // метод, который записывает данные Обязательные расходы
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value; //записывает наименование обязательных расходов
            let cashExpenses = item.querySelector('.expenses-amount').value; //записывает сумму обязательных расходов
            if (itemExpenses !== '' && cashExpenses !== '') { // создает условие, если и та и другая переменная не равна пустой строке
                this.expenses[itemExpenses] = cashExpenses; // тогда переменная expenses берет ключ itemExpenses и присваивает cashExpenses сумму. Получаем строку + сумму
            }
        });
    },
    showResult: function () { // метод включает в себя все расчеты 
        budgetMonthValue.value = this.budgetMonth; // значение budgetMonthValue.value присвоили budgetMonth
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMoth());
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('change', function () { // показывает цифры при передвижении бегунка
            incomePeriodValue.value = this.calcPeriod();
            
        });
        
    },
    getIncomeBlock: function () { // в этом методе добавляем импуты
        let cloneIncomeItem = incomeItem[0].cloneNode(true); // клонировали имуты
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus); // создали их рядом с плюсом 
        incomeItem = document.querySelectorAll('.income-items');// взяли все классы импутов
        if (incomeItem.length == 3) { // задали условие, если имуты равны 3
            incomePlus.style.display = 'none'; // тогда скрыть плюс 
        }
        cloneIncomeItem.querySelectorAll('input').forEach(function (item) { //сбрасыает импут на пустую строку
            item.value = '';
        });

        for (let key in appData.income) { // incomeMonth присвоили сумму значений income[key]. key это все значения в income
            appData.incomeMonth += +appData.income[key];
        }
    },
    getIncome: function () { // метод, который записывает данные дополнительные расходы,  аналогично обязательным
        incomeItem.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                this.income[itemIncome] = cashIncome;
            }
        });
    },
    getAddExpenses: function () { // перечисляте возможные расходы
        let addExpenses = additionalExpensesItem.value.split(','); // сделал так, чтобы расходы записались через запятую и
        addExpenses.forEach(function (item) {
            item = item.trim(); // без лишних пробелов
            if (item !== '') { // если не равна пустой строке
                this.addExpenses.push(item); // добалять в addExpenses эти значения
            }
        });
    },

    getAddIncome: function () {
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        });
    },
    rangeChange: function () { // метод выводит на экран числовое изменениее ползунка
        let change = document.querySelector('.period-amount'); // взяли класс period-amount
        change.textContent = periodSelect.value; // задавал или получил текстовое содержимое элемента и его потомков
    },

    getInfoDeposit: function () { // записывет данные о депозите
        this.deposit = confirm('Есть ли у вас депозит в банке?');
        if (this.deposit) {
            this.procentDeposit = +prompt('Какой годовой процент?');
            this.moneyDeposit = +prompt('Какая сумма заложена?');
        }

    },
    getExpensesMoth: function () { //записывает сумму в expensesMonth из expenses
        for (let key in this.expenses) {
            this.expensesMonth += this.expenses[key];
        }
    },
    getBudget: function () { // метод выпоняет рассчеты budgetMonth и budgetDay
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth / 30;
    },
    getTargetMoth: function () { // берет значение Цель и делит ее на месячный доход
        return targetAmount.value / this.budgetMonth;
    },
    getStatusIcome: function () { // в методе есть условия, если определенный уровень дохода соответсвует условию, тогда выдает его уровень дохода
        if (this.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (this.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (this.budgetDay > 300) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так!');
        }
     },
    calcPeriod: function () { // рассчитывает за какой период будет достигнута цель
        return this.budgetMonth * periodSelect.value;
    },
    getForStart: function () { // задает условие кнопке рассчитать 
        salaryAmount.addEventListener('input', function(){
            if(salaryAmount.value.length > 0 ) { // если длина строки больше нуля
                start.disabled = false; // тогда кнопка заработает
            } else if(salaryAmount.value.length === 0 ) { // если равна нулевому значению
                start.disabled = true;// кнока не работает
            } 
        });
    },
 reset: function () { // возвращает все имуты у устой строке и появлению кноки старт
    document.querySelectorAll('.result input[type=text]').forEach(function (item) { // перебрал все значения имутов и
        item.value = '';// присвоил пустую строку
        start.disabled = false; // включил кнопку рассчитыть
    });
        document.querySelectorAll('.data input[type=text]').forEach(function (item) {
        item.value = '';
        item.disabled = false;
    });
    start.style.display = 'block'; //появляется кнопка рассчитать
    cancel.style.display = 'none';// скрывается кнобка сбросить

    periodSelect.value = 1; //вернул ползунок в начальное значени
    appData.changePeriod(); // запустил функцию, котрая возвращает ползунок в начальное значени

},

 getForReset: function () { // при нажатии кнопки сбросить 
     cancel.addEventListener('click', function() {
         if(cancel.value.length > 0) {
             cancel.disabled = false;// делает ее активной
         }
     });
 },
 changePeriod: function(){ // метод сбрасываает ползунок
    let change = document.querySelector('.period-amount');
    change.innerHTML = periodSelect.value;
},
};
appData.getForStart();
appData.reset();
appData.getForReset();
cancel.addEventListener('click', appData.getBlockButton); // вешаем обрабочик события на cancel. Объект, который принимает уведомление, когда событие указанного типа произошло в данной случае через клик
start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.reset);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.getIncomeBlock);
periodSelect.addEventListener('change', appData.rangeChange);

// console.log('Расходы за месяц: ' + appData.expenses);


// if (appData.getExpensesMoth() > 0) {
//     console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMoth()) + ' месяца');
// } else {
//     console.log("Цель не будет достигнута");
// }





// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + ' - ' + appData[key]);

// }