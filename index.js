const ratings = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelectorAll('.submit-btn');

const ratingClickHandler = (e) => {
	resetBtns();
	setActiveBtn(e);
};

for (let i = 0; i < ratings.length; i++) {
	const rating = ratings[i];
	rating.addEventListener('click', ratingClickHandler);
}

const resetBtns = () => {
	for (let i = 0; i < ratings.length; i++) {
		const rating = ratings[i];
		rating.classList.remove('active');
		rating.classList.add('default');
	}
};

const setActiveBtn = (e) => {
	e.target.classList.remove('default');
	e.target.classList.add('active');
};

const submitClickHandler = () => {
	let activeRatingBtn = document.getElementsByClassName('active');
	let submittedRatingValue = activeRatingBtn[0].innerHTML;
	let submittedRatingDisplay = document.getElementById('submitted-rating');
	submittedRatingDisplay.textContent = submittedRatingValue;
};

submitBtn[0].addEventListener('click', submitClickHandler);
