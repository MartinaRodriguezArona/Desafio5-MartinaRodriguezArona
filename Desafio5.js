const productos = ["PC","Mouse","Teclado","Monitor"]

for(let i = 0; i < productos.length; i++ ) {
    console.log("producto " + (i + 1) + " : " + productos[i])
}

let productoVendido = productos.pop()

console.log("se vendio " + productoVendido)

for(let i = 0; i < productos.length; i++ ) {
    console.log("producto " + (i + 1) + " : " + productos[i])
}