function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function closeSidebar() {
  const closeSidebar = document.querySelector(".sidebar");
  closeSidebar.style.display = "none";
}

let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

let all = document.querySelector(".all-product");
let allShow = true;
function showAll() {
  if (allShow) {
    xray.style.display = "block";
    metal.style.display = "block";
    access.style.display = "block";
    entrance.style.display = "block";
    allShow = false;
  } else {
    xray.style.display = "block";
    metal.style.display = "block";
    access.style.display = "block";
    entrance.style.display = "block";
    allShow = true;
  }
}

let xray = document.querySelector(".xray");
let show = true;

function showXray() {
  if (show) {
    xray.style.display = "block";
    metal.style.display = "none";
    access.style.display = "none";
    entrance.style.display = "none";
    show = false;
  } else {
    xray.style.display = "block";
    metal.style.display = "none";
    access.style.display = "none";
    entrance.style.display = "none";
    show = true;
  }
}

let metal = document.querySelector(".metal");
let metalShow = true;
function showMetal() {
  if (metalShow) {
    metal.style.display = "block";
    xray.style.display = "none";
    access.style.display = "none";
    entrance.style.display = "none";
    metalShow = false;
  } else {
    metal.style.display = "block";
    xray.style.display = "none";
    access.style.display = "none";
    entrance.style.display = "none";
    metalShow = true;
  }
}

let access = document.querySelector(".access");
let accessShow = true;
function showAccess() {
  if (accessShow) {
    access.style.display = "block";
    xray.style.display = "none";
    metal.style.display = "none";
    entrance.style.display = "none";
    accessShow = false;
  } else {
    access.style.display = "block";
    xray.style.display = "none";
    metal.style.display = "none";
    entrance.style.display = "none";
    accessShow = true;
  }
}

let entrance = document.querySelector(".entrance");
let entranceShow = true;
function showEntrance() {
  if (entranceShow) {
    entrance.style.display = "block";
    metal.style.display = "none";
    access.style.display = "none";
    xray.style.display = "none";
    entranceShow = false;
  } else {
    entrance.style.display = "block";
    metal.style.display = "none";
    access.style.display = "none";
    xray.style.display = "none";
    entranceShow = true;
  }
}

function togle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup-news");
  popup.classList.toggle("active");
}

function absen(){
  var absen = document.getElementById("hotel-news");
  absen.classList.toggle("active");
}