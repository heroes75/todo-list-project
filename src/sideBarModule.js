import allProject, {addProjectToAllProject, createProject, deleteProject} from "./projectModules";
import allTask, {createTask, addTaskToAllTask, sortTaskByTittle, sortTaskByDuDate, sortTaskByPriority, filterTaskByProject, filterTaskByComplete, deleteTask} from "./taskModule.js";


export let arrayInbox = [];
export const button1 = document.createElement("button");
export const button2 = document.createElement("button");
export const button3 = document.createElement("button");
export let arrayButtonProject = [];
const tasksContainer = document.createElement("div");
let arrayToSort = [];


export const SideBar = (() => {
    let newEvent = new Event("click");
    const sideBar = document.createElement("div");
    const ul1 = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const ul2 = document.createElement("ul")

    //inbox declaration start
    //let arrayToSort = [];
    const inbox = document.createElement("div");
    const inboxText = document.createElement("p");
    const content = document.createElement("div");
    const selectContainer = document.createElement("div");
    const select = document.createElement("select");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    const option4 = document.createElement("option");
    //const tasksContainer = document.createElement("div");
    //inbox declaration end

    sideBar.setAttribute("id", "side-bar");
    ul1.setAttribute("id", "ul1");
    ul2.setAttribute("id", "ul2");
    button1.setAttribute("id", "buttton-all");
    button2.setAttribute("id", "button-complete");
    button3.setAttribute("id", "button-project");
    li1.classList.add("side-bar-li");
    li2.classList.add("side-bar-li");
    li3.classList.add("side-bar-li");
    button1.classList.add("nav-bar-button");
    button2.classList.add("nav-bar-button");
    button3.classList.add("nav-bar-button");
    button1.textContent = "ALL";
    button2.textContent = "Completed TASK";
    button3.textContent = "PROJECT";
    document.querySelector("#box").appendChild(sideBar);
    sideBar.appendChild(ul1);
    ul1.appendChild(li1);
    li1.appendChild(button1);
    ul1.appendChild(li2);
    li2.appendChild(button2);
    ul1.appendChild(li3);
    li3.appendChild(button3);
    li3.appendChild(ul2);
    displayProjectToDOM(ul2);

    //inbox instruction start
    inbox.setAttribute("id", "inbox");
    inboxText.setAttribute("id", "inbox-text");
    content.setAttribute("id", "content");
    selectContainer.setAttribute("id", "select-container");
    inboxText.textContent = "INBOX";
    option1.textContent = "Select";
    option2.textContent = "Sort by Title";
    option3.textContent = "Sort by Due Date";
    option4.textContent = "Sort by Priority";
    box.appendChild(inbox);
    inbox.appendChild(inboxText);
    inbox.appendChild(content);
    content.appendChild(selectContainer);
    selectContainer.appendChild(select);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    content.appendChild(tasksContainer);
    button1.addEventListener("click", () => {
        option1.setAttribute("selected", true);
        displayTaskToDOM(allTask, tasksContainer, button1.id);
        arrayToSort = [...allTask];
    });

    button2.addEventListener("click", () => {
        option1.setAttribute("selected", true);
        displayTaskToDOM(filterTaskByComplete(allTask), tasksContainer, button2.id);
        arrayToSort = [...filterTaskByComplete(allTask)];
        console.log(filterTaskByComplete(allTask))
    });

    button3.addEventListener("click", () => {
        displayProjectToDOM(ul2);
    })

    
    select.addEventListener("change", (e) => {
        let folderID = "";
        const setFolderID = (array) => {
            if(array.length === 0) return
            if(array.every(el => el.privateTitle === array[0].privateTitle)) {
                console.log(array);
                return folderID = array[0].privateTitle;
            }else if(array.every(el => el.complete === true)) {
                return folderID = button2.id
            }else {
                return folderID = button1.id
            }
        }
        switch (e.target.value) {
            case "Sort by Title":
                const folder1 = setFolderID(sortTaskByTittle(arrayToSort));
                displayTaskToDOM(sortTaskByTittle(arrayToSort), tasksContainer, folder1);
                //document.getElementById(folder1).dispatchEvent(newEvent);
                break;
            case "Sort by Due Date":
                const folder2 = setFolderID(sortTaskByDuDate(arrayToSort));
                displayTaskToDOM(sortTaskByDuDate(arrayToSort), tasksContainer, folder2);
                //document.getElementById(folder2).dispatchEvent(newEvent);
                break;
            case "Sort by Priority":
                const folder3 = setFolderID(sortTaskByDuDate(arrayToSort));
                displayTaskToDOM(sortTaskByPriority(arrayToSort), tasksContainer, folder3);
                //document.getElementById(folder3).dispatchEvent(newEvent);
                break;
            default:
                displayTaskToDOM(arrayToSort, tasksContainer, button1.id);
                break;
        }
    });

    
    displayTaskToDOM(allTask, tasksContainer, button1.id);
    arrayToSort = [...allTask]

    //inbox instruction end

    
})

