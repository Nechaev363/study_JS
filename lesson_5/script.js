'use strict';


let money,
    income = 'Бизнес',
    addExpenses = prompt('Перечислите возможные расходы через запятую', ''),
    deposit = confirm('Есть ли у вас депозит в банке'),
    mission = 10000000,
    period = 10;

do {
    money = +prompt('Ваш месячный доход?');
    console.log(money);
    break;
}
while (isNaN(money) || money == '' || money == null);



let showTypeof = (item) => {
    console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);





let expenses1,
    expenses2,
    expenses3;


let getExpensesMonth = () => {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов', '');
        } else if (i === 1) {
            expenses2 = prompt('Какие еще обязательные расходы у вас есть?', '');
        }

        sum += +prompt('Во сколько это обойдется?');
        console.log(sum);
        while (isNaN(sum) || sum == '' || sum == null) {
            sum += +prompt('Во сколько это обойдется?');
            console.log(sum);
        }


    }

    return sum;
};

let expensesAmount = getExpensesMonth();


let getAccumulateMonth = () => {
    return money - (expensesAmount);

};


let budgetPeriod = () => {
    return money * period;
};

let expensesPeriod = () => {
    return expensesAmount * period;
};

let incomePeriod = () => {
    return budgetPeriod() - expensesPeriod();

};

let budgetDay = () => {
    if(budgetDay() < 0) {
        alert('Что-то пошло не так');
    }
    return Math.floor(getAccumulateMonth() / 30);
};

let targetMonth = () => {
    let getTargetMonth = targetMonth();
    if(getTargetMonth < 0) {
        alert('Цель не может быть достигнута!');
    }
    return Math.ceil(mission / getAccumulateMonth());
};

console.log('Накопления за период: ' + incomePeriod());



function getStatusIncome() {

    if (budgetDay < 300) {
        return 'Низкий уровень дохода';
    } else if (budgetDay <= 800) {
        return 'Средний уровень дохода';
    } else {
        return 'Высокий уровень дохода';
    }
}

console.log('getStatusIncome(): ', getStatusIncome());