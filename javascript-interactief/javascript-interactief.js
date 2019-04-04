pics = document.getElementById("pics");
creatPicsolders();
createCatImgs();

//picsHolders maken
//picsHolder bevat een plaatje van een cat en een favorite symbool
function creatPicsolders() {
    for (let i=0; i<9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.append(pictureHolder);
    }
}

function createCatImgs() {
    pictureHolder = document.getElementsByClassName("picture-holder");
    for (let i=0; i<pictureHolder.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        catPlaatje = document.createElement("img");
        catPlaatje.src = "../javascript-arrays/img/cat" + (i+1) + ".jpg";
        catPlaatje.id = (i+1);
        catPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolder[i].appendChild(favoriet);
        pictureHolder[i].appendChild(catPlaatje)
    }
}

function maakFavoriet(id) {
    console.log("maak mijn favoriet" + id);
    nieteenfavoriet = document.getElementsByClassName("favoriet");

    for (let i=0; i<nieteenfavoriet.length; i++) {
        nieteenfavoriet[i].style.backgroundImage = "none";
    }
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('../javascript-arrays/img/hart.jpg')";
}
//catPlaatjes toevoegen aan picsHolders
//favorite symbool toevoegen aan picsHolders
