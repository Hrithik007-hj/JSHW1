function upDate(preview) {
 document.getElementById("image").style.backgroundImage = `url('${preview.src}')`;


document.getElementById("image").textContent = preview.alt;
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "none";
  document.getElementById("image").textContent = "Choose image to see";
}
