'use strict';

let money = +prompt('Ваш месячный доход?', ''),
    income = 'Бизнес',
    addExpenses = prompt('Перечислите возможные расходы через запятую', ''),
    deposit = confim('Есть ли у вас депозит в банке'),
    mission = 1000000,
    period = 10;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

let expenses1 = prompt('Введите обязательную статью расходов', ''),
    expenses1Amount = +prompt('Во сколько это обойдется', ''),
    expenses2 = prompt('Какие еще обязательные расходы у вас есть?', ''),
    expenses2Amount = +prompt('Во сколько эьо обойдется', '');

    console.log('Период '+ period +' месяц');
    console.log(`Цель щззаработать ${mission} рублей`);
    console.log(addExpenses.toLocaleLowerCase().split(','));

    let expensesAmout = expenses1Amount + expenses2Amount;
    console.log(expensesAmout);
    let budgetMoth = (money - (expensesAmout));
    console.log('Доход за месяц: ' + budgetMoth);
    let periodMission = Math.ceil(mission / budgetMoth);

    let budgetDay = budgetMoth / 30;

    console.log('Бюджет на день: ' + Math.floor(budgetDay));
    console.log('Цель будет достигнута за ' + periodMission + 'месяца');

    if(budgetDay < 300) {
        console.log('Низкий уровень дохода');
    } else if(budgetDay <= 800) {
        console.log('Средний уровень дохода');
    } else {
        console.log('Высокий уровень дохода');
    }



