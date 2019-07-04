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
        expenses2;


console.log();

let getExpensesMoth = () => {
    let sum =0, question;

    for(let i = 0; i <2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов');
        } else {
            expenses2 = prompt('Введите обязательную статью расходов');
        }
        do {
            question = prompt('Во сколько это обойдется?');
        }
        while(isNaN(question) || question === '' || question === null);

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
    return mission / getAccumulatedMonth();
};

let budgetDay = getAccumulatedMonth() / 30;

if(getAccumulatedMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil(getAccumulatedMonth()) + 'месяца');

} else {
    console.log('Цель не будет достигнута');
}
 let getStatusIcome = () => {
     if(budgetDay > 800) {
         return ('Высокий кровень дохода');
     } else if(budgetDay > 0) {
         return ('Низкий уровень дохода');
     } else {
         return ('Что-то пошло не так!');
     }
 };
 console.log(getStatusIcome());