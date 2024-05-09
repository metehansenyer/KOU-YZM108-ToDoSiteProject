document.getElementById('add-button').addEventListener("click", function(){ add_task_input(); });

document.getElementById('add-task').addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        add_task_input();
    }
});

function add_task_input() {
    const task = document.getElementById('add-task').value;

    if(task) {
        add_task(task);

        document.getElementById('add-task').value = "";
    } else {
        alert("Görev giriniz.")
    }
};

function add_task(taskDetail) {
    const list = document.getElementById('uncompleted-list');

    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const edit = document.createElement("a");
    const garbage = document.createElement("a");
    const check = document.createElement("a");

    p.textContent = taskDetail;
    li.id = list.children.length;
    li.className = "task uncompleted";
    div.className = "task-buttons";
    edit.className = "fa-solid fa-pen-to-square fa-xl edit";
    garbage.className = "fa-solid fa-trash-can fa-xl garbage";
    check.className = "fa-regular fa-square-check fa-xl check";

    edit.addEventListener("click", function(){ edit_task(p); });
    garbage.addEventListener("click", function(){ delete_untask(li.id); });
    check.addEventListener("click", function(){ check_task(p.textContent, li.id); });
    li.addEventListener("contextmenu", function(e){ e.preventDefault(); check_task(p.textContent, li.id); });
    
    div.appendChild(edit);
    div.appendChild(garbage);
    div.appendChild(check);
    li.appendChild(p);
    li.appendChild(div);
    list.appendChild(li);
}

function edit_task(p) {
    const newTask = prompt("Görevi düzenleyin:", p.textContent);
    
    if (newTask !== null) {
        p.textContent = newTask;
    } else {
        alert("Lütfen geçerli bir değer giriniz.");
    }
}

function delete_untask(id) {
    const list = document.getElementById('uncompleted-list').children;

    for (let index = 0; index < list.length; index++) {
        if(list[index].id == id) {
            list[index].remove();
        };
    }
}

function check_task(taskDetail, id) {
    const completed_list = document.getElementById('completed-list');

    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const garbage = document.createElement("a");
    const uncheck = document.createElement("a");

    p.textContent = taskDetail;
    li.id = completed_list.children.length;
    li.className = "task completed";
    div.className = "task-buttons";
    garbage.className = "fa-solid fa-trash-can fa-xl garbage";
    uncheck.className = "fa-solid fa-square-xmark fa-xl uncheck";

    garbage.addEventListener("click", function(){ delete_task(li.id); });
    uncheck.addEventListener("click", function(){ uncheck_task(p.textContent, li.id); });
    li.addEventListener("contextmenu", function(e){ e.preventDefault(); uncheck_task(p.textContent, li.id); });
    
    div.appendChild(garbage);
    div.appendChild(uncheck);
    li.appendChild(p);
    li.appendChild(div);
    completed_list.appendChild(li);
    
    delete_untask(id);
}

function delete_task(id) {
    const list = document.getElementById('completed-list').children;

    for (let index = 0; index < list.length; index++) {
        if(list[index].id == id) {
            list[index].remove();
        };
    }
}

function uncheck_task(taskDetail, id) {
    add_task(taskDetail);

    delete_task(id);
}