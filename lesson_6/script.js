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
    asking: () => {
        let addExpenses = prompt('Перечислите через запятую возможные расходы');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMoth: {},
    getAccumulatedMonth: {},
    getTargetMoth: {},
    getStatusIcome: {},


};


let expenses1,
    expenses2;


console.log();
let getExpensesMoth = () => {
    let sum = 0,
        question;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов');
        } else {
            expenses2 = prompt('Введите обязательную статью расходов');
        }
        do {
            question = prompt('Во сколько это обойдется?');
        }
        while (isNaN(question) || question === '' || question === null);

        sum += +question;
    }
    return sum;
};

let expensesMoth = getExpensesMoth();

console.log('Расходы за месяц: ' + expensesMoth);
let getAccumulatedMonth = () => {
    return money - expensesMoth;
};
let getTargetMoth = () => {
    return appData.mission / getAccumulatedMonth();
};

let budgetDay = getAccumulatedMonth() / 30;

if (getAccumulatedMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil(getAccumulatedMonth()) + ' месяца');

} else {
    console.log('Цель не будет достигнута');
}
let getStatusIcome = () => {
    if (budgetDay > 800) {
        return ('Высокий уровень дохода');
    } else if (budgetDay > 0) {
        return ('Низкий уровень дохода');
    } else {
        return ('Что-то пошло не так!');
    }
};
console.log(getStatusIcome());