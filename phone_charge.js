let base = 25000;
let step1 = 600;
let step2 = 400;
let step3 = 200;

function calculate() {
  //   console.log("clicked!");
  let amount = base;
  let min = +document.getElementById("input").value;
  if (min <= 50) {
    amount += min * step1;
  } else if (min - 50 <= 150) {
    amount += 50 * step1 + (min - 50) * step2;
  } else {
    amount += 50 * step1 + 150 * step2 + (min - 200) * step3;
  }

  document.getElementById(
    "output"
  ).innerText = `Total phone charge: ${amount} VND.`;
}
