//AddTask Button EventListener.
document.getElementById('add-button').addEventListener("click", function(){ add_task_input(); });

//AddTask Input Enter Key EventListener.
document.getElementById('add-task').addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        add_task_input();
    }
});

//Click EventListener for Uncompleted ul - (uncompleted -> completed).
document.getElementById('uncompleted-list').addEventListener("click", function (e) {
    if (e.target.classList.length == 4) { //If the ul child clicked is button like edit/remove/check it will not react.
        return;
    } else if (e.target.offsetParent.className == "task uncompleted") { //If the ul child clicked is tag p it will use the p's parent tag.
        check_task(e.target.textContent, e.target.offsetParent.id);
    } else if (e.target.className == "task uncompleted") { //If the ul child clicked is li it will use that.
        check_task(e.target.firstChild.textContent, e.target.id);
    }
});

//Click EventListener for Completed ul - (completed -> uncompleted).
document.getElementById('completed-list').addEventListener("click", function (e) {
    if (e.target.classList.length == 4) { //If the ul child clicked is button like edit/remove/check it will not react.
        return;
    } else if (e.target.offsetParent.className == "task completed") { //If the ul child clicked is tag p it will use the p's parent tag.
        uncheck_task(e.target.textContent, e.target.offsetParent.id);
    } else if (e.target.className == "task completed") { //If the ul child clicked is li it will use that.
        uncheck_task(e.target.firstChild.textContent, e.target.id);
    }
});

//Right-Click EventListener for Uncompleted ul - (li item will remove).
document.getElementById('uncompleted-list').addEventListener("contextmenu", function (e) {
    e.preventDefault(); //Disable the default right-click menu.

    if (e.target.classList.length == 4) { //If the ul child clicked is button like edit/remove/check it will use the button's parent's parent tag.
        delete_untask(e.target.offsetParent.offsetParent.id);
    } else if (e.target.offsetParent.className == "task uncompleted") { //If the ul child clicked is tag p it will use the p's parent tag.
        delete_untask(e.target.offsetParent.id);
    } else if (e.target.className == "task uncompleted") { //If the ul child clicked is li it will use that.
        delete_untask(e.target.id);
    }
});

//Right-Click EventListener for Completed ul - (li item will remove).
document.getElementById('completed-list').addEventListener("contextmenu", function (e) {
    e.preventDefault(); //Disable the default right-click menu.

    if (e.target.classList.length == 4) { //If the ul child clicked is button like edit/remove/check it will use the button's parent's parent tag.
        delete_task(e.target.offsetParent.offsetParent.id);
    } else if (e.target.offsetParent.className == "task completed") { //If the ul child clicked is tag p it will use the p's parent tag.
        delete_task(e.target.offsetParent.id);
    } else if (e.target.className == "task completed") { //If the ul child clicked is li it will use that.
        delete_task(e.target.id);
    }
});

//AddTask Function for Get Value from Input Field.
function add_task_input() {
    const task = document.getElementById('add-task').value;

    if(task) {
        add_task(task);

        document.getElementById('add-task').value = ""; //Clean input field.
    } else {
        alert("Görev giriniz.")
    }
};

//AddTask Function for Create li and Append to Uncompleted ul.
function add_task(taskDetail) {
    const list = document.getElementById('uncompleted-list');

    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const edit = document.createElement("a");
    const garbage = document.createElement("a");
    const check = document.createElement("a");

    p.textContent = taskDetail;

    //When setting the ID for a correct removal function, set the ID of the item to be added to the current list length.
    //This is because the specified ID will not currently be in the list index and will be distinctive.
    li.id = list.children.length;

    li.className = "task uncompleted";
    div.className = "task-buttons";
    edit.className = "fa-solid fa-pen-to-square fa-xl edit";
    garbage.className = "fa-solid fa-trash-can fa-xl garbage";
    check.className = "fa-regular fa-square-check fa-xl check";

    //EventListeners for Task Buttons.
    edit.addEventListener("click", function(){ edit_task(p); });
    garbage.addEventListener("click", function(){ delete_untask(li.id); });
    check.addEventListener("click", function(){ check_task(p.textContent, li.id); });
    
    div.appendChild(edit);
    div.appendChild(garbage);
    div.appendChild(check);
    li.appendChild(p);
    li.appendChild(div);
    list.insertBefore(li, list.firstChild);
}

//EditTask Function for Uncompleted Task Items.
function edit_task(p) {
    const newTask = prompt("Görevi düzenleyin:", p.textContent);
    
    if (newTask !== null) {
        p.textContent = newTask;
    } else {
        alert("Lütfen geçerli bir değer giriniz.");
    }
}

//Special Remove Function for Uncompleted Task Items from Uncompleted ul.
function delete_untask(id) {
    const list = document.getElementById('uncompleted-list').children;

    for (let index = 0; index < list.length; index++) {
        if(list[index].id == id) {
            list[index].remove();
        };
    }
}

//Function for Changing Task Items State. It simply deletes the one in one and recreates it in the other.
function check_task(taskDetail, id) {
    const completed_list = document.getElementById('completed-list');

    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const garbage = document.createElement("a");
    const uncheck = document.createElement("a");

    p.textContent = taskDetail;

    //When setting the ID for a correct removal function, set the ID of the item to be added to the current list length.
    //This is because the specified ID will not currently be in the list index and will be distinctive.
    li.id = completed_list.children.length;

    li.className = "task completed";
    div.className = "task-buttons";
    garbage.className = "fa-solid fa-trash-can fa-xl garbage";
    uncheck.className = "fa-solid fa-square-xmark fa-xl uncheck";

    //EventListeners for Task Buttons.
    garbage.addEventListener("click", function(){ delete_task(li.id); });
    uncheck.addEventListener("click", function(){ uncheck_task(p.textContent, li.id); });
    
    div.appendChild(garbage);
    div.appendChild(uncheck);
    li.appendChild(p);
    li.appendChild(div);
    completed_list.insertBefore(li, completed_list.firstChild);
    
    //Remove other one.
    delete_untask(id);
}

//Special Remove Function for Completed Task Items from Completed ul.
function delete_task(id) {
    const list = document.getElementById('completed-list').children;

    for (let index = 0; index < list.length; index++) {
        if(list[index].id == id) {
            list[index].remove();
        };
    }
}

//Like check_task Function but Reversed. It acts as if it's removing a task and adding a new one.
function uncheck_task(taskDetail, id) {
    add_task(taskDetail);

    delete_task(id);
}