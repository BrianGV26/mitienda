// -----------------------------
// Arreglo de productos
// -----------------------------
const productos = [
    { id: 1, nombre: "Audífonos", precio: 60, imagen: "imagenes/p1.jpg" },
    { id: 2, nombre: "Teclado", precio: 120, imagen: "imagenes/p2.jpg" },
    { id: 3, nombre: "Mouse Gamer", precio: 80, imagen: "imagenes/p3.jpg" },
    { id: 4, nombre: "Monitor", precio: 750, imagen: "imagenes/p4.jpg" },
    { id: 5, nombre: "Laptop", precio: 2500, imagen: "imagenes/p5.jpg" }
];

let carrito = [];

// -----------------------------
// Mostrar catálogo
// -----------------------------
function cargarCatalogo() {
    const contenedor = document.getElementById("catalogo");
    contenedor.innerHTML = "";
 al carrito
                </button>
            </div>
        `;
    });
}

cargarCatalogo();

// -----------------------------
// Agregar producto al carrito
// -----------------------------
function agregarProducto(id) {
    const producto = productos.find(p => p.id === id);
    const existe = carrito.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    actualizarCarrito();
}

// -----------------------------
// Actualizar carrito
// -----------------------------
function actualizarCarrito() {
    document.getElementById("cantidadCarrito").textContent = carrito.length;

    const detalle = document.getElementById("detalleCarrito");
    detalle.innerHTML = "";

    let total = 0;

    carrito.forEach((item, index) => {
        let subtotal = item.precio * item.cantidad;
        total += subtotal;

        detalle.innerHTML += `
            <div class="item-carrito">
                <span>${item.nombre} x ${item.cantidad}</span>
                <span>S/ ${subtotal}</span>
                <button onclick="eliminarProducto(${index})">X</button>
            </div>
        `;
    });

    document.getElementById("totalPagar").textContent = total.toFixed(2);
}

// -----------------------------
// Eliminar producto
// -----------------------------
function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// -----------------------------
// Pago
// -----------------------------
function realizarPago() {
    const metodo = document.getElementById("metodoPago").value;

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    if (metodo === "") {
        alert("Seleccione un método de pago");
        return;
    }

    alert(`Pago realizado con ${metodo}. Gracias por su compra`);

    carrito = [];
    actualizarCarrito();
    cerrarCarrito();
}

// -----------------------------
// Control del modal
// -----------------------------
function abrirCarrito() {
    document.getElementById("modalCarrito").style.display = "block";
}

function cerrarCarrito() {
    document.getElementById("modalCarrito").style.display = "none";
}

