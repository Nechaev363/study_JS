'use strict';

let money = prompt('Ваш месячный доход?');
console.log('money: ', money);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let arr = [addExpenses];
console.log(arr);
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);
let cost = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let priceCost = prompt('Во сколько это обойдется?');
let theCost = prompt('Какие еще обязательные ежемесячные расходы у вас есть?');
let priceTheCost = prompt('Во сколько это обойдется?');

console.log(cost);
console.log(priceCost);
console.log(theCost);
console.log(priceTheCost);

let express = priceCost + priceTheCost;
let budgetMonth = express - money;
console.log('budgetMonth: ', budgetMonth);

let questionMission = prompt('Сколько ваша цель заработать?');
let mission = questionMission / budgetMonth;
console.log(Math.round(mission));



