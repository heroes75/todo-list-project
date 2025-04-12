import "./styles.css";
import { yearsToMonths, formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import allProject, {createProject, addProjectToAllProject} from "./projectModules";
import allTask, {createTask, addTaskToAllTask} from "./taskModule.js"




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
console.log(formatDistanceToNowStrict(new Date(1994, 12, 29), {
    unit: 'month',
    roundingMethod: 'ceil'
}));


  //const namingProject = (Project) => Project = createProject();
  //let Project = createProject("qwerty1");
  //let Project2 = createProject("qwerty");
  //let task1 = new Project("title", "description", new Date(), "important", "motes", false);
  //let task4 = new Project("title", "description", new Date(), "important", "motes", false);
  //let task3 = new Project2("title", "description", new Date(), "important", "motes", false);
  //let task2 = new Project2("title", "description", new Date(), "medium", "motes", true);
  
  addProjectToAllProject(createProject("qwerty1"));
  addProjectToAllProject(createProject("qwerty"));
  
  addTaskToAllTask(createTask("qwerty1", "what do", "do nothing", new Date(), "important", "monte christo", false));
  addTaskToAllTask(new allProject[0]("title", "description", new Date(), "important", "motes", false));
  addTaskToAllTask(new allProject[1]("title", "description", new Date(), "important", "motes", false));
  addTaskToAllTask(new allProject[1]("title", "description", new Date(), "medium", "motes", true));

  //console.log(new Project().getPrivateTitle());

  //console.log(task1);
  //console.log(task2);
  //console.log(Project2);
  const task1 = createTask("qwerty1", "title", "description", new Date(), "important", "motes", false)
  console.log(task1)
  console.log(new allProject[1]());
  console.log(allTask);

