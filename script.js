var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

var item = document.querySelectorAll("li");

function deleteButton(i) {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	item[i].appendChild(deleteButton);
}

function removeItem(i) {
	var selectDeleteButton = document.querySelectorAll("li > button")
	selectDeleteButton[i].addEventListener("click", function(){
	this.closest("li").remove();
	})
}

function toggleClassDone() {
		this.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
		var li = document.createElement("li");
		var deleteButtonNew = document.createElement("button");
		li.appendChild(document.createTextNode(input.value));
		deleteButtonNew.appendChild(document.createTextNode("Delete"));
		li.appendChild(deleteButtonNew)
		deleteButtonNew.addEventListener("click", function(){
			this.closest("li").remove();
		})
		li.addEventListener("click", toggleClassDone)
		ul.appendChild(li);	
		input.value = "";
		item = document.querySelectorAll("li");
}

function addListAfterClick() {
		if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


for (var i = 0; i < item.length; i++) {
	item[i].addEventListener("click", toggleClassDone);
}

for (var i = 0; i < item.length; i++) {
	deleteButton(i);
	removeItem(i);
}

