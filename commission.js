let amount = 0;
let step1 = 0.03;
let step2 = 0.05;
let step3 = 0.1;

function calculate() {
  let num = +document.getElementById("input").value;

  if (num <= 2000000) {
    amount = num * step1;
  } else if (num <= 5000000) {
    amount = 2000000 * step1 + (num - 2000000) * step2;
  } else {
    amount = 2000000 * step1 + 3000000 * step2 + (num - 5000000) * step3;
  }
  amount = Math.round(amount);

  document.getElementById(
    "output"
  ).innerHTML = `Total commission: ${amount} VND.`;
}
