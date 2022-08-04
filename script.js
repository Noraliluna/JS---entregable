/*LISTADO DE PRODUCTOS */
class Mercaderia {
    constructor (nombre, talle, color, precio){
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
}

const producto001 = new Mercaderia("Tapado", "M", "Negro", 24000);
const producto002 = new Mercaderia("Remera", "S", "Bordo", 700);
const producto003 = new Mercaderia("Campera", "M", "Mostaza", 10000);
const producto004 = new Mercaderia("Pantalon", "M", "Gris", 3000);
const producto005 = new Mercaderia("Camisa", "M", "Amarilla", 1000);
const producto006 = new Mercaderia("Blusa Floreada", "L", "Gris", 4000);
const producto007 = new Mercaderia("Tapado Paris", "M", "Gris y Negro", 20000);
const producto008 = new Mercaderia("Tapado", "M", "Gris", 15000);
const producto009 = new Mercaderia("Pantalon", "M", "Azul", 4000);
const producto010 = new Mercaderia("Remera", "M", "Blanca", 1000);

const productos = [producto001, producto002, producto003, producto004, producto005
, producto006, producto007, producto008, producto009, producto010];

console.log(productos);

/*ARMANDO MI CARRITO*/
let talle = prompt("Ingrese su talle").toLocaleLowerCase;

const carrito = productos.filter((el) => el.talle = talle);
console.log(carrito);



const bruto = carrito.reduce((acc, element) => acc + element.precio,0)
console.log(bruto)

let tarjeta = prompt("Ingrese su tarjeta").toLowerCase();

const DESC1 = 0.3;
const DESC2 = 0.2;
const DESC3 = 0.15;

function calcularDescuento(descuento){
    return bruto*descuento;
}


if (tarjeta == "santander"){
    if (bruto >= 3000){
        const total = carrito.map((el) => {
            return {
                precio: el.precio
            }
        }) 
        console.log(total)
        const descuento = calcularDescuento(DESC1)
        console.log(bruto- descuento)
    }else{
        console.log("No se le efectura el descuento.")
    }
}else if (tarjeta == "ciudad"){
    if (bruto >= 1000){
        const total = carrito.map((el) => {
            return {
                precio: el.precio
            }
        }) 
        console.log(total)
        const descuento = calcularDescuento(DESC2)
        console.log(bruto- descuento)
    }else{
        console.log("No se le efectura el descuento.")
    }
}else if (tarjeta == "frances"){
    if (bruto >= 5000){
        const total = carrito.map((el) => {
            return {
                precio: el.precio
            }
        }) 
        console.log(total)
        const descuento = calcularDescuento(DESC3)
        console.log(bruto- descuento)
    }else{
        console.log("No se le efectura el descuento.")
    }
}
