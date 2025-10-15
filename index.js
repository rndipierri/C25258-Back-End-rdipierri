// console.log(process.argv);
// const metodo = process.argv[2];
// const recurso = process.argv[3];
// console.log(metodo, recurso);

let [, , metodo, recurso, ...parametros] = process.argv;

// Normalizar las entradas para evitar errores de mayúsculas o minúsculas
metodo = metodo.toUpperCase();
recurso = recurso.toLowerCase();

if (metodo === "DELETE" && recurso.startsWith("products/")) {
  const id = parseInt(recurso.split("/")[1]);

  // Llamado a la API elimino un producto
  fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })
    .then(res => res.json())
    .then(data => console.log("Producto eliminado:", data))
    .catch(err => console.log("Error al eliminar:", err));
}

if (metodo === "PUT" && recurso.startsWith("products/")) {
  const id = parseInt(recurso.split("/")[1]);
  const [titulo, precio, categoria] = parametros;

  const producto = { title: titulo, price: precio, category: categoria };

  // Actualizo un producto 
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  })
    .then(res => res.json())
    .then(data => console.log("Producto actualizado:", data))
    .catch(err => console.log("Error al actualizar:", err));
}

if (metodo === "POST" && recurso === "products") {
  const [titulo, precio, categoria] = parametros;
  const producto = { title: titulo, price: precio, category: categoria };

  // Agrego un nuevo producto
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  })
    .then(res => res.json())
    .then(data => console.log("Producto agregado:", data))
    .catch(err => console.log("Error al agregar:", err));
}

if (metodo === "GET" && recurso.startsWith("products/")) {
  const id = parseInt(recurso.split("/")[1]);

  if (isNaN(id) || id <= 0) {
    console.log("El ID ingresado no es válido");
  } else {
    // Obtiene un producto por su ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => console.log("Producto encontrado:", data))
      .catch(err => console.log("Error al obtener el producto:", err));
  }
}

if (metodo === "GET" && recurso === "products") {
  // Obtiene todos los productos
  const respuesta = await fetch("https://fakestoreapi.com/products");
  const datos = await respuesta.json();
  console.log("Listado de productos:", datos);
}


