const todosBtn = document.getElementById("todosBtn")
const azulBtn = document.getElementById("azulBtn")
const vermelhoBtn = document.getElementById("vermelhoBtn")

const itens = document.querySelectorAll(".item")

todosBtn.onclick = function(){
itens.forEach(item => item.style.display = "block");
}

vermelhoBtn.onclick = function() {
    itens.forEach(item => {
  if (item.dataset.filter === "vermelho") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
});
};

azulBtn.onclick = function() {
    itens.forEach(item => {
  if (item.dataset.filter === "azul") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
});
};
 
