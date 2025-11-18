const taskInput=document.getElementById('taskInput')
const addBtn=document.getElementById('btn')
const taskList=document.getElementById('taskList')

//load existing task form localstorage
document.addEventListener('DOMContentLoaded',loadTasks)

addBtn.addEventListener('click',addTask);

function addTask(){
    const taskText=taskInput.value.trim()
    if(taskText==="") return alert("enter the task")

    createTask(taskText)

    saveTask(taskText)

    taskInput.value="";
}

function createTask(text){
    const li=document.createElement('li')

    const span = document.createElement('span');
    span.className = "taskText";
    span.textContent = text;

    const btn = document.createElement('button');
    btn.className = "deleteBtn";
    btn.textContent = "X";

    li.append(span, btn);

    //mark task completed
    li.addEventListener("click",(e)=>{
        if(e.target.classList.contains("deleteBtn")) return;
        li.classList.toggle("completed")
    })

    li.querySelector('.deleteBtn').addEventListener("click",()=>{
        li.remove()
        deleteTask(text)
    })

    taskList.append(li)

}


function saveTask(task){
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function loadTasks(){
    let tasks=JSON.parse(localStorage.getItem('tasks'))||[]
    tasks.forEach((task)=> {
        return createTask(task)
    });
}

function deleteTask(taskText){
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[]
    tasks=tasks.filter((t)=>t!==taskText)
    localStorage.setItem("tasks", JSON.stringify(tasks));
}