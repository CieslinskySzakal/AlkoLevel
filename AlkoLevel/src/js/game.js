const circle = document.querySelector('.game__circle');
const output = document.querySelector('.game__result');
const btn = document.querySelector('.game__btn');

let time = 0;

const randColors = () => {
	let rand = Math.floor((Math.random() * 100) % 5);
	const colorsArray = ['red', 'green', 'blue', 'orange', 'yellow'];
	return colorsArray[rand];
};

const changeColor = color => {
	circle.style.backgroundColor = color;
};

const handleGame = () => {
	let currentColor = 'black';
	let stopWatchInterval;
	let time = 0;

	const stopWatch = () => {
		stopWatchInterval = setInterval(() => {
			time += 1;
		}, 1);
	};

	let gameSpeed = setInterval(() => {
		currentColor = randColors();
		changeColor(currentColor);
		if (currentColor == 'red') {
			clearInterval(gameSpeed);
			stopWatch();
		}
	}, 1000);

	circle.addEventListener('click', () => {
		clearInterval(stopWatchInterval);
		output.textContent = currentColor == 'red' ? `Twój czas wynosi ${time} ms` : alert('Za wcześnie!');
	});
};

btn.addEventListener('click', handleGame());
