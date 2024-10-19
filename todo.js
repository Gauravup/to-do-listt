function addTask() {
    const taskInput = document.getElementById("to-do-box");
    const taskList = document.getElementById('taskList');

    c = flag=0


    if (taskInput.value.trim() === '') {
        alert('Please Enter Your Task.');
        return;
    }
       

    const li = document.createElement('li');
    li.textContent = taskInput.value;
    c++
    console.log(c)

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = '';
}