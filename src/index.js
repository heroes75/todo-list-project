import "./styles.css";
import { yearsToMonths, formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import allProject, {createProject, addProjectToAllProject} from "./projectModules";
import allTask, {createTask, addTaskToAllTask, sortTaskByTittle, sortTaskByDuDate, sortTaskByPriority, filterTaskByProject, deleteTask} from "./taskModule.js";
import sideBar from "./sideBarModule.js";
import Inbox from "./inboxModule.js";



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
  /*const task1 = createTask("qwerty1", "title", "description", new Date(), "important", "motes", false);
  const task3 = createTask("qwerty3", "title3", "description3", new Date(), "important", "motes3", false);
  const task6 = createTask("qwerty3", "6title3", "6description3", new Date(), "important", "motes3", true);
  const task5 = createTask("qwerty3", "title35", "description35", new Date(2036, 6, 7), "important", "motes3", false);
  addTaskToAllTask(task3);
  addTaskToAllTask(task5);
  addTaskToAllTask(task6);
  console.log(task1)
  console.log(new allProject[1]());
  console.log(allTask);
  console.log("sortTaskByTittle", sortTaskByTittle(allTask));
  console.log("sortTaskByDuDate", sortTaskByDuDate(allTask));
  console.log("sortTaskByPriority", sortTaskByPriority(allTask));
  console.log("filterTaskByProject", filterTaskByProject("qwerty1"));
  console.log("deleteTask, sortTaskByTittle", deleteTask(1, sortTaskByTittle(allTask)));
  console.log("deleteTask, sortTaskByDuDate", deleteTask(1, sortTaskByDuDate(allTask)));*/
  /*console.log(allProject.forEach(function (el, index, array) {
    console.log(new el().getPrivateTitle());
    new el().getPrivateTitle();
    return new el().getPrivateTitle();
}, this))*/
 
//make the todo-list in console

/*setTimeout(() => {
    //deleteTask(1, sortTaskByTittle(allTask));
    deleteTask(0, filterTaskByProject("qwerty1"));
    console.log(filterTaskByProject("qwerty1"));
    console.log("////")
    allProject.forEach(el => {
        console.log(new el().getPrivateTitle());
        console.log(filterTaskByProject(new el().getPrivateTitle()).map(el => el.title).join("\n  "));
    })
}, 5000);*/

const Navbar = (() => {
    const navBar = document.createElement("div");
    const h1 = document.createElement("h1")
    navBar.setAttribute("id", "nav-bar");
    h1.setAttribute("id", "nav-bar-h1");
    h1.textContent = "YOUR TODO-LIST"
    document.body.appendChild(navBar);
    navBar.appendChild(h1)
})();
const box = document.createElement("div");
box.setAttribute("id", "box");
document.body.appendChild(box)

sideBar();

//Inbox()
