document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        tittle,
        description
};

if (localStorage.getItem('tasks')== null) {
    let task = [];
    task.push(task);
    localStorage.setItem('')
    }
    getTask();
    document.getElementsById('formartTask').reset();
    e.preventDefaul();
}
function.getTask() {
