import allTask, {createTask, addTaskToAllTask, sortTaskByTittle, sortTaskByDuDate, sortTaskByPriority, filterTaskByProject, filterTaskByComplete, deleteTask} from "./taskModule.js";
import { arrayInbox } from "./sideBarModule.js";
import sideBar, {button1, button2, button3, arrayButtonProject} from "./sideBarModule.js";

const Inbox = () => {
    let arrayToSort = [];
    const inbox = document.createElement("div");
    const content = document.createElement("div");
    const selectContainer = document.createElement("div");
    const select = document.createElement("select");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    const option4 = document.createElement("option");
    const tasksContainer = document.createElement("div");
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
            select.value = "Select";
            console.log("in array boutton", arrayButtonProject)
            displayTaskToDOM(filterTaskByProject(el.dataset.name), tasksContainer)
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
                displayTaskToDOM(arrayToSort, tasksContainer)
                break;
        }
    })
    displayTaskToDOM(arrayInbox, tasksContainer);
}
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
export default Inbox;