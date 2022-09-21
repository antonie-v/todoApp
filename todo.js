
//function to add todo items as list
function addItemFunction() {
    let li = document.createElement("li"); 
    let input = document.getElementById("todoItem").value; 
    let tn = document.createTextNode(input); 
    li.appendChild(tn);
    document.getElementById('listItems').appendChild(li);
}