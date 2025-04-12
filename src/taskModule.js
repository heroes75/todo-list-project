import allProject from "./projectModules"

const allTask = [];
 export const addTaskToAllTask = (all) => {
    //const name = new all
    allTask.push(all)
}

export const createTask = (projectName, title, description, dueDate, important, notes, complete) => {
    const selectedProject = allProject.filter(el => new el().getPrivateTitle() === projectName);
    return new selectedProject[0](title, description, dueDate, important, notes, complete)
  }
export default allTask