const index = document.getElementById("index");
const home = document.getElementById("home");
const about = document.getElementById("about");
const gallery = document.getElementById("gallery");
const team = document.getElementById("team");
let activePage = index;
// index.style.position = "";
// index.style.opacity = 1;
// home.style.display = 'none';
// home.style.opacity = 0;


function homeClick() {
    if (activePage != home) {
        activePage.style.opacity = 0;
        activePage.style.margin = "auto";
        activePage.style.marginTop = "50px";
        home.style.opacity = 1;
        home.style.display = 'flex';
        home.style.width = '700px'
        home.style.height = '650px'
        activePage = home;
    }
}

function aboutClick() {
    if (activePage != about) {
        activePage.style.opacity = 0;
        activePage.style.margin = "auto";
        activePage.style.marginTop = "50px";
        about.style.opacity = 1;
        about.style.display = 'flex';
        activePage = about;
    }
}

function galleryClick() {
    if (activePage != gallery) {
        activePage.style.opacity = 0;
        activePage.style.margin = "auto";
        activePage.style.marginTop = "50px";
        gallery.style.opacity = 1;
        gallery.style.display = 'flex';
        activePage = gallery;
    }
}

function teamClick() {
    if (activePage != team) {
        activePage.style.opacity = 0;
        activePage.style.margin = "auto";
        activePage.style.marginTop = "50px";
        team.style.opacity = 1;
        team.style.display = 'flex';
        activePage = team;
    }
}