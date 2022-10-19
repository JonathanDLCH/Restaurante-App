//----------Declaración de clases y menu----------//
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

const platillo1 =  new Platillo(1,'Raclette',250,'Queso de vaca derretido en parrilla eléctrica','Entrada','img/Raclette.jpg');
const platillo2 =  new Platillo(2,'Patatas Gratinadas',120,'Se cortan en rodajas y se gratinan con crema, leche o una mezcla de ambos lácteos, añadiéndose queso y setas para comerlas','Entrada','img/Patatas-gratinadas.jpg');
const platillo3 =  new Platillo(3,'Sopa de cebolla',80,'Mezcla de caldo de carne, cebolla caramelizada y trocitos de pan','Entrada','img/Sopa-de-cebolla.jpg');
const platillo4 =  new Platillo(4,'Ratatouille',320,'Es un guiso en aceite de oliva de diferentes hortalizas como berenjena, calabacín, cebolla, tomate, pimiento y ajo.','Entrada','img/Ratatouille.jpg');
const platillo5 =  new Platillo(4,'Moules Frites',237,'Mejillones cocinados al vapor con papas fritas que los franceses del norte del país.','Entrada','img/Moules-frites.jpg');
const platillo6 =  new Platillo(4,'Foie gras',80,'Los franceses comen el hígado de ganso con pan y mermelada.','Entrada','img/Foie-gras.jpg');
const platillo7 =  new Platillo(4,'Escargot',400,'Caracol de Borgoña o caracol de viña y el caracol común de jardín. Se comen principalmente con mantequilla de ajo.','Entrada','img/Escargot.jpg');
const platillo8 =  new Platillo(4,'Ancas de Rana',973,'Crujientes ancas de rana se comen con sal, mantequilla y perejil.','Entrada','img/Ancas-de-rana.jpg');
const platillo9 =  new Platillo(4,'Buey ala Borgoñona',600,'Es un estofado de buey de muy lenta cocción en vino tinto borgoñés, añadiendo ajo, cebolla, zanahoria y un bouquet garni, el típico manojo de hierbas aromáticas.','Entrada','img/Buey-a-la-Borgona.jpg');
const platillo10 =  new Platillo(4,'Crepas',70,'Estos delgados discos de harina de trigo, huevos y leche. Crepas saladas:carnes,setas y quesos. Crepas dulces:frutas, helados y mermeladas.','Entrada','img/Crepas.jpg');

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


//--------Carga
const cards = document.getElementById('platillos');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', e => { pintarCards(Menu.platillos) });

// Pintar productos
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h3').textContent = item.nombre;
        templateCard.querySelector('p').textContent = "Descripción: " + item.descripcion;
        templateCard.querySelector('small').textContent = "$" + item.precio;
        templateCard.querySelector('b').textContent = "Categoria: " + item.categoria;
        templateCard.getElementById('img-platillo').setAttribute("src",item.img);
        //templateCard.getElementById('img-platillo').src = item.img;
        templateCard.querySelector('button').dataset.id = item.id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}