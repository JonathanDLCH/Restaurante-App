class Platillo{
    constructor(id,nombre,precio,descripcion,categoria,img){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;
        this.categoria=categoria;
        this.img=img;
    }
}

const Menu = {
    platillos:[]
}

const Ordenes = {
    id : 1,
    cliente : "",
    platillos : [],
    cuenta : 0,
}

const raclette =  new Platillo(1,'Raclette',250,'Queso de vaca derretido en parrilla eléctrica','img/Raclette.jpg');
const a2 =  new Platillo(1,'Raclette',250,'Queso de vaca derretido en parrilla eléctrica','img/Raclette.jpg');
const a3 =  new Platillo(1,'Raclette',250,'Queso de vaca derretido en parrilla eléctrica','img/Raclette.jpg');
const a4 =  new Platillo(1,'Raclette',250,'Queso de vaca derretido en parrilla eléctrica','img/Raclette.jpg');

Menu.platillos.push(raclette);
Menu.platillos.push(a2);
Menu.platillos.push(a3);
Menu.platillos.push(a4);



//--------Carga
const cards = document.getElementById('platillos');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', e => { pintarCards(Menu.platillos) });

// Pintar productos
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h3').textContent = item.nombre
        templateCard.querySelector('p').textContent = item.descripcion
        templateCard.querySelector('button').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}