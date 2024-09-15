function find() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let c = +document.getElementById("c").value;
  let max;

  if (a > b && a > c) {
    max = a;
  } else if (b > c) {
    max = b;
  } else {
    max = c;
  }

  document.getElementById("output").innerHTML = `Max number: ${max}`;
}
