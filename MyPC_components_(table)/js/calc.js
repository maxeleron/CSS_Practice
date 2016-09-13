calcSumm = function (prices){
	var summ = 0;
	for (var i = prices.length - 1; i >= 0; i--) {
		summ += parseFloat(prices[i].innerText);
	}
	//I know that I am a wheel creator, but now I don`t have better solution)))
	summ *= 1000;
	summ = parseInt(summ);
	summ = parseFloat(summ);
	summ /= 1000;
	var currentSumm = prices = document.getElementsByClassName("sumCalc");
	currentSumm[0].innerText = summ;

}

var prices = document.getElementsByClassName("price");
calcSumm(prices);


