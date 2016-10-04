calcSumm = function (prices){
	var summ = 0;
	for (var i = prices.length - 1; i >= 0; i--) {
		summ += parseFloat(prices[i].innerText);
	}

	var currentSumm = document.getElementsByClassName("sumCalc");
	currentSumm[0].innerText = summ.toFixed(3);

}

var prices = document.getElementsByClassName("price");
calcSumm(prices);


