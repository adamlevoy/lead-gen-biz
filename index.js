const myself = document.getElementById('myself');
const company = document.getElementById('company');

function handleRadioInputClick(e) {
	console.log('clicked: ', e.currentTarget);
	if (e.currentTarget === myself) {
		window.location.href = './quiz.html?coachingfor=Myself';
	} else if (e.currentTarget === company) {
		window.location.href = './quiz.html?coachingfor=My+company';
	}
}

myself.addEventListener('click', handleRadioInputClick);
company.addEventListener('click', handleRadioInputClick);
