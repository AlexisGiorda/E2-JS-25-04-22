const pizzas = [
    {
        "id":1,
        "nombre":"cuatro quesos",
        "ingredientes":["Roquefort","Parmesano","Mozzarella","Cheddar"],
        "precio":800,
    },
    {
        "id":2,
        "nombre":"Jamon y morron",
        "ingredientes":["Jamon","Morron","Mozzarella"],
        "precio":595,
    },
    {
        "id":3,
        "nombre":"Margarita",
        "ingredientes":["Albahaca","Mozzarella","Tomate"],
        "precio":850,
    },
    {
        "id":4,
        "nombre":"Hawaiana",
        "ingredientes":["Mozzarella","Anana","Jamon"],
        "precio":750,
    },
    {
        "id":5,
        "nombre":"Napolitana",
        "ingredientes":["Tomate","Mozzarella","Ajo"],
        "precio":570,
    },
    {
        "id":6,
        "nombre":"Fugazzeta",
        "ingredientes":["Muzzarella","Cebolla"],
        "precio":800,
    }
]

const pizzasImpares=[];
const pizzasBarata = [];
const nombrePizzas =[];
const precioPizzas =[];

for (i=0;i<pizzas.length;i++){
    if(pizzas[i].id % 2 !== 0){
        pizzasImpares.push(pizzas[i].id);
    }
}   

for (i=0;i<pizzas.length;i++){
    if(pizzas[i].precio < 600){
        pizzasBarata.push(pizzas[i].nombre);
    }
}   

for (i=0;i<pizzas.length;i++){
    nombrePizzas.push(pizzas[i].nombre);
}   

for (i=0;i<pizzas.length;i++){
    precioPizzas.push(pizzas[i].precio);
}   

console.log("Las pizzas con ID impar son: "+pizzasImpares+".",
"Las pizzas con valor menor a 600 son: "+pizzasBarata+".",
"Las pizzas disponibles son: "+nombrePizzas+".",
"Los precios son: "+precioPizzas+".",
);
for (i=0;i<pizzas.length;i++){
    console.log(pizzas[i].nombre +" "+pizzas[i].precio+" pesos");
}   