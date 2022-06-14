function newRow(){
    var rowTemplate = `<div class="row"> <div class="cell"> <img src="./img/thumbnail/default.png" alt="pokemon"></div> <div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div></div>`;
    return rowTemplate;
}
function newBox(title, isActive = false){
    var boxClass = isActive === true ? "box active" : "box";
    var rowsContent = newRow() + newRow() + newRow() + newRow() + newRow() ;
    var boxTemplate = `<section class="${boxClass}"> <h3> ${title} </h3> <div class="content"> ${rowsContent} </div></section>`;
    return boxTemplate;
}
function boxesLoader(){
    return newBox("Box 1") + newBox("Box 2", true);
}
$(document).ready(function(){
    $("#section-boxes").html(boxesLoader());
  });
