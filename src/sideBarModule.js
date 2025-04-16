
import allProject, {addProjectToAllProject, createProject} from "./projectModules";
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
        select.value = "Select";
        displayTaskToDOM(allTask, tasksContainer);
        arrayToSort = [...allTask];
    });

    button2.addEventListener("click", () => {
        select.value = "Select";
        displayTaskToDOM(filterTaskByComplete(allTask), tasksContainer);
        arrayToSort = [...filterTaskByComplete(allTask)];
    });

    arrayButtonProject.forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            select.value = "Select";
            console.log("in array boutton", el.textContent);
            displayTaskToDOM(filterTaskByProject(el.dataset.name), tasksContainer);
            arrayToSort = [...filterTaskByProject(el.dataset.name)];
        })
    });

    
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

const displayProjectToDOM = (ul) => {
    ul.textContent = "";
    allProject.forEach(el => {
        //if(arrayButtonProject.some(ele => ele.textContent === (new el().getPrivateTitle()))) return;
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.classList.add("nav-bar-button");
        li.classList.add("side-bar-li");
        button.textContent = new el().getPrivateTitle();
        button.dataset.name = new el().getPrivateTitle();
        ////////////////////
        button.addEventListener("click", (e) => {
            e.preventDefault();
            //select.value = "Select";
            console.log("in array boutton", el.textContent);
            displayTaskToDOM(filterTaskByProject(el.textContent), tasksContainer);
            arrayToSort = [...filterTaskByProject(el.textContent)];
        })
        ///////////////////
        li.appendChild(button);
        ul.appendChild(li);
        //if(!arrayButtonProject.some(el => el.textContent === button.textContent)) {
            //arrayButtonProject.push(button);
        //}
        console.log("in displayProjectToDOM", arrayButtonProject);
    })
    addProjectToDOM(ul)
}


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

//invox function
const displayTaskToDOM = (givenArray, container) => {
    container.textContent ="";
    givenArray.forEach(el => {
        const taskContainer = document.createElement("div");
        const task = document.createElement("div");
        const checkbox = document.createElement("input");
        const taskTitle = document.createElement("span");
        const editButton = document.createElement("buttton");
        const deleteButton = document.createElement("button");
        taskContainer.setAttribute("id", "task-container");
        editButton.setAttribute("id", "edit-button");
        deleteButton.setAttribute("id", "delete-button");
        task.classList.add("task");
        checkbox.setAttribute("type", "checkbox");
        taskTitle.innerHTML = el.title;
        editButton.innerHTML = "edit";
        deleteButton.innerHTML = "delete";
        container.appendChild(taskContainer);
        taskContainer.appendChild(task);
        task.appendChild(checkbox);
        task.appendChild(taskTitle);
        task.appendChild(editButton);
        task.appendChild(deleteButton);
    });
}

export default SideBar;