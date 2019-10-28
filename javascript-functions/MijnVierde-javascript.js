/* video 1 */
// dit is geen opdracht
let mijnauto = {
  kleur: "blauw",
  merk: "fort",
  snelheid: 0,
  gasgeven: function() {
    this.snelheid += 5;
    console.log(this.snelheid);
  },
  toeteren: function() {
    console.log("toet toet");
  }
};
// dit is geen opdracht
console.log(mijnauto.kleur);
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();

/*imageslider  */
//array maken met getallen 1 tot 9
let plaatjes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slideholder = document.getElementById("slideholder");
// first imge is a cat pic
slideholder.style.backgroundImage = "url('../javascript-arrays/img/cat1.jpg')";

// als je op het plaatje klikt dan word het cat plaatje toegevoegd
slideholder.addEventListener("click", function() {
  slideholder.style.backgroundImage =
    "url('../javascript-arrays/img/cat" + getAap() + ".jpg')";
});

// teller gaat van 1 tot 9
let teller = 0;
function getAap() {
  if (teller >= plaatjes.length) {
    teller = plaatjes[0];
  } else {
    teller++;
  }
  console.log(teller);
  return teller;
}
