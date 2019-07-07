'use strict';

let money,
    start = () => {
        do {
            money = +prompt('Ваш месячный доход?');
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
    procentDeposit: 0,
    moneyDeposit: 0,
    mission: 1000000,
    period: 10,
    asking: function () {

        for (let i = 0; i < 1; i++) {
            if (confirm('Есть ли у вас дополнительный заработок?')) {

                let itemIncome = prompt('Какой у вас есть дополнительный заработок?');
                itemIncome = itemIncome.toUpperCase(0).replace(' ', ',');
                let cashIncome;
                
                cashIncome = +prompt('Сколько в месяц зарабатываете на этом?');
                appData.income[itemIncome] = cashIncome;
                
                while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null){
                    console.log('Что-то пошло не так!');
                    cashIncome++;
                }
                appData.income[itemIncome] = cashIncome;
            }
        }
        if (confirm('Есть ли у вас возможные расходы?')) {
            let addExpenses = prompt('Перечислите через запятую возможные расходы');
            appData.addExpenses = addExpenses.toUpperCase(0).split(',');
            

            for (let i = 0; i < 1; i++) {
                if (confirm('Есть ли у вас обязательная статья расходов?')) {
                    let sum = prompt('Введите обязательную статью расходов');
                    sum = sum.toUpperCase(0).replace(' ', ',');
                    let cashExpenses;
                    cashExpenses = +prompt('Во сколько это обойдется?');
                    while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null){
                        console.log('Что-то пошло не так!');
                        cashExpenses++;
                    }

                    appData.expenses[sum] = cashExpenses;
                }
            }
        }

    },



    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMoth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }

    },


    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMoth: function () {
        return appData.mission / appData.budgetMonth;
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

    getInfoDeposit: function () {
        for (let i = 0; i < 1; i++)  {
        if (appData.deposit = confirm('Есть ли у вас депозит в банке?')) {
            
                let procentForDeposit = appData.procentDeposit,
                    moneyForDeposit = appData.moneyDeposit;
                
                    procentForDeposit = +prompt('Какой годовой процент?');
                    moneyForDeposit = +prompt('Какая сумма заложена?');
                while (isNaN(procentForDeposit, moneyForDeposit) || procentForDeposit, moneyForDeposit === '' || procentForDeposit, moneyForDeposit === null) {
                    console.log('Что-то пошло не так!');
                    procentForDeposit++;
                    moneyForDeposit++;
                }
            }
        }
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
    }

};
appData.getInfoDeposit();
appData.calcSaveMoney();
appData.asking();
appData.getExpensesMoth();
appData.getBudget();
appData.getTargetMoth();
appData.getStatusIcome();
console.log(appData);

console.log('Расходы за месяц: ' + appData.expenses);


if (appData.getExpensesMoth() > 0) {
    console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMoth()) + ' месяца');
} else {
    console.log("Цель не будет достигнута");
}

console.log(appData.getStatusIcome());




for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ' - ' + appData[key]);

}