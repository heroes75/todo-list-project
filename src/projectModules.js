



let allProject = [];
export function createProject (nameProject)  {
    return class {
    privateTitle = nameProject;
    constructor(title, description, dueDate, priority, complete) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
        this.id = crypto.randomUUID();
        //this.getPrivateTitle = getPrivateTitle.bind(this)
    }

    reeditTask(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getPrivateTitle() {
        //const privateTitle = this.#privateTitle
        return this.privateTitle;
    }

    ToggleComplete() {
        this.complete = this.complete === true ? false : true
    }
}
}
export const deleteProject = (names) => {
    console.log(allProject.findIndex(el => el.name === names))
    allProject.splice(allProject.findIndex(el => new el().getPrivateTitle() === names), 1)
}
export const addProjectToAllProject = (project) => allProject.push(project);
export default allProject