const displayProjectToDOM = ((ul) => {
    ul.textContent = "";
    let newEvent = new Event("click");
    allProject.forEach(el => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        const btnDeleteProject = document.createElement("button");
        const privateTitle = new el().getPrivateTitle();
        button.classList.add("nav-bar-button");
        button.setAttribute("id", privateTitle);
        btnDeleteProject.setAttribute("id", "btn-delete-project");
        li.classList.add("side-bar-li");
        btnDeleteProject.textContent = "X";
        button.textContent = privateTitle;
        console.log(privateTitle);
        button.dataset.name = privateTitle;
        ////////////////////
        button.addEventListener("click", (e) => {
            e.preventDefault();
            //select.value = "Select";
            //console.log("in array boutton", e.target.textContent);
            displayTaskToDOM(filterTaskByProject(e.target.textContent), tasksContainer, button.id);
            addTAskToDOM(e.target.textContent);
            arrayToSort = [...filterTaskByProject(e.target.textContent)];
        })
        ///////////////////
        btnDeleteProject.addEventListener("click", (e) => {
            for (let i = 0; i < allTask.length; i++) {
                if(allTask[i].getPrivateTitle() === privateTitle) {
                    allTask.splice(i, 1);
                    i--;
                }
            }
            deleteProject(privateTitle);
            addProjectToLocalStorage();
            addTaskToLocalStorage();
            console.log("true allProject", allProject);
            button3.dispatchEvent(newEvent);
            button1.dispatchEvent(newEvent);
        })
        li.appendChild(button);
        li.appendChild(btnDeleteProject);
        ul.appendChild(li);
    })
    addProjectToDOM(ul);
})


const addProjectToDOM = (ul) => {
    const li = document.createElement("li");
    const dialog = document.createElement("dialog");
    const buttonAddProject = document.createElement("button");
    const form = document.createElement("form");
    const newProject = document.createElement("div");
    const p = document.createElement("p");
    const hr = document.createElement("hr");
    const label = document.createElement("label");
    const span = document.createElement("span");
    const input = document.createElement("input");
    const buttonContainer = document.createElement("div");
    const cancelButton = document.createElement("button");
    const confirmButton = document.createElement("button");
    buttonAddProject.classList.add("nav-bar-button");
    li.classList.add("side-bar-li");
    buttonAddProject.setAttribute("id", "showModal");
    form.setAttribute("method", "dialog");
    form.setAttribute("id", "form-add-project");
    newProject.setAttribute("id", "new-project");
    label.setAttribute("id", "label");
    input.setAttribute("id", "input");
    input.setAttribute("type", "text");
    //input.setAttribute("required", "required");
    buttonContainer.setAttribute("id", "button-container");
    cancelButton.setAttribute("id", "cancel-button");
    cancelButton.setAttribute("value", "cancel");
    cancelButton.setAttribute("formmethod", "dialog");
    confirmButton.setAttribute("id", "confirm-button");
    confirmButton.setAttribute("value", "");
    confirmButton.setAttribute("type", "submit");
    p.textContent = "New Project";
    buttonAddProject.textContent = "ADD PROJECT";
    span.textContent = "name:";
    confirmButton.textContent = "Comfirm";
    cancelButton.textContent = "Cancel";
    buttonAddProject.addEventListener("click", e => {
        e.preventDefault();
        dialog.showModal();
    });
    input.addEventListener("change", () => {
        confirmButton.value = input.value;
    });
    dialog.addEventListener("close", (e) => {
        if(confirmButton.value !== "") {
            addProjectToAllProject(createProject(confirmButton.value));
            addProjectToLocalStorage();
            displayProjectToDOM(ul)
        }
    });
    cancelButton.addEventListener("click", (e) => {
        input.value = "";
        dialog.close()
    })
    confirmButton.addEventListener("click", (e) => {
        if(input.value === "") {
            alert("must fill out")
        }
        dialog.close(input.value);
        e.preventDefault();
    });
    ul.appendChild(li);
    li.appendChild(buttonAddProject);
    li.appendChild(dialog);
    dialog.appendChild(form);
    form.appendChild(newProject);
    newProject.appendChild(p);
    dialog.appendChild(hr);
    form.appendChild(label);
    label.appendChild(span);
    label.appendChild(input);
    form.appendChild(buttonContainer);
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(confirmButton);

}

