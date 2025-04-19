import "./styles.css";
import { yearsToMonths, formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";
import allProject, {createProject, addProjectToAllProject} from "./projectModules";
import allTask, {createTask, addTaskToAllTask, sortTaskByTittle, sortTaskByDuDate, sortTaskByPriority, filterTaskByProject, deleteTask} from "./taskModule.js";
import sideBar from "./sideBarModule.js";
import Inbox from "./inboxModule.js";




const allProjectInLocal = localStorage.getItem("allProject");
  const allTaskInLocal = localStorage.getItem("allTask");

if (allProjectInLocal) {
  const allProjectToParse = JSON.parse(allProjectInLocal);
  console.log(allProjectToParse instanceof Object);
  allProject = [...allProjectToParse.map(el => {
    return el = eval("(" + el + ")");
  })]
  console.log(allProject)
} else {
  console.log('User data not found in local storage')
}

if (allTaskInLocal) {
    allTaskToParse = JSON.parse(allTaskInLocal);
    allTask = allTaskToParse.map(el => {
      el.getPrivateTitle =  eval("(" + el.getPrivateTitle + ")");
      el.reeditTask =  eval("(" + el.reeditTask + ")");
      el.ToggleComplete =  eval("(" + el.ToggleComplete + ")");
      return el
    })
  } else {
    console.log('User data not found in local storage')
  }

  addProjectToAllProject(createProject("qwerty1"));
  addProjectToAllProject(createProject("qwerty"));
  addProjectToAllProject(createProject("qwerty3"));
  
  addTaskToAllTask(createTask("qwerty1", "what do", "do nothing", new Date(1995, 0, 3, 3, 33), "High", false));
  addTaskToAllTask(new allProject[0]("title", "description", new Date(1995, 8, 5, 9, 33), "High", false));
  addTaskToAllTask(new allProject[1]("zzzzz", "description", new Date(1989, 1, 3, 5, 33), "Low", false));
  addTaskToAllTask(new allProject[1]("aaaaa", "des123", new Date(1994, 11, 29, 9, 33), "Medium", true));


  


  //allProject = localStorage.getItem("allProject") == true ? JSON.parse(localStorage.getItem("allProject")) : allProject;
  //allTask = localStorage.getItem("allTask") == true ? JSON.parse(localStorage.getItem("allTask")) : allTask;

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
