'use strict';

let money,
    start = () => {
        do {
            money = prompt('Ваш месячный доход?');
        }
        while (isNaN(money) || money === '' || money === null);
    };

start();


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1000000,
    period: 10,
    asking: function asking() {
        let addExpenses = prompt('Перечислите через запятую возможные расходы');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
        let sum = 0;
        for (let i = 0; i < 2; i++) {
          let sum = prompt('Введите обязательную статью расходов');
            appData.expenses[sum] = +prompt('Во сколько это обойдется?');
        }
        
        if (!isNaN(sum) || sum !== '' || sum !== null) {
            
        } else {
            console.log(' Что-то пошло не так!');
        }
        sum += +appData.expenses;
    
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMoth: function getExpensesMoth() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
         
    },
    

    getBudget: function getBudgeth() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },
    getTargetMoth: function getTargetMoth() {
        return appData.mission / appData.expenses;
    },
    getStatusIcome: function getStatusIcome() {
        if (appData.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так!');
        }
    },


};

appData.asking();
appData.getBudget();
appData.getTargetMoth();
appData.getStatusIcome();
console.log(appData);
for (let key in appData) {
    console.log("Наша программа включает в себя данные: ", +appData[key]);
}


console.log('Расходы за месяц: ' + appData.expenses);



console.log('appData.expensesMonth: ', appData.expensesMonth);



console.log(appData.getStatusIcome);