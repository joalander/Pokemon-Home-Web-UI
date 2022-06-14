function newCell(hasPokemon = false){
    var withPokemon = `<img src="./img/thumbnail/default.png" alt="pokemon">`;
    var cellPokemon = hasPokemon === true ? withPokemon : "";
    var cellIndividual = `<div class="cell"> ${cellPokemon}</div>`;
    return cellIndividual;
}
function newRow(pokemonCount = 0){
    var cellContent;
    if (pokemonCount === 0) {
        cellContent = newCell(false) + newCell(false) + newCell(false) + newCell(false) + newCell(false) + newCell(false);
    } 
    if (pokemonCount === 1) {
        cellContent = newCell(true) + newCell(false) + newCell(false) + newCell(false) + newCell(false) + newCell(false);
    }
    if (pokemonCount === 2) {
        cellContent = newCell(true) + newCell(true) + newCell(false) + newCell(false) + newCell(false) + newCell(false);
    }
    if (pokemonCount === 3) {
        cellContent = newCell(true) + newCell(true) + newCell(true) + newCell(false) + newCell(false) + newCell(false);
    }
    if (pokemonCount === 4) {
        cellContent = newCell(true) + newCell(true) + newCell(true) + newCell(true) + newCell(false) + newCell(false);
    }
    if (pokemonCount === 5) {
        cellContent = newCell(true) + newCell(true) + newCell(true) + newCell(true) + newCell(true) + newCell(false);
    }
    if (pokemonCount === 6) {
        cellContent = newCell(true) + newCell(true) + newCell(true) + newCell(true) + newCell(true) + newCell(true);
    }
    var rowTemplate = `<div class="row"> ${cellContent}</div>`;
    return rowTemplate;
}
function newBox(title, isActive = false){
    var boxClass = isActive === true ? "box active" : "box";
    var rowsContent = newRow(6) + newRow(2) + newRow(1) + newRow(3) + newRow(5) ;
    var boxTemplate = `<section class="${boxClass}"> <h3> ${title} </h3> <div class="content"> ${rowsContent} </div></section>`;
    return boxTemplate;
}
function boxesLoader(){
    return newBox("Box 1") + newBox("Box 2", true);
}
$(document).ready(function(){
    $("#section-boxes").html(boxesLoader());
  });
