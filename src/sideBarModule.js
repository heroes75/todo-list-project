
import allProject, {addProjectToAllProject, createProject} from "./projectModules";
import allTask, {createTask, addTaskToAllTask, sortTaskByTittle, sortTaskByDuDate, sortTaskByPriority, filterTaskByProject, deleteTask} from "./taskModule.js";

export let arrayInbox = [];
export const button1 = document.createElement("button");
export const button2 = document.createElement("button");
export const button3 = document.createElement("button");
export const arrayButtonProject = [];
export const SideBar = (() => {
    const sideBar = document.createElement("div");
    const ul1 = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const ul2 = document.createElement("ul")
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
})

export const displayProjectToDOM = (ul) => {
    ul.textContent = "";
    allProject.forEach(el => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.classList.add("nav-bar-button");
        li.classList.add("side-bar-li");
        button.textContent = new el().getPrivateTitle();
        button.dataset.name = new el().getPrivateTitle();
        li.appendChild(button);
        ul.appendChild(li);
        arrayButtonProject.push(button)
        console.log("in displayProjectToDOM", arrayButtonProject)
    })
    addProjectToDOM(ul)
}

const addProjectToDOM = (ul) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const dialog = document.createElement("dialog");
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
    button.classList.add("nav-bar-button");
    li.classList.add("side-bar-li");
    button.setAttribute("id", "showModal");
    form.setAttribute("method", "dialog");
    newProject.setAttribute("id", "new-project");
    label.setAttribute("id", "label");
    input.setAttribute("id", "input");
    buttonContainer.setAttribute("id", "button-container");
    cancelButton.setAttribute("id", "cancel-button");
    cancelButton.setAttribute("value", "cancel");
    confirmButton.setAttribute("id", "confirm-button");
    p.textContent = "New Project";
    button.textContent = "ADD PROJECT";
    span.textContent = "name";
    confirmButton.textContent = "Comfirm";
    cancelButton.textContent = "Cancel";
    button.addEventListener("click", e => {
        e.preventDefault();
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
    li.appendChild(button);
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
export default SideBar;