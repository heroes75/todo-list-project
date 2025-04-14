import "./styles.css";
import { yearsToMonths, formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import allProject, {createProject, addProjectToAllProject} from "./projectModules";
import allTask, {createTask, addTaskToAllTask, sortTaskByTittle, sortTaskByDuDate, sortTaskByPriority, filterTaskByProject, deleteTask} from "./taskModule.js"




/*const createProject = function(nameProject) {
    let titleProject = nameProject;
    function createObject (title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
    return {titleProject, createObject}

}*/


const task = {
    title: "task",
    description: "description",
    dueDate: new Date(),
    priority: "important",
    notes: "notes"
}

console.log(yearsToMonths(17));
console.log(formatDistanceToNowStrict(new Date(1994, 11, 29), {
    unit: 'month',
    roundingMethod: 'ceil'
}));


  //const namingProject = (Project) => Project = createProject();
  //let Project = createProject("qwerty1");
  //let Project2 = createProject("qwerty");
  //let task1 = new Project("title", "description", new Date(), "important", "motes", false);
  //let task4 = new Project("title", "description", new Date(), "important", "motes", false);
  //let task3 = new Project2("title", "description", new Date(), "important", "motes", false);
  //let task2 = new Project2("title", "description", new Date(), "medium", "motes", true)
  
  addProjectToAllProject(createProject("qwerty1"));
  addProjectToAllProject(createProject("qwerty"));
  addProjectToAllProject(createProject("qwerty3"));
  
  addTaskToAllTask(createTask("qwerty1", "what do", "do nothing", new Date(1995, 0, 3), "important", "monte christo", false));
  addTaskToAllTask(new allProject[0]("title", "description", new Date(1995, 8, 5), "important", "motes", false));
  addTaskToAllTask(new allProject[1]("zzzzz", "description", new Date(1989, 1, 3), "low", "motes", false));
  addTaskToAllTask(new allProject[1]("aaaaa", "des123", new Date(1994, 11, 29), "medium", "motes", true));

  //console.log(new Project().getPrivateTitle());

  //console.log(task1);
  //console.log(task2);
  //console.log(Project2);
  const task1 = createTask("qwerty1", "title", "description", new Date(), "important", "motes", false);
  const task3 = createTask("qwerty3", "title3", "description3", new Date(), "important", "motes3", false);
  addTaskToAllTask(task3)
  console.log(task1)
  console.log(new allProject[1]());
  console.log(allTask);
  console.log("sortTaskByTittle", sortTaskByTittle(allTask));
  console.log("sortTaskByDuDate", sortTaskByDuDate(allTask));
  console.log("sortTaskByPriority", sortTaskByPriority(allTask));
  console.log("filterTaskByProject", filterTaskByProject("qwerty1"));
  console.log("deleteTask, sortTaskByTittle", deleteTask(1, sortTaskByTittle(allTask)));
  console.log("deleteTask, sortTaskByDuDate", deleteTask(1, sortTaskByDuDate(allTask)));
  /*console.log(allProject.forEach(function (el, index, array) {
    console.log(new el().getPrivateTitle());
    new el().getPrivateTitle();
    return new el().getPrivateTitle();
}, this))*/
 
//make the todo-list in console
console.log(`
    PROJECT:
    project name ${allProject.forEach(el => {
        console.log(new el().getPrivateTitle());
        console.log(filterTaskByProject(new el().getPrivateTitle()).forEach(el => console.log(el.title)))
    })}
    `)