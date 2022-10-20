function printMessage(msg, obj){
	let div = document.createElement('div');
	div.innerHTML = msg;

    document.getElementById(obj).appendChild(div);
}

function clearMessages(obj){
	document.getElementById(obj).innerHTML = '';

}
