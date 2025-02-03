function verif() {
  var nb1 = Number(document.getElementById("num1").value);
  var nb2 = Number(document.getElementById("num2").value);
  if (document.getElementById("p1").checked) {
    alert(pgcd(nb1, nb2));
  } else if (document.getElementById("p2").checked) {
    alert(ppcm(nb1, nb2));
  } else document.getElementById("p3").checked;
  alert(puissance(nb1, nb2));
}
function pgcd(x, y) {
  while (y != 0) {
    r = x % y;
    x = y;
    y = r;
  }
  return x;
}
function ppcm(x, y) {
  return Math.abs(x * y) / pgcd(x, y);
}
function puissance(x, y) {
  var p = 1;
  for (var i = 0; i < y; i++) {
    p = p * x;
  }
  return p
}
