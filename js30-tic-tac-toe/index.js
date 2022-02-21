const gameFild = document.querySelector('.game-fild');
let result = '';
const menuText = document.querySelector('.menu-text');
const menuModal = document.querySelector('.menu-modal');
const menuInner = document.querySelector('.menu-inner');
const menuBtn = document.querySelector('.menu-btn');
let step = 0;
let move = 0;


gameFild.addEventListener('click', e => {
	if(e.target.className = 'game-box'){
		move % 2 === 0 ? e.target.innerHTML='X' : e.target.innerHTML='0';
		move++;
		step++;
		checkWin();
	}
})

const checkWin = () => {
	const gameBoxes = document.getElementsByClassName('game-box');
	const arr = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3 ,6],
		[1, 4, 7],
		[0, 4, 8],
		[2, 5, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < arr.length; i++){
		if(gameBoxes[arr[i][0]].innerHTML == 'X' && gameBoxes[arr[i][1]].innerHTML == 'X' && gameBoxes[arr[i][2]].innerHTML == 'X' ){
			result = 'X';			
			step++;
			prepareResult(result, step);
			const prevCount = localStorage.getItem('win-X') || 0;
			const newCount = Number(prevCount) + 1;			
			localStorage.setItem('win-X', newCount);
			document.querySelector('.winner-x-result').innerHTML = localStorage.getItem('win-X') || 0;

			
		} else if (gameBoxes[arr[i][0]].innerHTML == '0' && gameBoxes[arr[i][1]].innerHTML == '0' && gameBoxes[arr[i][2]].innerHTML == '0'){
			result = '0';
			step++;
			prepareResult(result, step);
			const prevCount = localStorage.getItem('win-0') || 0;
			localStorage.setItem('win-0', Number(prevCount) + 1);
			document.querySelector('.winner-0-result').innerHTML = localStorage.getItem('win-0') || 0;
		} else if (step == 9 ){
		    result = 'draw';
			step++;
			prepareResultDraw(result, step);
			const prevCount = localStorage.getItem('no-winner') || 0;
			localStorage.setItem('no-winner', Number(prevCount) + 1);
			document.querySelector('.no-winner-result').innerHTML = localStorage.getItem('no-winner') || 0;
		}
		
	}	

}

document.querySelector('.winner-x-result').innerHTML = localStorage.getItem('win-X') || 0;
document.querySelector('.winner-0-result').innerHTML = localStorage.getItem('win-0') || 0;
document.querySelector('.no-winner-result').innerHTML = localStorage.getItem('no-winner') || 0;


const prepareResult = (winner, step) => {
	menuText.innerHTML = `Team win ${winner} ! Number of steps - ${step-1}`;
	menuModal.style.display = 'block';

}
const prepareResultDraw = (draw,step) => {
	menuText.innerHTML = `${draw} ! Number of steps - ${step-1}`;
	menuModal.style.display = 'block';

}

const closeModule = () => {
	menuModal.style.display = 'none';
	location.reload();
}

const music = () => {
	document.querySelector('.music').play();
}


menuInner.addEventListener('click', closeModule);
menuBtn.addEventListener('click', closeModule);
document.querySelectorAll('.game-box').forEach(element => element.addEventListener('click', music));