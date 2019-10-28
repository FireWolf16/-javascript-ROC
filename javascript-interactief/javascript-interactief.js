// div met de id pics selecten
pics = document.getElementById("pics");
creatPicsolders();
createCatImgs();

//picsHolders maken
function creatPicsolders() {
  for (let i = 0; i < 9; i++) {
    pictureHolder = document.createElement("div");
    pictureHolder.className = "picture-holder";
    pictureHolder.id = "picture-holder-" + i;
    // Insert content
    pics.append(pictureHolder);
  }
}

//picsHolder bevat een plaatje van een cat en een favorite symbool
function createCatImgs() {
  //zoek naar de Picsolders
  pictureHolder = document.getElementsByClassName("picture-holder");
  for (let i = 0; i < pictureHolder.length; i++) {
    //   het makken van een div genaamd favoriet
    favoriet = document.createElement("div");
    favoriet.className = "favoriet";
    favoriet.id = "favoriet_" + (i + 1);
    // het makken van een img tag en daar aan de img aan toevoegen
    catPlaatje = document.createElement("img");
    catPlaatje.src = "../javascript-arrays/img/cat" + (i + 1) + ".jpg";
    catPlaatje.id = i + 1;
    catPlaatje.addEventListener("click", function() {
      // dit verwijst naar catPlaatje
      maakFavoriet(this.id);
    });
    // toevoegen aan pictureHolder
    pictureHolder[i].appendChild(favoriet);
    pictureHolder[i].appendChild(catPlaatje);
  }
}

// id van catplaatje word meegegeven
function maakFavoriet(id) {
  console.log("maak mijn favoriet" + id);
  //   select de favoriet div
  nieteenfavoriet = document.getElementsByClassName("favoriet");

  //   haalt alle favorieten weg
  for (let i = 0; i < nieteenfavoriet.length; i++) {
    nieteenfavoriet[i].style.backgroundImage = "none";
  }
  //   id word toegevoegd waardoor er een favoriet word toegevoegd
  favoriet = document.getElementById("favoriet_" + id);
  favoriet.style.backgroundImage = "url('../javascript-arrays/img/hart.jpg')";
}
