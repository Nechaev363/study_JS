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





let expenses1 = prompt('Введите обязательную статью расходов', ''),
    expenses1Amount = +prompt('Во сколько это обойдется', ''),
    expenses2 = prompt('Какие еще обязательные расходы у вас есть?', ''),
    expenses2Amount = +prompt('Во сколько это обойдется', '');

    

    let expensesAmout = expenses1Amount + expenses2Amount;
    
    let getExpensesMonth = () => {
        let expensesAmout = expenses1Amount + expenses2Amount;
        return ('Возвращаю сумму всех расходов за месяц: ', expensesAmout) ;

    };
    getExpensesMonth();
    console.log('getExpensesMonth(): ', getExpensesMonth());


    let budgetMoth = (money - (expensesAmout));
    
    let getAccumulatedMonth = () => {
        let budgetMoth = (money - (expensesAmout));
        return ('Возвращаю накопления за месяц: ', budgetMoth);
    };

    getAccumulatedMonth();
    console.log('getAccumulatedMonth(): ', getAccumulatedMonth());

    
    let periodMission = Math.ceil(mission / budgetMoth);

    let getTargetMonth = () => {
        let periodMission = Math.ceil(mission / budgetMoth);
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