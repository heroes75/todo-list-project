
//import { el } from "date-fns/locale";
import allProject, {addProjectToAllProject, createProject, deleteProject} from "./projectModules";
import allTask, {createTask, addTaskToAllTask, sortTaskByTittle, sortTaskByDuDate, sortTaskByPriority, filterTaskByProject, filterTaskByComplete, deleteTask} from "./taskModule.js";


//export const inputTest = document.createElement("input");
//inputTest.value = 2
export let arrayInbox = [];
export const button1 = document.createElement("button");
export const button2 = document.createElement("button");
export const button3 = document.createElement("button");
export let arrayButtonProject = [];
const tasksContainer = document.createElement("div");
let arrayToSort = [];


export const SideBar = (() => {
    const sideBar = document.createElement("div");
    const ul1 = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const ul2 = document.createElement("ul")

    //inbox declaration start
    //let arrayToSort = [];
    const inbox = document.createElement("div");
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
    button2.textContent = "Complete TASK";
    button3.textContent = "PROJECT";
    //button1.addEventListener("click", () => {
    //    displayTaskToDOM([...allTask])
    //})
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
    content.setAttribute("id", "content");
    inbox.textContent = "INBOX";
    option1.textContent = "Select";
    option2.textContent = "Sort by Title";
    option3.textContent = "Sort by Due Date";
    option4.textContent = "Sort by Priority";
    box.appendChild(inbox);
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
        switch (e.target.value) {
            case "Sort by Title":
                displayTaskToDOM(sortTaskByTittle(arrayToSort), tasksContainer);
                break;
            case "Sort by Due Date":
                displayTaskToDOM(sortTaskByDuDate(arrayToSort), tasksContainer);
                break;
            case "Sort by Priority":
                displayTaskToDOM(sortTaskByPriority(arrayToSort), tasksContainer);
                break;
            default:
                displayTaskToDOM(arrayToSort, tasksContainer);
                break;
        }
    });

    
    displayTaskToDOM(arrayInbox, tasksContainer);

    //inbox instruction end

    
})

const displayProjectToDOM = ((ul) => {
    ul.textContent = "";
    let newEvent = new Event("click");
    allProject.forEach(el => {
        //if(arrayButtonProject.some(ele => ele.textContent === (new el().getPrivateTitle()))) return;
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
            button3.dispatchEvent(newEvent);
            button1.dispatchEvent(newEvent)
        })
        li.appendChild(button);
        li.appendChild(btnDeleteProject);
        ul.appendChild(li);
        console.log("in displayProjectToDOM", arrayButtonProject);
    })
    addProjectToDOM(ul);
})


