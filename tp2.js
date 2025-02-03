function verif() {
  var dt1 = document.getElementById("date").value;
  var nom = document.getElementById("nom").value;
  var dateAuj = new Date();
  var datn = new Date(dt1);
  var anneaj = dateAuj.getFullYear();
  var anneé = datn.getFullYear();
  var z = anneaj - anneé;
  document.getElementById("pr").innerHTML =
    nom + " votre age est : " + String(z);
}