//inbox function
const displayTaskToDOM = (givenArray, container, folderID = "") => {
    container.textContent ="";
    container
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", "task-container");
    container.appendChild(taskContainer);
    givenArray.forEach(el => {
        let newEvent = new Event("click");
        const task = document.createElement("div");
        const checkboxContainer = document.createElement("div");
        const checkbox = document.createElement("input");
        const taskTitle = document.createElement("label");
        const buttonContainer = document.createElement("div");
        const editButton = document.createElement("buttton");
        const deleteButton = document.createElement("button");
        editButton.setAttribute("id", "edit-button");
        deleteButton.setAttribute("id", "delete-button");
        checkboxContainer.setAttribute("id", "checkbox-container");
        buttonContainer.setAttribute("id", "button-container");
        deleteButton.dataset.name = el.id;
        task.classList.add("task");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "check-task");
        taskTitle.setAttribute("id", "check-task-label");
        taskTitle.setAttribute("for", "check-task");
        taskTitle.innerHTML = el.complete === true ? `<s>${el.title}</s>`: el.title;
        editButton.innerHTML = "edit";
        deleteButton.innerHTML = "delete";
        taskContainer.appendChild(task);
        task.appendChild(checkboxContainer);
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(taskTitle);
        task.appendChild(buttonContainer);
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
        editButton.addEventListener("click", (e) => {
            e.preventDefault();
            reditTask(el, el.title, el.description, el.dueDate, el.priority, folderID);
        });

        deleteButton.addEventListener("click", (e) => {
            e.preventDefault()
            deleteTask(e.target.dataset.name, allTask);
            // add task to DOM
            console.log("folderID", folderID)
            document.getElementById(folderID).dispatchEvent(newEvent);
            addTaskToLocalStorage();
        });
        if(el.complete === true) {
            checkbox.setAttribute("checked", true);
        }
        checkbox.addEventListener("click", (e) => {
            el.ToggleComplete();
            e.target.toggleAttribute("checked");
            document.getElementById(folderID).dispatchEvent(newEvent);
            addTaskToLocalStorage()
        })
    });
}

