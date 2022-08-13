

const botonDark = document.getElementById('botonDarkMode')
const botonLight = document.getElementById('botonLightMode')

let darkMode

if(localStorage.getItem('darkMode')) { //Si existe el local storage
    darkMode = localStorage.getItem('darkMode') //Consulto el local storage
} else {
    localStorage.setItem('darkMode', "light") //Crearlo
}

if(darkMode == "dark") {
    document.body.classList.add("darkMode")
}

botonDark.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#000"
    //document.body.style.color = "#fff"
    document.body.classList.add("darkMode")
    localStorage.setItem('darkMode', "dark")
})

botonLight.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#fff"
    //document.body.style.color = "#000"
    document.body.classList.remove("darkMode")
    localStorage.setItem('darkMode', "light")
})






/*LISTADO DE PRODUCTOS */
class Mercaderia {
    constructor(nombre, talle, color, precio, id, img) {
        this.nombre = nombre;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
        this.id = id;
        this.img = img;
    }
}

const producto001 = new Mercaderia("Pollera Cuadrille", "M", "Negro", 24000, 1, "https://i.pinimg.com/564x/c4/33/0c/c4330caf67c714d6d52c83302ff4f7c2.jpg");
const producto002 = new Mercaderia("Campera Adidas", "S", "Bordo", 7000, 2, "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe5310d80d6447faa4e0a92e00d74387_9366/Polera_con_Capucha_Essentials_3_Tiras_Negro_DP2419_01_laydown.jpg");
const producto003 = new Mercaderia("Remera Adidas Clasic", "M", "Rosa bebe", 3000, 3, "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c304ae0460e4b189f76ad9e011c149a_9366/Polo_de_algodon_Essentials_Print_Logo_Rosado_HA1224_21_model.jpg");
const producto004 = new Mercaderia("Vestido Jean", "M", "Negro", 3000, 4, "https://i.pinimg.com/564x/5d/72/e6/5d72e6ebb85bfdd074af576c33228a57.jpg");
const producto005 = new Mercaderia("Blusa", "S", "Celeste", 2000, 5, "https://i.pinimg.com/564x/4c/6a/79/4c6a7947261cf9211920fcf4315a05bd.jpg");
const producto006 = new Mercaderia("Top Deportivc", "L", "Negro", 4000, 6, "https://i.pinimg.com/564x/43/c7/68/43c768c5c6fc4a6d618311e5933aa41d.jpg");
const producto007 = new Mercaderia("Top tiras", "M", "Blanco", 20000, 7, "https://i.pinimg.com/564x/8f/3a/85/8f3a85df34034425a513b29eca34d1ed.jpg");
const producto008 = new Mercaderia("Shorts Deportivo", "M", "Rosa bebe", 15000, 8, "https://i.pinimg.com/564x/4b/b2/fd/4bb2fd77dfab201b8254305d63bfbc26.jpg");
const producto009 = new Mercaderia("Top cross", "M", "Blanco", 4000, 9, "https://i.pinimg.com/564x/a6/03/1d/a6031dcda91ced4a8856cd8cd2c3540b.jpg");
const producto010 = new Mercaderia("Top", "S", "Rosa Bebe", 3000, 10, "https://i.pinimg.com/564x/e4/6b/ad/e46bad6e0b93a34a8451d5e22be71741.jpg");

const productos = [producto001, producto002, producto003, producto004, producto005, producto006, producto007, producto008, producto009, producto010];

console.log(productos);

const titulo1 = document.getElementById("titulo1");

titulo1.innerText = 'Productos Femeninos';

const productosF = document.getElementById("productosF");


productos.forEach(producto => {
    productosF.innerHTML += `
    <div class="card" id="producto${producto.id}" style="width: 18rem;">
        <img src=${producto.img} class="card-img-top" id="img" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Talle: ${producto.talle}</li>
            <li class="list-group-item">Color: ${producto.color}</li>
            <li class="list-group-item">Precio: $${producto.precio}</li>
        </ul>
        <button type="submit" id="botonC" class="btn btn-primary mb-3">Agregar al carrito</button>
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


localStorage.setItem('usuario', JSON.stringify([User]))

const array= JSON.parse(localStorage.getItem('usuario'))

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