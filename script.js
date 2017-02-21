const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const max = 16; // max shadow 100px;

function shadow(e) {
	const {
		offsetWidth: width,
		offsetHeight: height
	} = hero;
	let {
		offsetX: x,
		offsetY: y
	} = e;

	// prevent offset reseting when moving mouse over the child element
	if (this !== e.target) {
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}

	// get a number from -8 to 8 (since max is 16) to represent x and y offset for text-shadow
	const xMax = Math.round((x / width * max) - (max / 2));
	const yMax = Math.round((y / height * max) - (max / 2));

	text.style.textShadow = `${xMax}px ${yMax}px 1px rgba(0,0,0,.3)`;
}

hero.addEventListener('mousemove', shadow);