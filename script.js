const DEFAULT = '{ "messages" : [' +
'{ "name":"John" , "message":"Just trying out this new Twattr thing" },' +
'{ "name":"NoobMaster69" , "message":"LOL Noob" },' +
'{ "name":"RJ" , "message":"That moment when you ask your fav baker to surprise you and leave them with the freedom to decorate your cake but get a sloppy mess instead." },' +
'{ "name": "Julie", "message": "This is great!"} ]}';

function onLoad() {
	let defaultMessages = JSON.parse(DEFAULT).messages;
	let messageList = document.getElementById("messageList");

	for (i = 0; i < defaultMessages.length; i++) {
		let message = defaultMessages[i];
		addMessage(message);
	}
}

function newMessageObject(name, message) {
	return {name: name, message: message};
}

function addMessage(msg) {
	let name = msg["name"];
	let message = msg["message"];

	let node = document.createElement('li');

	let nameSpan = document.createElement('span');

	nameSpan.innerHTML = name;

	node.appendChild(nameSpan);

	let messageP = document.createElement('p');

	messageP.innerHTML = message;

	node.appendChild(messageP);

	messageList.appendChild(node);
}

function clearMessageForm() {
	document.getElementById("name").value = "";
	document.getElementById("messageArea").value = "";
}

function setErrorText(text) {
	document.getElementById("error").innerHTML = text;
}


function submitMessage() {
	let name = document.getElementById("name").value;
	let message = document.getElementById("messageArea").value;



	if (name.length > 0) {
		if (message.length > 0 && message.length <= 200) {

			let messageObject = newMessageObject(name, message);
			addMessage(messageObject);
			clearMessageForm();
			setErrorText("");
		}

		else
			setErrorText("Message must be between 1 and 200 characters");
	}

	else 
		setErrorText("Name cannot be left blank");
	
}

function clearMessages() {
	messageList.innerHTML = "";
}