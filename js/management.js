const items = document.getElementById("Orden-items");
const btn_add_item = document.getElementById("btn-add-item");
const templateCarrito = document.getElementById("template-lista").content;
const templateVentas = document.getElementById("venta-lista").content;
const title = document.getElementById("titleCard");
const fragment = document.createDocumentFragment();

let { platillos } = JSON.parse(localStorage.getItem("data"));
let { ordenesDeVenta } = JSON.parse(localStorage.getItem("ventas"));

// Platillo(
//   1,
//   "Raclette",
//   250,
//   "Queso de vaca derretido en parrilla eléctrica",
//   "Entrada",
//   "img/Raclette.jpg"
// );
let id_dish = 100;
class Item {
  constructor(id, platillo, precio, descripcion, categoria, img) {
    this.id = id;
    this.platillo = platillo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.img = img;
  }
}

//-----------Eventos-----------
document.addEventListener("DOMContentLoaded", (e) => {
  pintarPlatillos(platillos);
  pintarOrdenes(ordenesDeVenta);
});

btn_add_item.addEventListener("click", createItem);
/*
items.addEventListener("click", (e) => {
    btnEliminarEditar(e);
});
*/
function createItem() {
  const id = id_dish;
  const dish = "j";
  const price = 9;
  const desciption = "hjjh";
  const category = "entrada";
  const newItem = new Item(id, dish, price, desciption, category, "img");
  platillos.push(newItem);
  id_dish++;
  pintarPlatillos(platillos);
}
// Pintar platillos
const pintarPlatillos = (data) => {
  items.innerHTML = "";

  data.forEach((item) => {
    templateCarrito.getElementById("id").textContent = item.id;
    templateCarrito.getElementById("platillo").textContent = item.nombre;
    templateCarrito.getElementById("precio").textContent = item.precio;
    templateCarrito.getElementById("descripcion").textContent =
      item.descripcion;
    templateCarrito.getElementById("categoria").textContent = item.categoria;
    templateCarrito.getElementById("img").textContent = item.img;

    templateCarrito.getElementById("btn-editar").dataset.id = item.id;
    templateCarrito.getElementById("btn-eliminar").dataset.id = item.id;
    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  addEventToButtons();
};

console.log(ordenesDeVenta);
// Pintar ordenes
const pintarOrdenes = (data) => {
  // items.innerHTML = "";

  data.forEach((item) => {
    templateVentas.getElementById("id").textContent = data.indexOf(item);
    templateVentas.getElementById("Cliente").textContent = "clinte";
    templateVentas.getElementById("platillos").textContent = item;
    templateVentas.getElementById("total").textContent = 100000;
    const clone = templateVentas.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  // addEventToButtons();
};
const btnEliminarEditar = (e) => {
  if (e.target.classList.contains("btn-warning")) {
    //editar
    const producto = ordenes[e.target.dataset.id];
    producto.cantidad++;
    ordenes[e.target.dataset.id] = { ...producto };
    pintarCarrito();
  }

  if (
    e.target.classList.contains("btn-danger") ||
    e.target.parentNode.classList.contains("btn-danger")
  ) {
    //eliminar
    window.alert("se va eliminar");
    // console.log(e.target.parentNode.parentNode);
    deleteItem(e.target.parentNode.parentNode);
    //pintarCarrito();
  }
  e.stopPropagation();
};

function addEventToButtons() {
  const buttons_read = document.querySelectorAll(".btn-danger");

  buttons_read.forEach(function (btn) {
    btn.addEventListener("click", deleteItem);
  });
}

//Eliminar
function deleteItem(event) {
  // console.log(event.target.parentNode);
  const buttonsParent = event.target.parentNode; // <li id='12312'></li>
  const id = buttonsParent.getAttribute("data-id");

  const newArray = platillos.filter((item) => {
    // [item, item, item ]
    return item.id != id; // false
  });

  platillos = [...newArray];

  pintarPlatillos(platillos);
}
