//----------Declaración de clases y menu----------//
class Platillo {
  constructor(id, nombre, precio, descripcion, categoria, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.img = img;
  }
}

const Menu = {
  platillos: []
};

const Orden = {
  id: 1,
  cliente: "",
  platillos: [],
  cuenta: 0,
};

const platillo1 = new Platillo(
  1,
  "Raclette",
  250,
  "Queso de vaca derretido en parrilla eléctrica",
  "Entrada",
  "img/Raclette.jpg"
);
const platillo2 = new Platillo(
  2,
  "Patatas Gratinadas",
  120,
  "Se cortan en rodajas y se gratinan con crema, leche o una mezcla de ambos lácteos, añadiéndose queso y setas para comerlas",
  "Entrada",
  "img/Patatas-gratinadas.jpg"
);
const platillo3 = new Platillo(
  3,
  "Sopa de cebolla",
  80,
  "Mezcla de caldo de carne, cebolla caramelizada y trocitos de pan",
  "Entrada",
  "img/Sopa-de-cebolla.jpg"
);
const platillo4 = new Platillo(
  4,
  "Ratatouille",
  320,
  "Es un guiso en aceite de oliva de diferentes hortalizas como berenjena, calabacín, cebolla, tomate, pimiento y ajo.",
  "Entrada",
  "img/Ratatouille.jpg"
);
const platillo5 = new Platillo(
  5,
  "Moules Frites",
  237,
  "Mejillones cocinados al vapor con papas fritas que los franceses del norte del país.",
  "Entrada",
  "img/Moules-frites.jpg"
);
const platillo6 = new Platillo(
  6,
  "Foie gras",
  80,
  "Los franceses comen el hígado de ganso con pan y mermelada.",
  "Entrada",
  "img/Foie-gras.jpg"
);
const platillo7 = new Platillo(
  7,
  "Escargot",
  400,
  "Caracol de Borgoña o caracol de viña y el caracol común de jardín. Se comen principalmente con mantequilla de ajo.",
  "Entrada",
  "img/Escargot.jpg"
);
const platillo8 = new Platillo(
  8,
  "Ancas de Rana",
  973,
  "Crujientes ancas de rana se comen con sal, mantequilla y perejil.",
  "Entrada",
  "img/Ancas-de-rana.jpg"
);
const platillo9 = new Platillo(
  9,
  "Buey ala Borgoñona",
  600,
  "Es un estofado de buey de muy lenta cocción en vino tinto borgoñés, añadiendo ajo, cebolla, zanahoria y un bouquet garni, el típico manojo de hierbas aromáticas.",
  "Entrada",
  "img/Buey-a-la-Borgona.jpg"
);
const platillo10 = new Platillo(
  10,
  "Crepas",
  70,
  "Estos delgados discos de harina de trigo, huevos y leche. Crepas saladas:carnes,setas y quesos. Crepas dulces:frutas, helados y mermeladas.",
  "Entrada",
  "img/Crepas.jpg"
);

Menu.platillos.push(platillo1);
Menu.platillos.push(platillo2);
Menu.platillos.push(platillo3);
Menu.platillos.push(platillo4);
Menu.platillos.push(platillo5);
Menu.platillos.push(platillo6);
Menu.platillos.push(platillo7);
Menu.platillos.push(platillo8);
Menu.platillos.push(platillo9);
Menu.platillos.push(platillo10);

//--------Carga de la ventana--------
const cards = document.getElementById("platillos"); //Contenedor para tarjetas platillos
const templateCard = document.getElementById("template-card").content;

const items = document.getElementById("Orden-items");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;

const fragment = document.createDocumentFragment();

let ordenes = {};

//-----------Eventos-----------
document.addEventListener("DOMContentLoaded", (e) => {
  pintarCards(Menu.platillos);
});
cards.addEventListener("click", (e) => {
  addCarrito(e);
});
items.addEventListener("click", (e) => {
  btnAumentarDisminuir(e);
});

// Pintar platillos
const pintarCards = (data) => {
  data.forEach((item) => {
    templateCard.querySelector("h3").textContent = item.nombre;
    templateCard.querySelector("p").textContent =
      "Descripción: " + item.descripcion;
    templateCard.querySelector("small").textContent = "$" + item.precio;
    templateCard.querySelector("b").textContent =
      "Categoria: " + item.categoria;
    templateCard.getElementById("img-platillo").setAttribute("src", item.img);
    //templateCard.getElementById('img-platillo').src = item.img;
    templateCard.querySelector("button").dataset.id = item.id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

//Agregar al carrito
const addCarrito = (e) => {
  if (e.target.classList.contains("btn-primary")) {
    // console.log(e.target.dataset.id)
    // console.log(e.target.parentElement)
    setCarrito(e.target.parentElement.parentElement);
  }
  e.stopPropagation();
};

const setCarrito = (item) => {
  //console.log(item);
  const producto = {
    title: item.querySelector("h3").textContent,
    precio:parseInt(item.querySelector("small").textContent.substring(1,item.querySelector("small").textContent.length)),
    id: item.querySelector("button").dataset.id,
    cantidad: 1,
  };
  console.log(producto);
  if (ordenes.hasOwnProperty(producto.id)) {
    producto.cantidad = ordenes[producto.id].cantidad + 1;
  }

  ordenes[producto.id] = { ...producto };

  pintarCarrito();
};

const pintarCarrito = () => {
  items.innerHTML = "";

  Object.values(ordenes).forEach((producto) => {
    console.log(typeof(producto.precio) , parseInt(producto.cantidad));
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
    templateCarrito.querySelector("span").textContent =
      producto.precio * producto.cantidad;

    //botones
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  pintarFooter();
};

const pintarFooter = () => {
  footer.innerHTML = "";

  if (Object.keys(ordenes).length === 0) {
    footer.innerHTML = `
        <th scope="row" colspan="5">Orden vacía - comience a ordenar!</th>
        `;
    return;
  }

  // sumar cantidad y sumar totales
  const nCantidad = Object.values(ordenes).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );
  const nPrecio = Object.values(ordenes).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  );
  // console.log(nPrecio)

  templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
  templateFooter.querySelector("span").textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);

  footer.appendChild(fragment);

  const boton = document.querySelector("#vaciar-carrito");
  boton.addEventListener("click", () => {
    ordenes = {};
    pintarCarrito();
  });
};

const btnAumentarDisminuir = (e) => {
  // console.log(e.target.classList.contains('btn-info'))
  if (e.target.classList.contains("btn-info")) {
    const producto = ordenes[e.target.dataset.id];
    producto.cantidad++;
    ordenes[e.target.dataset.id] = { ...producto };
    pintarCarrito();
  }

  if (e.target.classList.contains("btn-danger")) {
    const producto = ordenes[e.target.dataset.id];
    producto.cantidad--;
    if (producto.cantidad === 0) {
      delete ordenes[e.target.dataset.id];
    } else {
      ordenes[e.target.dataset.id] = { ...producto };
    }
    pintarCarrito();
  }
  e.stopPropagation();
};

//---------Guardando datos en localStorage---------
localStorage.setItem("data", JSON.stringify(Menu));