let tasks=[];

function addTask(){

let input=document.getElementById("taskInput");

if(input.value==""){

alert("Enter Task");

return;

}

tasks.push(input.value);

displayTasks();

input.value="";

}

function displayTasks(){

let list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach(function(task,index){

list.innerHTML+=`
<li>

${task}

<button class="delete" onclick="deleteTask(${index})">

Delete

</button>

</li>

`;

});

}

function deleteTask(index){

tasks.splice(index,1);

displayTasks();

}
