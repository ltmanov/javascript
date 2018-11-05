document.getElementsByTagName("button")[0].onclick=function(){getInput();};

function getInput(){

let inc_item=document.createElement("li");
let inc_label=document.createElement("label");

let nu_task=document.getElementById("new-task").value;
let inc_list=document.getElementById("incomplete-tasks");

let inc_input_checkbox=document.createElement("input");
inc_input_checkbox.setAttribute("type","checkbox");

let inc_input_edit_box=document.createElement("input");
inc_input_edit_box.setAttribute("type","input");
inc_input_edit_box.style.visibility = "hidden";

let inc_input_editButton = document.createElement("button");
inc_input_editButton.setAttribute("class","edit");
inc_input_editButton.setAttribute("onclick","editLi(this)");
inc_input_editButton.innerHTML="Edit";

let inc_input_deleteButton = document.createElement("button");
inc_input_deleteButton.setAttribute("class","delete");

inc_input_deleteButton.appendChild(document.createTextNode("remove"));
inc_input_deleteButton.setAttribute("onclick","deleteLi(this)");
inc_input_deleteButton.innerHTML="Delete";

inc_label.innerHTML=nu_task;

inc_item.appendChild(inc_input_checkbox);
inc_item.appendChild(inc_label);
inc_item.appendChild(inc_input_edit_box);
inc_item.appendChild(inc_input_editButton);
inc_item.appendChild(inc_input_deleteButton);
inc_list.appendChild(inc_item);

}

function editLi(item){
//alert("DONT TEST ME");
//figure out which li to change
let li = item.parentNode;
//change li class to edit
li.setAttribute("class","editMode");
let labelText = li.childNodes[1].innerHTML;
li.childNodes[1].style.visibility = "hidden";
li.childNodes[2].style.visibility = "visible";
li.childNodes[2].setAttribute("value", labelText);
}

function deleteLi(item){//item is the button
    let incomplete_ul = document.getElementById("incomplete-tasks");
    let incompleteChild = item.parentNode;//get the parent node from button and store to inc child
    incomplete_ul.removeChild(incompleteChild);
}
//input, label, input, button, buton
