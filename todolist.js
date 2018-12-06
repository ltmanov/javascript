document.getElementsByTagName("button")[0].onclick=function(){getInput();};

function getInput(){

let inc_list=document.getElementById("incomplete-tasks");
let inc_item=document.createElement("li");

let inc_input_checkbox=document.createElement("input");
inc_input_checkbox.setAttribute("type","checkbox");
inc_input_checkbox.onclick = function () { addToCompleteLi(this) };

let inc_label=document.createElement("label");

let nu_task=document.getElementById("new-task").value;
document.getElementById("new-task").value = "";
inc_label.innerHTML=nu_task;

inc_input_checkbox.onclick = function () { addToCompleteLi(this) };
inc_input_checkbox.setAttribute("type","checkbox");

let inc_input_edit_box=document.createElement("input");
inc_input_edit_box.setAttribute("type","text");

let inc_input_editButton = document.createElement("button");
inc_input_editButton.setAttribute("class","edit");
inc_input_editButton.onclick = function () { editLi(this) };
inc_input_editButton.innerHTML="Edit";

let inc_input_deleteButton = document.createElement("button");
inc_input_deleteButton.setAttribute("class","delete");
inc_input_deleteButton.setAttribute("onclick","deleteLi(this)");
inc_input_deleteButton.innerHTML="Delete";



inc_item.appendChild(inc_input_checkbox);
inc_item.appendChild(inc_label);
inc_item.appendChild(inc_input_edit_box);
inc_item.appendChild(inc_input_editButton);
inc_item.appendChild(inc_input_deleteButton);
inc_list.appendChild(inc_item);

}


function deleteLi(item) {
  let li = item.parentNode;
  let ul = li.parentNode;
  ul.removeChild(li);
}

function editLi(item) {
  let li = item.parentNode;
  li.setAttribute("class","editMode");
  let labelText = li.childNodes[1].innerHTML;
  let textBox = li.childNodes[2];
  textBox.setAttribute("value", labelText);
  item.innerHTML = "Save";
  item.onclick = function () { saveLi(this) };
}

function addToCompleteLi(item) {
  let ul = document.getElementById("completed-tasks");
  let moveChild = item.parentNode;
  ul.appendChild(moveChild);
  item.onclick = function () { addToinc_Li(this) };
}

function addToinc_Li(item) {
  let ul = document.getElementById("incomplete-tasks");
  let moveChild = item.parentNode;
  ul.appendChild(moveChild);
  item.onclick = function () { addToCompleteLi(this) };
}

function saveLi(item) {
  let li = item.parentNode;
  li.setAttribute("class","");
  let textBox = li.childNodes[2];
  let textBoxValue = textBox.value;
  li.childNodes[1].innerHTML = textBoxValue;
  item.innerHTML = "Edit";
  item.onclick = function () { editLi(this) };
}
