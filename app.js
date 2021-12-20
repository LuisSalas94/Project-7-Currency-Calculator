const currencyOne = document.querySelector("#currency-one");
const amountOne = document.querySelector("#amount-one");
const currencyTwo = document.querySelector("#currency-two");
const amountTwo = document.querySelector("#amount-two");
const rateEL = document.querySelector("#rate");
const swap = document.querySelector("#swap");

currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
	const temp = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = temp;
	calculate();
});

function calculate() {
	const currency_one = currencyOne.value;
	const currency_two = currencyTwo.value;

	fetch(
		`https://v6.exchangerate-api.com/v6/347cc369a8c2c9a6ad121ec2/latest/${currency_one}`
	)
		.then((res) => res.json())
		.then((data) => {
			const rate = data.conversion_rates[currency_two];
			rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
			amountTwo.value = (amountOne.value * rate).toFixed(2);
		});
}

calculate();
