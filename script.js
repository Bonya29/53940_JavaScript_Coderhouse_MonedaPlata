let dolar = 1000
let real = 100
let euro = 1100
let fullname
let age
let doc
let currency
let quantity
let total
let confirmation

alert("Bienvenido a nuestra casa de cambio 'Moneda de Plata'")
function Information() {
    alert ("Por favor, ingrese los siguientes datos.")
    while (!fullname) {
        fullname = prompt("Nombre y apellido:")
    }
    while (!age) {
        age = prompt("Edad:")
    }
    while (!doc) {
        doc = prompt("Documento:")
    }
}
Information()

function Verification() {
    if (age < 18) {
        alert("Lo sentimos, usted no tiene la edad suficiente para realizar compra de divisas.")
    } else {
        alert("Bienvenido, " + fullname)
    }
}
Verification()

function CurrencySelector() {
    if (age > 17) {
        while (currency != "0" && currency != "1" && currency != "2") {
            currency = prompt("Que divisa desea comprar? \n0: Euros \n1: Dolares \n2: Reales")
        switch (currency) {
            case "0":
                quantity = parseFloat(prompt("Cuantos euros desea comprar? \n1Euro = $1100"))
                total = quantity * euro
                break;
            case "1":
                quantity = parseFloat(prompt("Cuantos dolares desea comprar? \n1Dolar = $1000"))
                total = quantity * dolar
                break;
            case "2":
                quantity = parseFloat(prompt("Cuantos reales desea comprar? \n1Real = $100"))
                total = quantity * real
                break;
            default:
                alert("No a seleccionado ninguna de nuestras divisas disponible")
            }
        }
    }
}
CurrencySelector()

function Confirmation(){
    if (currency == "0") {
        alert("Usted estaria comprando " + quantity + " euros al valor de $" + total)
                confirmation = prompt("Si desea realizar el pedido de compra ingrese 1. \nSi desea cancelar la compra, ingrese cualquier numero.")
                if (confirmation == "1"){
                    alert("Muchas gracias, se realizo su pedido de compra de " + quantity + " euros al precio de $" + total)
                } else {
                    alert("Compra cancelada, hasta luego.")
                }
    } else if (currency == "1") {
        alert("Usted estaria comprando " + quantity + " dolares al valor de $" + total)
                confirmation = prompt("Si desea realizar el pedido de compra ingrese 1. \nSi desea cancelar la compra, ingrese cualquier numero.")
                if (confirmation == "1"){
                    alert("Muchas gracias, se realizo su pedido de compra de " + quantity + " dolares al precio de $" + total)
                } else {
                    alert("Compra cancelada, hasta luego.")
                }
    } else if (currency == "2") {
        alert("Usted estaria comprando " + quantity + " reales al valor de $" + total)
                confirmation = prompt("Si desea realizar el pedido de compra ingrese 1. \nSi desea cancelar la compra, ingrese cualquier numero.")
                if (confirmation == "1"){
                    alert("Muchas gracias, se realizo su pedido de compra de " + quantity + " dolares al precio de $" + total)
                } else {
                    alert("Compra cancelada, hasta luego.")
                }
    }
}
Confirmation()

