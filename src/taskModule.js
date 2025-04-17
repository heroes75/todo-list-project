import allProject from "./projectModules";
import { compareAsc } from "date-fns";

const priorityArray = ["High", "Medium", "Low"]
const allTask = [];
 export const addTaskToAllTask = (all) => {
    //const name = new all
    allTask.push(all)
  }

export const createTask = (projectName, title, description, dueDate, important, complete) => {
  const selectedProject = allProject.filter(el => new el().getPrivateTitle() === projectName);
  return new selectedProject[0](title, description, dueDate, important, complete)
}

export const sortTaskByTittle = (arrayOfTask) => {
  return [...arrayOfTask].sort((a, b) => {
    return a.title.localeCompare(b.title);
  })
}

export const sortTaskByDuDate = (arrayOfTask) => {
  return [...arrayOfTask].sort((a, b) => {
    return compareAsc(a.dueDate, b.dueDate);
  })
}

export const sortTaskByPriority = (arrayOfTask) => {
  return [...arrayOfTask].sort((a, b) => {
    return priorityArray.indexOf(a.priority) - priorityArray.indexOf(b.priority);
  })
}

export const filterTaskByProject = (projectName) => {
  const selectedProjects = allTask.filter(el => el.getPrivateTitle() === projectName);
  return selectedProjects
}

export const filterTaskByComplete = () => {
  const selectedProjects = allTask.filter(el => el.complete === true);
  return selectedProjects
}
export const deleteTask = (id, taskArray) => {
  taskArray.splice(id, 1);
  return taskArray
}
export default allTask