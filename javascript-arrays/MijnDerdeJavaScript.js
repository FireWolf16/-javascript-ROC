// let a = ["aap", "noot", "mies"];
// let b = ["wim", "zus", "jet"];
// let c = a.concat(b);
// console.log(a.concat(b));
// console.log(c[5]);

// selects all de IMG tags
let plaatjes = document.getElementsByTagName("img");
let random = 0;
let RandomNumbers = [];

while (RandomNumbers.length < 9) {
  //selects a random nummer and Rounds it down and puts it in the RandomNumbers array
  random = Math.floor(Math.random() * 9 + 1);
  //   geen nummer dan krijg je -1 en word er plus 1 gedaan
  if (RandomNumbers.lastIndexOf(random) == -1) {
    RandomNumbers.push(random);
  }
}
// doorloopt de array tot dat het alle plaatjes gehad heeft
random = 0;
for (var plaatje in plaatjes) {
  plaatjes[plaatje].src = "img/cat" + RandomNumbers[random] + ".jpg";
  random++;
}

// for (let i = 0; i < plaatjes.length; i++) {
//     random = Math.floor(Math.random()*9+1);
//     plaatjes[i].src = "img/cat" + random + ".jpg";
// }
