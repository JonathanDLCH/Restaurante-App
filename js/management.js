const items = document.getElementById("Orden-items");
const templateCarrito = document.getElementById("template-lista").content;

const fragment = document.createDocumentFragment();

let { platillos } = JSON.parse(localStorage.getItem("data"));

//-----------Eventos-----------
document.addEventListener("DOMContentLoaded", (e) => {
    pintarPlatillos(platillos);
    addEventToButtons();
});
/*
items.addEventListener("click", (e) => {
    btnEliminarEditar(e);
});
*/
// Pintar platillos
const pintarPlatillos = (data) => {
    items.innerHTML = "";

    data.forEach((item) => {
        templateCarrito.getElementById("id").textContent = item.id;
        templateCarrito.getElementById("platillo").textContent = item.nombre;
        templateCarrito.getElementById("precio").textContent = item.precio;
        templateCarrito.getElementById("descripcion").textContent = item.descripcion;
        templateCarrito.getElementById("categoria").textContent = item.categoria;
        templateCarrito.getElementById("img").textContent = item.img;
        
        templateCarrito.getElementById("btn-editar").dataset.id = item.id;
        templateCarrito.getElementById("btn-eliminar").dataset.id = item.id;
        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
};

console.log(platillos);



const btnEliminarEditar = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("btn-warning")) { //editar
      const producto = ordenes[e.target.dataset.id];
      producto.cantidad++;
      ordenes[e.target.dataset.id] = { ...producto };
      pintarCarrito();
    }
  
    if (e.target.classList.contains("btn-danger") || e.target.parentNode.classList.contains("btn-danger")) { //eliminar
      window.alert("se va eliminar");
      console.log(e.target.parentNode.parentNode);
      deleteItem(e.target.parentNode.parentNode);
      //pintarCarrito();
    }
    e.stopPropagation();
};


function addEventToButtons() {
  const buttons_read = document.querySelectorAll('.btn-danger');

  buttons_read.forEach(function (btn) {
    btn.addEventListener('click', deleteItem);
  });
}

//Eliminar
function deleteItem(event) {
    console.log(event.target.parentNode);
    const buttonsParent = event.target.parentNode; // <li id='12312'></li>
    const id = buttonsParent.getAttribute('data-id');
  
    const newArray = platillos.filter((item) => {  // [item, item, item ]
      return item.id != id;  // false
    });
  
    platillos = [...newArray];
    console.log(platillos);
  
    pintarPlatillos(platillos)
}