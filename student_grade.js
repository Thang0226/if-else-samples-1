function grade() {
  let test1 = +document.getElementById("mini1").value;
  let test2 = +document.getElementById("mini2").value;
  let test3 = +document.getElementById("mini3").value;
  let mid = +document.getElementById("mid").value;
  let final = +document.getElementById("final").value;
  let point;
  let grade;

  point = (0.15 * (test1 + test2 + test3)) / 3 + 0.35 * mid + 0.5 * final;
  point = Math.round(point * 10) / 10;

  if (point >= 8.5) {
    grade = "A";
  } else if (point >= 7) {
    grade = "B";
  } else if (point >= 5.5) {
    grade = "C";
  } else if (point >= 4) {
    grade = "D";
  } else {
    grade = "F";
  }

  document.getElementById("output").innerHTML = `Grade: ${grade}`;
  if (grade == "F") {
    alert("NOT Pass");
  } else {
    alert("Pass!");
  }
}
