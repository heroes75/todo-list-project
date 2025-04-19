



let allProject = [];
export const createProject = (nameProject) => class {
    //#titleProject = nameProject
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
        return nameProject
    }

    ToggleComplete() {
        this.complete = this.complete === true ? false : true
    }
}

export const deleteProject = (name) => allProject.splice(allProject.findIndex(el => el.name === name))
export const addProjectToAllProject = (project) => allProject.push(project);
export default allProject
