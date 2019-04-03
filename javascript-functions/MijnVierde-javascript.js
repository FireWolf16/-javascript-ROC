/* video 1 */
let mijnauto = {
    kleur: "blauw",
    merk: "fort",
    snelheid: 0,
    gasgeven: function () {
        this.snelheid += 5;
        console.log(this.snelheid);
    },
    toeteren: function () {
        console.log("toet toet");
    }
}

console.log(mijnauto.kleur);
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();
/* video imageslider  */
let plaatjes  = [1,2,3,4,5,6,7,8,9];
let slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('../javascript-arrays/img/cat1.jpg')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('../javascript-arrays/img/cat" + getAap() + ".jpg')";
});

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
