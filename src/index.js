import "./styles.css";
import { yearsToMonths, formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import allProject, {createProject, addProjectToAllProject} from "./projectModules"




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

const allTask = [];
const addTaskToAllTask = (all) => {
    //const name = new all
    allTask.push(new all)
} 
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
  let Project = createProject("qwerty1");
  let Project2 = createProject("qwerty");
  let task1 = new Project("title", "description", new Date(), "important", "motes", false);
  let task4 = new Project("title", "description", new Date(), "important", "motes", false);
  let task3 = new Project2("title", "description", new Date(), "important", "motes", false);
  let task2 = new Project2("title", "description", new Date(), "medium", "motes", true);
  addTaskToAllTask(createProject("qwerty")("title", "description", new Date(), "important", "motes", false));
  //addTaskToAllTask(task2);
  //addTaskToAllTask(task3);
  //addTaskToAllTask(task4);


  console.log(new Project().getPrivateTitle());

  console.log(task1);
  console.log(task2);
  console.log(Project2);
  addProjectToAllProject(createProject("qwerty1"));
  addProjectToAllProject(createProject("qwerty"));
  console.log(new allProject[1]());
  console.log(allTask);

