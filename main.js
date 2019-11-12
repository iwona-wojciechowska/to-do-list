const toDolist = [];
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task'); 
const formInput = document.querySelector('form input');
const searchInput = document.querySelector('div.search input');
const liElements = document.querySelectorAll('li');
const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDolist.splice(index, 1)
    taskNumber.textContent = listItems.length;
    renderList();
}

const addTask = (e) => {
    e.preventDefault()
    const titleTask = formInput.value;
    if(titleTask === "") return; 
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Usuń</button>";
    toDolist.push(task)
    renderList()
 

    ul.appendChild(task);
    formInput.value = "";
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);

}
const renderList = () => {
    ul.textContent = "";
    toDolist.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key; 
        ul.appendChild(toDoElement);
    })
}

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase()
    //let tasks = toDolist; 
    let tasks = toDolist.filter(li => li.textContent.toLowerCase().includes(searchText))
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li))
    taskNumber.textContent = listItems.length; 
}


form.addEventListener('submit', addTask)
searchInput.addEventListener('input', searchTask)