//const buttonAddProject = document.createElement("button");
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
    newProject.setAttribute("id", "new-project");
    label.setAttribute("id", "label");
    input.setAttribute("id", "input");
    buttonContainer.setAttribute("id", "button-container");
    cancelButton.setAttribute("id", "cancel-button");
    cancelButton.setAttribute("value", "cancel");
    confirmButton.setAttribute("id", "confirm-button");
    p.textContent = "New Project";
    buttonAddProject.textContent = "ADD PROJECT";
    span.textContent = "name";
    confirmButton.textContent = "Comfirm";
    cancelButton.textContent = "Cancel";
    buttonAddProject.addEventListener("click", e => {
        e.preventDefault();
        //inputTest.value = Math.random();
        //console.log(inputTest.value)
        dialog.showModal();
    });
    input.addEventListener("change", () => {
        confirmButton.value = input.value;
    });
    dialog.addEventListener("close", () => {
        if(confirmButton.value !== "") {
            addProjectToAllProject(createProject(confirmButton.value));
            addProjectToLocalStorage();
            displayProjectToDOM(ul)
        }
    })
    confirmButton.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.close(input.value)
    })
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
    givenArray.forEach(el => {
        let newEvent = new Event("click");
        const taskContainer = document.createElement("div");
        const task = document.createElement("div");
        const checkbox = document.createElement("input");
        const taskTitle = document.createElement("label");
        const editButton = document.createElement("buttton");
        const deleteButton = document.createElement("button");
        taskContainer.setAttribute("id", "task-container");
        editButton.setAttribute("id", "edit-button");
        deleteButton.setAttribute("id", "delete-button");
        deleteButton.dataset.name = el.id;
        task.classList.add("task");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "check-task");
        taskTitle.setAttribute("for", "check-task");
        taskTitle.innerHTML = el.complete === true ? `<s>${el.title}</s>`: el.title;
        editButton.innerHTML = "edit";
        deleteButton.innerHTML = "delete";
        container.appendChild(taskContainer);
        taskContainer.appendChild(task);
        task.appendChild(checkbox);
        task.appendChild(taskTitle);
        task.appendChild(editButton);
        task.appendChild(deleteButton);
        editButton.addEventListener("click", (e) => {
            e.preventDefault();
            reditTask(el, el.title, el.description, el.dueDate, el.priority, folderID);
            //document.getElementById(folderID).dispatchEvent(newEvent)
        });

        deleteButton.addEventListener("click", (e) => {
            deleteTask(e.target.dataset.name, allTask);
            // add task to DOM
            addTaskToLocalStorage();
            document.getElementById(folderID).dispatchEvent(newEvent);
        });
        if(el.complete === true) {
            checkbox.setAttribute("checked", true);
        }
        checkbox.addEventListener("click", (e) => {
            el.ToggleComplete();
            e.target.toggleAttribute("checked");
            document.getElementById(folderID).dispatchEvent(newEvent);
        })
    });
}

const addTAskToDOM = (nameProject) => {
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
    btnCancel.addEventListener("click", () => {
        resetValue();
        formContainer.toggleAttribute("hidden");
    })
    btnConfirm.addEventListener("click", () => {
        addTaskToAllTask(createTask(nameProject, inputTitle.value, inpuDescription.value, inputDate.value, inputPriority.value, false));
        addTaskToLocalStorage();
        displayTaskToDOM(filterTaskByProject(nameProject), tasksContainer);
        document.getElementById(nameProject).dispatchEvent(newEvent);
    })
}

const reditTask = (taskObject, title = "", description = "", date = "", priority = "", folderID) => {
    console.log(taskObject);
    console.log("priority parameter", priority);
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
    //addTaskButton.setAttribute("id", "add-task-button");
    formContainer.setAttribute("id", "form-container");
    //formContainer.setAttribute("hidden", "true");
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
    //addTaskButton.textContent = "Add Task";
    
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
    //tasksContainer.appendChild(addTaskButton);
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
    //addTaskButton.addEventListener("click", () => {
    //    formContainer.toggleAttribute("hidden")
    //})
    btnCancel.addEventListener("click", () => {
        formContainer.toggleAttribute("hidden");
    });

    btnConfirm.addEventListener("click", () => {
        taskObject.reeditTask(inputTitle.value, inpuDescription.value, inputDate.value, inputPriority.value);
        formContainer.setAttribute("hidden", "true");
        console.log(inputPriority.value)
        document.getElementById(folderID).dispatchEvent(newEvent)
    });
}

const addProjectToLocalStorage = () => {
    //let newAllProject = [...allProject];
    let newAllProject = allProject.map(el => {
        return el = el.toString();
    });
    console.log("sting newAllProject", allProject === newAllProject)
    localStorage.setItem("allProject", JSON.stringify(newAllProject))
}

const addTaskToLocalStorage = () => {
    //let newAllTask = [...allTask];
    let newAllTask = allTask.map(el => {
        console.log(el.getPrivateTitle.toString())
        console.log(el.ToggleComplete.toString())

        el.getPrivateTitle = el.getPrivateTitle.toString();
        el.reeditTask = el.reeditTask.toString();
        el.ToggleComplete = el.ToggleComplete.toString();
        return el
    });
    console.log("sting newAllTask", allTask === newAllTask)
    localStorage.setItem("allTask", JSON.stringify(newAllTask))
}
export default SideBar;