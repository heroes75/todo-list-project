



let allProject = [];
export function createProject (nameProject)  {
    return class {
    #privateTitle = nameProject;
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
        const privateTitle = this.#privateTitle
        return this.#privateTitle;
    }

    setPrivateTitle(name) {
        this.#privateTitle = name
    }

    ToggleComplete() {
        this.complete = this.complete === true ? false : true
    }
}
}
export const deleteProject = (name) => allProject.splice(allProject.findIndex(el => el.name === name))
export const addProjectToAllProject = (project) => allProject.push(project);
export default allProject
