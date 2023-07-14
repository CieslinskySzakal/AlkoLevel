const questions = document.querySelectorAll('.survey__question');
const userOutput = document.querySelector('.user__answer');
const inputs = document.querySelectorAll('input[type="range"]');
const btn = document.querySelector('.survey__btn');

const errorName = document.querySelector('.error__name');
const errorsQuestions = document.querySelectorAll('.error__survey');

const nameInput = document.querySelector('input[name="user_name"]');
const q1 = document.querySelector('input[name="q1"]');
const q2 = document.querySelector('input[name="q2"]');
const q3 = document.querySelector('input[name="q3"]');
const q4 = document.querySelector('input[name="q4"]');
const surveyInputs = document.querySelectorAll('.survey__question');

let questionsNumbers = [];

const modalHeading = document.querySelector('.modal__heading');
const modalText = document.querySelector('.modal__text-content');
const modal = document.querySelector('.modal');

const questionBase = {
	q0: {
		content: 'Dlaczego Manus kurwą jest?',
		answer: 'Nie jest',
		used: false,
	},
	q1: {
		content: 'Mięso?',
		answer: 'Tak',
		used: false,
	},
	q2: {
		content: 'Czy jesteś pijany?',
		answer: 'Nie',
		used: false,
	},
	q3: {
		content: 'Czy należy szanować Panią Doktor Musielak?',
		answer: 'Jak najbardziej',
		used: false,
	},
	q4: {
		content: 'Ile wzrostu ma Wlenc?',
		answer: '-5',
		used: false,
	},
	q5: {
		content: 'Czy Papież wiedział?',
		answer: 'Ale o czym?',
		used: false,
	},
};

const questionsCount = 6;

const drawNumber = limit => {
	return Math.floor(Math.random() * limit);
};

const drawQuestions = () => {
	questions.forEach(question => {
		let rand = drawNumber(questionsCount);
		if (questionBase[`q${rand}`].used === true) rand = rand > 2 ? rand / 2 : rand + 1;
		question.textContent = questionBase[`q${rand}`].content;
		questionsNumbers.push(rand);
		questionBase[`q${rand}`].used = true;
	});
};

const handleSurveyValidation = () => {
	if (nameInput.value.length === 0) {
		errorName.textContent = 'Podaj poprawne imię';
	} else {
		errorName.style.visibility = 'hidden';
	}

	surveyInputs.forEach(error => {
		console.log(error.value);
		/*if (error.value.length === 0) {
			error.textContent = 'Musisz udzieliś odpowiedzi na to pytanie';
		} else {
			error.style.visibility = 'hidden';
		}*/
	});
};

const handleResult = () => {
	let points = parseInt(q1.value) + parseInt(q2.value);
	if (q3.value === questionBase[`q${questionsNumbers[0]}`].answer) points -= 20;
	if (q4.value === questionBase[`q${questionsNumbers[1]}`].answer) points -= 20;
	if (points >= 0 && points <= 20) {
		return 1;
	} else if (points <= 40) {
		return 2;
	} else if (points <= 60) {
		return 3;
	} else if (points <= 80) {
		return 4;
	} else if (points <= 100) {
		return 5;
	} else if (points <= 120) {
		return 6;
	} else if (points <= 140) {
		return 7;
	} else if (points <= 160) {
		return 8;
	} else if (points <= 180) {
		return 9;
	} else if (points <= 190) {
		return 10;
	} else {
		return '10+';
	}
};

document.addEventListener('DOMContentLoaded', drawQuestions());

inputs.forEach(input => {
	input.addEventListener('input', event => {});
});

btn.addEventListener('click', event => {
	event.preventDefault();
	const result = handleResult();
	modalHeading.textContent = `${nameInput.value}, twój wynik to:`;
	modalText.textContent = result;
	modal.style.display = 'block';
});

modal.addEventListener('click', () => {
	modal.style.display = 'none';
});
