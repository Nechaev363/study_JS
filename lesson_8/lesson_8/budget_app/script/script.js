'use strict';
let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value'),
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-amount'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items');


let appData = {
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
    start: function () {
        if(salaryAmount.value === '') {
            alert('Ошибка, поле "Месячный доход" должно быть запонено!')
            return;
        }
        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMoth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
     
    },
    showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMoth());
        incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function () {
       
        
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length == 3) {
            expensesPlus.style.display = 'none';
        }
    },

    getExpenses: function () {
        expensesItems.forEach(function (item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },

    getIncome: function () {
        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome = prompt('Какой у вас есть дополнительный заработок?');
            let cashIncome = +prompt('Сколько в месяц зарабатываете на этом?');
            appData.income[itemIncome] = cashIncome;
    }
    for (let key in appData.income) {
        appData.incomeMonth += +appData.income[key];
    }

},
    getAddExpenses: function () {
        let addExpenses = additionalIncomeItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function () {
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },

    getInfoDeposit: function () {
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if(appData.deposit) { 
                appData.procentDeposit = +prompt('Какой годовой процент?');
                appData.moneyDeposit = +prompt('Какая сумма заложена?');
            for (let i = 0; i < 2; i++) {
                appData.procentDeposit = +prompt('Какой годовой процент?');
                appData.moneyDeposit = +prompt('Какая сумма заложена?');
                if (isNaN(appData.procentDeposit, appData.moneyDeposit) ||  appData.procentDeposit, appData.moneyDeposit === '' || appData.procentDeposit, appData.moneyDeposit === null) { 
                    i -= 1;
                    console.log('Что-то пошло не так!');
                
                }
            }
        }

    },
    getExpensesMoth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }

    },


    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },
    getTargetMoth: function () {
        return targetAmount.value / appData.budgetMonth;
    },
    getStatusIcome: function () {
        if (appData.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay > 300) {
            return ('Низкий уровень дохода')
        } else {
            return ('Что-то пошло не так!');
        }
    },

   
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    }
    
};


start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);



// console.log('Расходы за месяц: ' + appData.expenses);


// if (appData.getExpensesMoth() > 0) {
//     console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMoth()) + ' месяца');
// } else {
//     console.log("Цель не будет достигнута");
// }





// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + ' - ' + appData[key]);

// }