const addTAskToDOM = (nameProject) => {
    //document.getElementById("task-container").setAttribute("inert", "");
    let newEvent = new Event("click");
    const addTaskButton = document.createElement("button");
    const formContainer = document.createElement("div");
    const form = document.createElement("form");
    const labelTitle = document.createElement("label");
    const spanTitle = document.createElement("span");
    const inputTitle = document.createElement("input");
    const labelDate = document.createElement("label");
    const spanDate = document.createElement("span");
    const inputDate = document.createElement("input");
    const labelDescription = document.createElement("label");
    const spanDescription = document.createElement("span");
    const inpuDescription = document.createElement("textarea");
    const labelPriority = document.createElement("label");
    const spanPriority = document.createElement("span");
    const inputPriority = document.createElement("select");
    const optionPriority1 = document.createElement("option");
    const optionPriority2 = document.createElement("option");
    const optionPriority3 = document.createElement("option");
    const buttonValidationContainer = document.createElement("div");
    const btnConfirm = document.createElement("button");
    const btnCancel = document.createElement("button");
    addTaskButton.setAttribute("id", "add-task-button");
    formContainer.setAttribute("id", "form-container");
    formContainer.setAttribute("hidden", "true");
    form.setAttribute("id", "form-task");
    inputDate.setAttribute("type", "datetime-local");
    inputDate.setAttribute("required", "true");
    labelDescription.setAttribute("for", "input-description");
    inpuDescription.setAttribute("id", "input-description");
    inpuDescription.setAttribute("required", "true");
    inpuDescription.setAttribute("name", "description");
    inputTitle.setAttribute("required", "true");
    inputPriority.setAttribute("required", "true");
    buttonValidationContainer.setAttribute("id", "button-validation-container");
    btnConfirm.setAttribute("id", "btn-confirm");
    btnCancel.setAttribute("id", "btn-cancel");
    labelTitle.classList.add("label-task");
    spanTitle.classList.add("span-task");
    inputTitle.classList.add("input-task");
    labelDate.classList.add("label-task");
    spanDate.classList.add("span-task");
    inputDate.classList.add("input-task");
    spanDescription.classList.add("span-task");
    labelPriority.classList.add("label-task");
    spanPriority.classList.add("span-task");
    inputPriority.classList.add("input-task");
    addTaskButton.textContent = "Add Task";
    ////default input
    
    ///default input
    spanTitle.textContent = "name";
    spanDate.textContent = "Due Date";
    spanDescription.textContent = "Description";
    spanPriority.textContent = "Priority";
    optionPriority1.textContent = "High";
    optionPriority2.textContent = "Medium";
    optionPriority3.textContent = "Low";
    btnConfirm.textContent = "Confirm";
    btnCancel.textContent = "Cancel";
    tasksContainer.appendChild(addTaskButton);
    tasksContainer.appendChild(formContainer);
    formContainer.appendChild(form);
    form.appendChild(labelTitle);
    labelTitle.appendChild(spanTitle);
    labelTitle.appendChild(inputTitle);
    form.appendChild(labelDate);
    labelDate.appendChild(spanDate);
    labelDate.appendChild(inputDate);
    form.appendChild(labelDescription);
    labelDescription.appendChild(spanDescription);
    labelDescription.appendChild(inpuDescription);
    form.appendChild(labelPriority);
    labelPriority.appendChild(spanPriority);
    labelPriority.appendChild(inputPriority);
    inputPriority.appendChild(optionPriority1);
    inputPriority.appendChild(optionPriority2);
    inputPriority.appendChild(optionPriority3);
    formContainer.appendChild(buttonValidationContainer);
    buttonValidationContainer.appendChild(btnConfirm);
    buttonValidationContainer.appendChild(btnCancel);
    addTaskButton.addEventListener("click", () => {
        formContainer.toggleAttribute("hidden")
    })
    const resetValue = () => {
        inputDate.value = "";
        inputTitle.value = "";
        inpuDescription.value = "";
        inputPriority.value = "High";
    }
    btnCancel.addEventListener("click", (e) => {
        e.preventDefault()
        resetValue();
        formContainer.toggleAttribute("hidden");
        document.getElementById("task-container").removeAttribute("inert");
    })
    btnConfirm.addEventListener("click", (e) => {
        if(inputTitle.value === "" || inputDate.value === "" || inpuDescription.value === "" || inputPriority.value === "") {
            alert("all input must fill out");
            return
        }
        addTaskToAllTask(createTask(nameProject, inputTitle.value, inpuDescription.value, inputDate.value, inputPriority.value, false));
        displayTaskToDOM(filterTaskByProject(nameProject), tasksContainer);
        document.getElementById(nameProject).dispatchEvent(newEvent);
        addTaskToLocalStorage();
        document.getElementById("task-container").removeAttribute("inert");
        e.preventDefault()
    })
}

