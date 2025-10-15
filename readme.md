# Proyecto de Gestión de Productos

Interactúa con la API de Fake Store para crear, listar, actualizar y eliminar productos desde Node.js.

## Uso de Comandos

- Listo todos los productos:  
node app.js GET products

- Obtengo producto por ID:  
node app.js GET products/5

- Agrego producto:  
node app.js POST products "Nombre" 100 "Categoría"

- Actualizo producto:  
node app.js PUT products/5 "Nombre" 150 "Categoría"

- Elimino producto:  
node app.js DELETE products/5

## Tecnologías

Node.js, JavaScript, Fetch API.