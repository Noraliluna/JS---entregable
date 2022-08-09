/*LISTADO DE PRODUCTOS */
class Mercaderia {
    constructor(nombre, talle, color, precio, id) {
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
        this.id = id;
    }
}

const producto001 = new Mercaderia("Tapado", "M", "Negro", 24000, 1);
const producto002 = new Mercaderia("Remera", "S", "Bordo", 700, 2);
const producto003 = new Mercaderia("Campera Polar", "M", "Mostaza", 10000, 3);
const producto004 = new Mercaderia("Pantalon", "M", "Gris", 3000, 4);
const producto005 = new Mercaderia("Camisa", "M", "Amarilla", 1000, 5);
const producto006 = new Mercaderia("Blusa Floreada", "L", "Gris", 4000, 6);
const producto007 = new Mercaderia("Tapado Paris", "M", "Gris y Negro", 20000, 7);
const producto008 = new Mercaderia("Tapado", "M", "Gris", 15000, 8);
const producto009 = new Mercaderia("Pantalon", "M", "Azul", 4000, 9);
const producto010 = new Mercaderia("Remera", "M", "Blanca", 1000, 10);

const productos = [producto001, producto002, producto003, producto004, producto005, producto006, producto007, producto008, producto009, producto010];

console.log(productos);

const titulo1 = document.getElementById("titulo1");

titulo1.innerText = 'Productos Femeninos';

const productosF = document.getElementById("productosF");


productos.forEach(producto => {
    productosF.innerHTML += `
    <div class="card" id="producto${producto.id}" style="width: 18rem;">
        <img src="https://dummyimage.com/250x300/000/fff" class="card-img-top" id="img" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nombre: ${producto.nombre}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Talle: ${producto.talle}</li>
            <li class="list-group-item">Color: ${producto.color}</li>
            <li class="list-group-item">Precio: $${producto.precio}</li>
        </ul>
    </div>
    
    `
})

/*FORMULARIO*/

class User {
    constructor(username, email, number, password) {
        this.username = username
        this.email = email
        this.number = number
        this.password = password
    }
}

const users = []

const formUser = document.getElementById("formUser");

formUser.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let number = document.getElementById("number").value
    let password = document.getElementById('password').value
    const user = new User(username, email, number, password)
    users.push(user)
    console.log(users)
    formUser.reset()
})

const inputColor = document.getElementById("inputColor")



inputColor.addEventListener('input', () => {
    let color = inputColor.value
    document.getElementById("container").style.backgroundColor = color
})

/*ARMANDO MI CARRITO*/
/*let talle = prompt("Ingrese su talle").toLocaleLowerCase;

const carrito = productos.filter((el) => el.talle == talle);
console.log(carrito);



const bruto = carrito.reduce((acc, element) => acc + element.precio, 0)
console.log(bruto)

let tarjeta = prompt("Ingrese su tarjeta").toLowerCase();

const DESC1 = 0.3;
const DESC2 = 0.2;
const DESC3 = 0.15;

function calcularDescuento(descuento) {
    return bruto * descuento;
}


if (tarjeta == "santander") {
    if (bruto >= 3000) {
        const total = carrito.map((el) => {
            return {
                precio: el.precio
            }
        })
        console.log(total)
        const descuento = calcularDescuento(DESC1)
        console.log(bruto - descuento)
    } else {
        console.log("No se le efectura el descuento.")
    }
} else if (tarjeta == "ciudad") {
    if (bruto >= 1000) {
        const total = carrito.map((el) => {
            return {
                precio: el.precio
            }
        })
        console.log(total)
        const descuento = calcularDescuento(DESC2)
        console.log(bruto - descuento)
    } else {
        console.log("No se le efectura el descuento.")
    }
} else if (tarjeta == "frances") {
    if (bruto >= 5000) {
        const total = carrito.map((el) => {
            return {
                precio: el.precio
            }
        })
        console.log(total)
        const descuento = calcularDescuento(DESC3)
        console.log(bruto - descuento)
    } else {
        console.log("No se le efectura el descuento.")
    }
}
*/