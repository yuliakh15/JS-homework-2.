function showResult() {
  const colourEl = document.getElementById("colour");
  const widthEl = document.getElementById("width");
  const heigthEl = document.getElementById("heigth");
  const radiusEl = document.getElementById("radius");
  const borderEl = document.getElementById("border");

  const shapeChangeEl = document.getElementById("shapeChange");

  shapeChangeEl.style.colour = colourEl.value;
  shapeChangeEl.style.width = widthEl.value;
  shapeChangeEl.style.heigth = heigthEl.value;
  shapeChangeEl.style.radius = radiusEl.value;
  shapeChangeEl.style.border = borderEl.value;
}
