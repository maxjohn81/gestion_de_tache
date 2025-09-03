let taskList1 = document.getElementById("dataBase1");
let taskList2 = document.getElementById("dataBase2");
let taskList3 = document.getElementById("dataBase3");

let ensemble = 0;
let aFaire = 0;
let enCours = 0;
let termine = 0;

function addTask1() {
  let taskInput1 = document.getElementById("taskInput1");
  let taskText = taskInput1.value;

  if (taskText === "") {
    return;
  }

  let li = document.createElement("li");
  li.append(taskText);

  let editBouton1 = document.createElement("button");
  editBouton1.innerHTML = '<button class="modify">Modifier</button>';
  editBouton1.onclick = () => {
    editTask1(li);
  };

  let deleteBouton1 = document.createElement("button");
  deleteBouton1.innerHTML = '<button class="delete">Supprimer</button>';
  deleteBouton1.onclick = () => {
    deleteTask1(li);
  };

  li.append(editBouton1);
  li.append(deleteBouton1);
  taskList1.appendChild(li);
  setTimeout(() => {
    aFaire += 1;
    ensemble = aFaire + enCours + termine;
    totalTache.innerHTML = ensemble;
    tache1.textContent = aFaire;
  }, 1000);
  taskInput1.value = "";
}

function editTask1(task) {
  let taskTextElement = task.firstChild;
  let taskTexte = taskTextElement.textContent;

  let newTaskTexte = prompt("Modifier la tache : ", taskTexte);

  if (newTaskTexte === null || newTaskTexte === "") {
    return;
  }

  taskTextElement.textContent = newTaskTexte;
}

function deleteTask1(task) {
  alert("Vouler vous vraiment supprimer la tache ?");
  setTimeout(() => {
    aFaire -= 1;
    ensemble = aFaire + enCours + termine;
    totalTache.innerHTML = ensemble;
    tache1.innerHTML = aFaire;
  }, 1000);
  taskList1.removeChild(task);
}

function addTask2() {
  let taskInput2 = document.getElementById("taskInput2");
  let taskText = taskInput2.value;

  if (taskText === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = taskText;

  let editBouton2 = document.createElement("button");
  editBouton2.innerHTML = '<button class="modify">Modifier</button>';
  editBouton2.onclick = () => {
    editTask2(li);
  };

  let deleteBouton2 = document.createElement("button");
  deleteBouton2.innerHTML = '<button class="delete">Supprimer</button>';
  deleteBouton2.onclick = () => {
    deleteTask2(li);
  };

  li.appendChild(editBouton2);
  li.appendChild(deleteBouton2);
  taskList2.appendChild(li);

  setTimeout(() => {
    enCours += 1;
    ensemble = aFaire + enCours + termine;
    totalTache.innerHTML = ensemble;
    tache2.innerHTML = enCours;
  }, 1000);
  taskInput2.value = "";
}

function editTask2(task) {
  let taskTextElement = task.firstChild;
  let taskText = taskTextElement.textContent;

  let newTexte = prompt("Voulez vous modifier ?", taskText);

  if (newTexte == null || newTexte == "") {
    return;
  }

  taskTextElement.textContent = newTexte;
}

function deleteTask2(task) {
  alert("Vouler vous vraiment supprimer la tache");
  setTimeout(() => {
    enCours -= 1;
    ensemble = aFaire + enCours + termine;
    totalTache.innerHTML = ensemble;
    tache2.innerHTML = enCours;
  }, 1000);
  taskList2.removeChild(task);
}

function addTask3() {
  let taskInput3 = document.getElementById("taskInput3");
  let taskText = taskInput3.value;

  if (taskText === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = taskText;

  let editBouton3 = document.createElement("button");
  editBouton3.innerHTML = '<button class="modify">Modifier</button>';
  editBouton3.onclick = () => {
    editTask3(li);
  };

  let deleteBouton3 = document.createElement("button");
  deleteBouton3.innerHTML = '<button class="delete">Supprimer</button>';
  deleteBouton3.onclick = () => {
    deleteTask3(li);
  };

  li.appendChild(editBouton3);
  li.appendChild(deleteBouton3);
  taskList3.appendChild(li);

  setTimeout(() => {
    termine += 1;
    ensemble = aFaire + enCours + termine;
    totalTache.innerHTML = ensemble;
    tache3.innerHTML = termine;
  }, 1000);
  taskInput3.value = "";
}

function editTask3(task) {
  let taskTextElement = task.firstChild;
  let taskTexte = taskTextElement.textContent;

  let newTaskTexte = prompt("Modifier la tache : ", taskTexte);

  if (newTaskTexte === null || newTaskTexte === "") {
    return;
  }

  taskTextElement.textContent = newTaskTexte;
}

function deleteTask3(task) {
  alert("Vouler vous vraiment supprimer la tache");
  setTimeout(() => {
    termine -= 1;
    ensemble = aFaire + enCours + termine;
    totalTache.innerHTML = ensemble;
    tache3.innerHTML = termine;
  }, 1000);
  taskList3.removeChild(task);
}

let j = 0;
let bouton1 = document.querySelector(".bouton1");
let bouton2 = document.querySelector(".bouton2");
let bouton3 = document.querySelector(".bouton3");

corps.onclick = () => {
  j += 1;
  let body = document.querySelector("body");
  let titles = document.querySelectorAll(".title");
  if (j % 2 != 0) {
    boule.style.background = "blue";
    boule.style.transform = "translate(12px)";
    corps.style.background = "white";
    theme.textContent = "Claire";
    theme.style.color = "white";
    navbarTache.style.background = "#0b1d3a";
    navbarTache.style.color = "white";
    containerTotal.style.background = "#0b1d3a";
    containerTotal.style.color = "white";
    containerTache.style.background = "#0b1d3a";
    body.style.background = "#0b1d3a";
    container1.style.background = "#0e52c0";
    container2.style.background = "#0e52c0";
    container3.style.background = "#0e52c0";
    titles.forEach((title) => {
      title.style.color = "white";
    });
    bouton1.style.background = "#0b1d3a";
    bouton1.style.boxShadow = "none";
    bouton2.style.background = "#0b1d3a";
    bouton2.style.boxShadow = "none";
    bouton3.style.background = "#0b1d3a";
    bouton3.style.boxShadow = "none";
  } else {
    boule.style.background = "white";
    boule.style.transform = "translate(-12px)";
    corps.style.background = "black";
    theme.textContent = "Sombre";
    theme.style.color = "black";
    navbarTache.style.background = "#f8f4f4";
    navbarTache.style.color = "black";
    containerTotal.style.background = "#f8f4f4";
    containerTotal.style.color = "black";
    containerTache.style.background = "#f8f4f4";
    containerTache.style.color = "black";
    body.style.background = "white";
    container1.style.background = "#dfdddd";
    container2.style.background = "#dfdddd";
    container3.style.background = "#dfdddd";
    titles.forEach((title) => {
      title.style.color = "black";
    });
    bouton1.style.background =
      " linear-gradient(to left, #4f5af7, #0957e7, #6f65f3 70%)";
    bouton2.style.background =
      " linear-gradient(to left, #4f5af7, #0957e7, #6f65f3 70%)";
    bouton3.style.background =
      " linear-gradient(to left, #4f5af7, #0957e7, #6f65f3 70%)";
  }

  if (j == 10) {
    j = 0;
  }
};
