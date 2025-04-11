



const allProject = [];
export const createProject = (nameProject) => class {
    #titleProject = nameProject
    constructor(title, description, dueDate, priority, notes, complete) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.complete = complete
    }
    reeditTask(title, description, dueDate, priority, notes, complete) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.complete = complete
    }
    getPrivateTitle() {
        return this.#titleProject
    }
}

export const addProjectToAllProject = (project) => allProject.push(project);
export default allProject
