const mainGrid = document.getElementById("grid");

const DEFAULT_GRID_DIM = 16;

const slider = document.getElementById("slider");

const sliderForm = document.getElementById("slider-input");

const resetButton = document.getElementById("reset-button");

let canDraw = false;

/*****Grid section*****/

function loadGrid(dimension) {
  for (let i = 0; i < dimension; i++) {
    let cell = document.createElement("div");
    cell.className = "cell-column";
    loadSubGrid(dimension, cell);
    mainGrid.appendChild(cell);
  }
}

function loadSubGrid(dimension, cell) {
  for (let i = 0; i < dimension; i++) {
    let subCell = document.createElement("div");
    subCell.className = "sub-cell";
    subCell.addEventListener("mouseover", paint);
    cell.appendChild(subCell);
  }
}

function startSketch(e) {
  e.target.style.backgroundColor = "red";
  canDraw = true;
}

function endSketch() {
  canDraw = false;
}

function paint() {
  if (canDraw) {
    this.style.backgroundColor = "red";
  }
}

mainGrid.addEventListener("mousedown", startSketch);
mainGrid.addEventListener("mouseup", endSketch);

/*****Slider  section*****/
function loadSlider(DEFAULT_GRID_DIM) {
  sliderForm.value = DEFAULT_GRID_DIM;
  slider.value = DEFAULT_GRID_DIM;
  console.log("slider loaded");
}

function sliderChange() {
  sliderForm.value = this.value;
}

slider.addEventListener("input", sliderChange);

/*****Misc*****/
function resetGrid() {
  console.log(`slider value: ${slider.value}`);
  removeAllChildNodes(mainGrid);
  loadGrid(slider.value);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

document.addEventListener("DOMContentLoaded", loadGrid(DEFAULT_GRID_DIM));
document.addEventListener("DOMContentLoaded", loadSlider(DEFAULT_GRID_DIM));
//window.onload = loadGrid(DEFAULT_GRID_DIM);
//window.onload = loadSlider(DEFAULT_GRID_DIM);
