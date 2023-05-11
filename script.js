let firstNum = null;
let secondNum = null;
let opCode = "";
function addDigit(num) {

	if(parseInt(document.getElementById('input').value) < 10e10){
			if (document.getElementById('input').value == 0) {
				document.getElementById('input').value = num;
			}
			else{
				document.getElementById('input').value += num;
			}
	}
}

function clear() {
	document.getElementById('input').value = 0;
}

function operation(op) {
	 firstNum = parseInt(document.getElementById('input').value);
	 secondNum = 0;
	 opCode = op;
	 clear();

}

function reset() {
	firstNum = 0;
	secondNum = 0;
	opCode = null;
	clear();

}
function result() {
	let result = 0;	
	secondNum = parseInt(document.getElementById('input').value);
	switch(opCode) {

		case'+':
			result = firstNum + secondNum;
			document.getElementById('input').value = result;
		break;
		case'-':
			result = firstNum - secondNum;
			document.getElementById('input').value = result;
		break;
		case'*':
			result = firstNum * secondNum;
			document.getElementById('input').value = result;
		break;
		case'/':
			result = firstNum / secondNum;
			document.getElementById('input').value = result;
		break;
	}
}
