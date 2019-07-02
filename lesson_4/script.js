'use strict';


let money = +prompt('Ваш месячный доход?', ''),
    income = 'Бизнес',
    addExpenses = prompt('Перечислите возможные расходы через запятую', ''),
    deposit = confirm('Есть ли у вас депозит в банке'),
    mission = 1000000,
    period = 10;

let showTypeof = (item) => {
    console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);



console.log(income.length);

let expenses1 = prompt('Введите обязательную статью расходов', ''),
    expenses1Amount = +prompt('Во сколько это обойдется', ''),
    expenses2 = prompt('Какие еще обязательные расходы у вас есть?', ''),
    expenses2Amount = +prompt('Во сколько это обойдется', '');

    console.log('Период '+ period +' месяц');
    console.log(`Цель щззаработать ${mission} рублей`);
    console.log(addExpenses.toLocaleLowerCase().split(','));

    let expensesAmout = expenses1Amount + expenses2Amount;
    console.log(expensesAmout);
    let getExpensesMonth = () => {
        return ('Возвращаю сумму всех расходов за месяц: ', expensesAmout) ;

    };
    getExpensesMonth();
    console.log('getExpensesMonth(): ', getExpensesMonth());


    let budgetMoth = (money - (expensesAmout));
    
    let getAccumulatedMonth = () => {
        return ('Возвращаю накопления за месяц: ', budgetMoth);
    };

    getAccumulatedMonth();
    console.log('getAccumulatedMonth(): ', getAccumulatedMonth());

    console.log('Доход за месяц: ' + budgetMoth);
    let periodMission = Math.ceil(mission / budgetMoth);

    let getTargetMonth = () => {
        return ('Возвращаю результат месячного накопления: ', periodMission);

    };
    getTargetMonth();
    console.log('getTargetMonth(): ', getTargetMonth());

    let budgetDay = budgetMoth / 30;

    console.log('Бюджет на день: ' + Math.floor(budgetDay));
    console.log('Цель будет достигнута за ' + periodMission + ' месяцев');

    function getStatusIncome() {

    if(budgetDay < 300) {
        return 'Низкий уровень дохода';
    } else if(budgetDay <= 800) {
        return 'Средний уровень дохода';
    } else {
        return 'Высокий уровень дохода';
    }
}

console.log('getStatusIncome(): ', getStatusIncome());



