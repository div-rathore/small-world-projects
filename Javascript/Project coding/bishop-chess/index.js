let table = document.getElementById("table");
for (let i = 0; i < 8; i++) {
  let row = document.createElement("tr");
  let white = i % 2 == 0 ? true : false;
  for (let j = 0; j < 8; j++) {
    let cell = document.createElement("td");
    cell.setAttribute("data-index", `${i}-${j}`);
    row.appendChild(cell);
    if (white) {
      cell.setAttribute("class", "white box");
    } else {
      cell.setAttribute("class", "black box");
    }
    white = !white;
  }
  table.appendChild(row);
}

table.addEventListener("mouseover", (e) => {
  let temp = e.target.dataset.index.split("-").map((val) => parseInt(val));
  let row = temp[0];
  let col = temp[1];
  let str = `${row}-${col}`;
  let hash = {};
  hash[str] = true;
  hash = findTopLeft(row, col, hash);
  hash = findTopRight(row, col, hash);
  hash = findBottomLeft(row, col, hash);
  hash = findBottomRight(row, col, hash);
  let cells = document.querySelectorAll("td");

  document
    .querySelectorAll("td")
    .forEach((cell) => cell.classList.remove("blue"));

  for (let i = 0; i < cells.length; i++) {
    let key = `${cells[i].closest("tr").rowIndex}-${cells[i].cellIndex}`;
    if (hash[key]) {
      cells[i].classList.add("blue");
    }
  }
});

const findTopLeft = (row, col, hash) => {
  row--;
  col--;
  while (row >= 0 && col >= 0) {
    let key = `${row}-${col}`;
    hash[key] = true;
    row--;
    col--;
  }
  return hash;
};

const findTopRight = (row, col, hash) => {
  row--;
  col++;
  while (row >= 0 && col < 8) {
    let key = `${row}-${col}`;
    hash[key] = true;
    row--;
    col++;
  }
  return hash;
};
const findBottomLeft = (row, col, hash) => {
  row++;
  col--;
  while (row < 8 && col >= 0) {
    let key = `${row}-${col}`;
    hash[key] = true;
    row++;
    col--;
  }
  return hash;
};
const findBottomRight = (row, col, hash) => {
  row++;
  col++;
  while (row < 8 && col < 8) {
    let key = `${row}-${col}`;
    hash[key] = true;
    row++;
    col++;
  }
  return hash;
};

table.addEventListener("mouseleave", (e) => {
  const cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("blue");
  }
});