const reditTask = (taskObject, title = "", description = "", date = "", priority = "", folderID) => {
    //document.getElementById("task-container").setAttribute("inert", "");
    let newEvent = new Event("click");
    const formContainer = document.createElement("div");
    const form = document.createElement("form");
    const labelTitle = document.createElement("label");
    const spanTitle = document.createElement("span");
    const inputTitle = document.createElement("input");
    const labelDate = document.createElement("label");
    const spanDate = document.createElement("span");
    const inputDate = document.createElement("input");
    const labelDescription = document.createElement("label");
    const spanDescription = document.createElement("span");
    const inpuDescription = document.createElement("textarea");
    const labelPriority = document.createElement("label");
    const spanPriority = document.createElement("span");
    const inputPriority = document.createElement("select");
    const optionPriority1 = document.createElement("option");
    const optionPriority2 = document.createElement("option");
    const optionPriority3 = document.createElement("option");
    const buttonValidationContainer = document.createElement("div");
    const btnConfirm = document.createElement("button");
    const btnCancel = document.createElement("button");
    formContainer.setAttribute("id", "form-container");
    form.setAttribute("id", "form-task");
    inputDate.setAttribute("type", "datetime-local");
    labelDescription.setAttribute("for", "description");
    inpuDescription.setAttribute("id", "input-description");
    inpuDescription.setAttribute("name", "description");
    buttonValidationContainer.setAttribute("id", "button-validation-container");
    btnConfirm.setAttribute("id", "btn-confirm");
    btnCancel.setAttribute("id", "btn-cancel");
    labelTitle.classList.add("label-task");
    spanTitle.classList.add("span-task");
    inputTitle.classList.add("input-task");
    labelDate.classList.add("label-task");
    spanDate.classList.add("span-task");
    inputDate.classList.add("input-task");
    spanDescription.classList.add("span-task");
    labelPriority.classList.add("label-task");
    spanPriority.classList.add("span-task");
    inputPriority.classList.add("input-task");    
    spanTitle.textContent = "name";
    spanDate.textContent = "Due Date";
    spanDescription.textContent = "Description";
    spanPriority.textContent = "Priority";
    optionPriority1.textContent = "High";
    optionPriority1.value = "High";
    optionPriority2.textContent = "Medium";
    optionPriority2.value = "Medium";
    optionPriority3.textContent = "Low";
    optionPriority3.value = "Low";
    btnConfirm.textContent = "Confirm";
    btnCancel.textContent = "Cancel";
    ////default input
    inputTitle.value = title;
    inputDate.value = date;
    inpuDescription.value = description;
    if (optionPriority1.value === priority) {
        optionPriority1.setAttribute("selected", true)
    } else if (optionPriority2.value === priority) {
        optionPriority2.setAttribute("selected", true)
    } else if (optionPriority3.value === priority) {
        optionPriority3.setAttribute("selected", true)
    }
    ////default input
    tasksContainer.appendChild(formContainer);
    formContainer.appendChild(form);
    form.appendChild(labelTitle);
    labelTitle.appendChild(spanTitle);
    labelTitle.appendChild(inputTitle);
    form.appendChild(labelDate);
    labelDate.appendChild(spanDate);
    labelDate.appendChild(inputDate);
    form.appendChild(labelDescription);
    labelDescription.appendChild(spanDescription);
    labelDescription.appendChild(inpuDescription);
    form.appendChild(labelPriority);
    labelPriority.appendChild(spanPriority);
    labelPriority.appendChild(inputPriority);
    inputPriority.appendChild(optionPriority1);
    inputPriority.appendChild(optionPriority2);
    inputPriority.appendChild(optionPriority3);
    formContainer.appendChild(buttonValidationContainer);
    buttonValidationContainer.appendChild(btnConfirm);
    buttonValidationContainer.appendChild(btnCancel);
    btnCancel.addEventListener("click", () => {
        formContainer.toggleAttribute("hidden");
        document.getElementById("task-container").removeAttribute("inert");
    });

    btnConfirm.addEventListener("click", () => {
        if(inputTitle.value === "" || inputDate.value === "" || inpuDescription.value === "" || inputPriority.value === "") {
            alert("all input must fill out");
            return
        }
        taskObject.reeditTask(inputTitle.value, inpuDescription.value, inputDate.value, inputPriority.value);
        formContainer.setAttribute("hidden", "true");
        console.log(inputPriority.value);
        document.getElementById(folderID).dispatchEvent(newEvent);
        addTaskToLocalStorage()
        document.getElementById("task-container").removeAttribute("inert");
    });
}

const addProjectToLocalStorage = () => {
    const arrayProjectName = []
    let newAllProject = allProject.map(el => {
        return el = el.toString();
    });
    console.log("string newAllProject", allProject === newAllProject);
    localStorage.setItem("allProjectInLocalStorage", JSON.stringify(newAllProject));
    allProject.forEach(el => {
        arrayProjectName.push(new el().getPrivateTitle())
        localStorage.setItem("allProjectName", JSON.stringify(allProject.map(el => new el().getPrivateTitle())))
    });
}

const addTaskToLocalStorage = () => {
    let newAllTask = allTask.map(el => el);
    console.log("sting newAllTask", allTask === newAllTask)
    localStorage.setItem("allTaskInLocalStorage", JSON.stringify(newAllTask));
}
export default SideBar;