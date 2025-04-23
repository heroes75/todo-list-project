import "./styles.css";
import allProject, {createProject, addProjectToAllProject} from "./projectModules";
import allTask, {createTask, addTaskToAllTask} from "./taskModule.js";
import sideBar from "./sideBarModule.js";




const allProjectInLocal = localStorage.getItem("allProjectInLocalStorage");
const allTaskInLocal = localStorage.getItem("allTaskInLocalStorage");
const allProjectNameInLocal = localStorage.getItem("allProjectName");



if (allProjectInLocal) {
  const allProjectToParse = JSON.parse(allProjectInLocal);
  const allProjectNameToParse = JSON.parse(allProjectNameInLocal);
  console.log("allProjectNameToParse", allProjectNameToParse)
  console.log("llProjectToParse instanceof Object", allProjectToParse instanceof Object);
  console.log("allProject.length > 0", allProject.length);
  allProjectNameToParse.forEach(el => {
    addProjectToAllProject(createProject(el));
    console.log(allProject)
  })
  console.log("new allProject[1]()");
  console.log("new allProject[1]()", allProject);
} else {
  addProjectToAllProject(createProject("Default"));
}

if (allTaskInLocal) {
    const allTaskToParse = JSON.parse(allTaskInLocal);
    const allProjectNameToParse = JSON.parse(allProjectNameInLocal);
    allTaskToParse.forEach(el => {
      console.log(el.privateTitle)
      addTaskToAllTask(createTask(el.privateTitle, el.title, el.description, el.dueDate, el.priority, el.complete))
    })
  } else {
    addTaskToAllTask(createTask("Default", "birthday of Jisoo", "singer", "2026-00-03T3:33", "High", false));
    addTaskToAllTask(new allProject[0]("birthday of Giselle", "singer", "2025-09-10T3:33", "High", false));
    addTaskToAllTask(new allProject[0]("anniversaire de Rei", "singer", "2026-01-03T3:33", "Low", false));
    addTaskToAllTask(new allProject[0]("happy birthday of Princess of Akishino", "Princess", "2025-11-29T3:33", "High", false));
  }

  //addProjectToAllProject(createProject("qwerty1"));
  //addProjectToAllProject(createProject("qwerty"));
  //addProjectToAllProject(createProject("qwerty3"));
  
  //addTaskToAllTask(createTask("qwerty1", "what do", "do nothing", new Date(1995, 0, 3, 3, 33), "High", false));
  //addTaskToAllTask(new allProject[0]("title", "description", new Date(1995, 8, 5, 9, 33), "High", false));
  //addTaskToAllTask(new allProject[1]("zzzzz", "description", new Date(1989, 1, 3, 5, 33), "Low", false));
  //addTaskToAllTask(new allProject[1]("aaaaa", "des123", new Date(1994, 11, 29, 9, 33), "Medium", true));


  


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
