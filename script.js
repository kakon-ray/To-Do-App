let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');



//এই ফাংশন টি নতুন লিস্ট তৈরি করে। আমরা যে নিউ টাস্ক এড করছি সেই টাস্ক টি এই ফান্সন টি লিস্ট আকারে যুক্ত করে। 

let creatTask = function(task){
    let listItem = document.createElement('li');
    let cehkBox = document.createElement('input');
    let lebel = document.createElement('label');

    lebel.innerText = task;
    cehkBox.type = 'checkbox';

    listItem.appendChild(cehkBox);
    listItem.appendChild(lebel);

    return listItem;

    
}

let addTask = function(event){
    event.preventDefault();
    let listItem = creatTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    bindIncompleteItems(listItem,compleateTask);

    
}

let compleateTask = function(event){
    let listItem = this.parentNode;
    let deletBtn = document.createElement('button');
    deletBtn.innerText = 'Delete';
    deletBtn.className = 'delete';
    listItem.appendChild(deletBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindcompleteItems(listItem,deleteTask);
     
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

   bindIncompleteItems = function(taskItem,cehkBoxClick){
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = cehkBoxClick;
    
}

bindcompleteItems = function(taskItem,deletebtnclick){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deletebtnclick
      
  }

  for(let i=0;i<todoUl.children.length;i++){
    bindIncompleteItems(todoUl.children[i],compleateTask);
  }

  for(let i=0;i<completeUl.children.length;i++){
    bindcompleteItems(completeUl.children[i],deleteTask);
  }

  form.addEventListener('submit',addTask);
  