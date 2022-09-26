const ratings = document.querySelectorAll('.rating-btn');

const ratingClickHandler = (e) => {
	resetRatingBtns();
	setActiveRatingBtn(e);
};

for (let i = 0; i < ratings.length; i++) {
	const rating = ratings[i];
	rating.addEventListener('click', ratingClickHandler);
}

const resetRatingBtns = () => {
	for (let i = 0; i < ratings.length; i++) {
		const rating = ratings[i];
		rating.classList.remove('active');
		rating.classList.add('default');
	}
};

const setActiveRatingBtn = (e) => {
	e.target.classList.remove('default');
	e.target.classList.add('active');
};
