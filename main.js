var budgetMonth = +prompt("Ваш бюджет на месяц?");

var nameShop = prompt("Название вашего магазина?");

var mainList = {
  budgetMonth:0,
  nameShop:"",
  shopGoods:[],
  employers: {},
  open
}

mainList.budgetMonth = budgetMonth;
mainList.nameShop = nameShop;

var i = 3;
while(i) {
	mainList.shopGoods.push = prompt("Какой тип товаров будем продавать?");
	i--;
}

alert("Бюджет на 1 день составляет " + ((mainList.budgetMonth/30) ^ 0));