//adder that takes two number inputs. It outputs their sum after clicking the Add button.
function add() {
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	document.getElementById('result').textContent = num1 + " + " + num2 + " = " + (Number(num1)+Number(num2));
}