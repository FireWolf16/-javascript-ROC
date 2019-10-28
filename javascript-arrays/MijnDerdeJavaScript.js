// selects all de IMG tags
let plaatjes = document.getElementsByTagName("img");
let random = 0;
let RandomNumbers = [];

while (RandomNumbers.length < 9) {
  //selects a random nummer and Rounds it down and puts it in the RandomNumbers array (0/1)
  random = Math.floor(Math.random() * 9 + 1);
  // kijkt of het random getal in de RandomNumbers array zit

  //   geen nummer dan krijg je -1 en word er plus 1 gedaan
  if (RandomNumbers.lastIndexOf(random) == -1) {
    // voegt random nummer toe als nummer niet eerder is voorgekomen in RandomNumbers array
    RandomNumbers.push(random);
  }
}
random = 0;
// doorloopt de array tot dat het alle plaatjes gehad heeft

for (var plaatje in plaatjes) {
  // plaats randomgetal op de plaats van 0
  plaatjes[plaatje].src = "img/cat" + RandomNumbers[random] + ".jpg";
  random++;
}
