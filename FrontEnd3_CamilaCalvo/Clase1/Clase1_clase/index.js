var users = [
    {
      "apodo": "Nepeta",
      "email": "nepetalover123@gmail.com",
      "mascotas": [
        { "nombre": "Luna", "edad": 3, "color": "blanco y negro" },
        { "nombre": "Simba", "edad": 1, "color": "naranja" },
        { "nombre": "Mia", "edad": 5, "color": "gris" }
      ]
    },
    {
      "apodo": "CatLady",
      "email": "catlady999@yahoo.com",
      "mascotas": [
        { "nombre": "Tom", "edad": 2, "color": "gris y blanco" },
        { "nombre": "Lucas", "edad": 4, "color": "negro" }
      ]
    },
    {
      "apodo": "GatitoFeliz",
      "email": "gatitofeliz22@hotmail.com",
      "mascotas": [
        { "nombre": "Cleo", "edad": 1, "color": "marrón" },
        { "nombre": "Toby", "edad": 6, "color": "blanco" },
        { "nombre": "Nina", "edad": 2, "color": "negro y blanco" }
      ]
    },
    {
      "apodo": "ElGatoNegro",
      "email": "elgatonegro@outlook.com",
      "mascotas": [
        { "nombre": "Oreo", "edad": 3, "color": "negro y blanco" },
        { "nombre": "Milo", "edad": 7, "color": "naranja" }
      ]
    },
    {
      "apodo": "GatitoTierno",
      "email": "gatitotierno5555@gmail.com",
      "mascotas": [
        { "nombre": "Pelusa", "edad": 2, "color": "gris" },
        { "nombre": "Kitty", "edad": 4, "color": "blanco y negro" },
        { "nombre": "Loki", "edad": 1, "color": "marrón y blanco" }
      ]
    },
    {
      "apodo": "CatQueen",
      "email": "catqueen8888@hotmail.com",
      "mascotas": [
        { "nombre": "Fluffy", "edad": 5, "color": "blanco y gris" },
        { "nombre": "Sasha", "edad": 2, "color": "marrón y blanco" }
      ]
    },
    {
      "apodo": "Nepeta",
      "email": "nepetaalegre7@yahoo.com",
      "mascotas": [
        { "nombre": "Punky", "edad": 3, "color": "naranja" },
        { "nombre": "Zoe", "edad": 1, "color": "blanco" },
        { "nombre": "Simón", "edad": 4, "color": "negro" }
      ]
    },
    {
      "apodo": "GatoMimoso",
      "email": "gatomimoso55@gmail.com",
      "mascotas": [
        { "nombre": "Leo", "edad": 2, "color": "blanco" },
        { "nombre": "Coco", "edad": 3, "color": "negro y blanco" }
      ]
    }
  ]



const resolucion01 = () => {

//Ej 1    
    // Muestra por consola el `email` del primer Usuario
    console.log(users[0].email)

    // Muestra por consola el `apodo` del tercer Usuario
    console.log(users[2].apodo)

    // Muestra por consola el color de la segunda `mascota` del tercer Usuario
    console.log(users[3].mascotas[1].color)

//Ej 2    
    // Usando desestructuracion extrae en variables el primer y cuarto elemento
    const [first, , , fourth] = users 

    // Usando desestructuracion usando lo obtenido arriba extrae en variables `email` y `mascotas` del primer elemento
    const {email, mascotas} = first

//Ej 3
    // spread operator haz una copia de las `mascotas` obtenidas arriba y agregale la mascota 
    //`{ "nombre": "Nami", "edad": 2, "color": "negro" }`
    //(usar console log para mostrar que no se modifico el original)
    const copiaEj3 = [...mascotas, { "nombre": "Nami", "edad": 2, "color": "negro" }]
    console.log(mascotas,copiaEj3)

//Ej 4
    //crea una funcion que reciba por props un objeto con las siguientes keys: **name**, **cantMascotas** y 
    //que retorne un string con el siguiente formato `"El Usuario {name} tiene {cantMascotas} mascotas"`

//Ej 5
    //usando la operacion `filter`, crea un array con los Usuarios que tengan **mas** de 1 mascota
    //usando la operacion `map` y la funcion anterior, crea un array de strings con el nombre y la cantidad de mascotas de cada Usuario filtrado anteriormente
    // Ej: ```js [ "El Usuario Gaby tiene 3 mascotas", "El Usuario Morgi tiene 5 mascotas"]```
    //Usando la operacion reduce devuelve la cantidad total de mascotas
    

}



export default resolucion01


