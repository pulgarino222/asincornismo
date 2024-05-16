console.log(`uno`)
console.log(`dos`)
setTimeout(() => {
    alert("hola mundo")
}, 10000);

console.log(`tres`)
console.log(`cuatro`)
console.log(`cinco`)


async function llamadoAunaApi(){
    //la url es el endpoint
    const respuesta =await fetch("https://api.escuelajs.co/api/v1/categories")
    const datos = await  respuesta.json()
    console.log(datos)
    for (let i = 0; i < datos.length; i++){
        table.innerHTML +=

        
        `
        
        <tbody>
      
        <th scope="row">${datos[i].id}</th>
        <td>${datos[i].name}</td>
        <td><img src=${datos[i].image}></td>
        <td>${datos[i].creationAt}</td>
        <td>${datos[i].updatedAt}</td>
      </tr>
    `    
        
    }

    
    
}

llamadoAunaApi()


let table =document.querySelector(".table")
console.log(table)

const newCategory={
    nombre:"lemguajes de programacion",
    imagen:"https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg",
}


btn=document.querySelector("#btn-enviar")
addEventListener("click",()=>enviarDatosALaAppi())


function enviarDatosALaAppi(){
    alert("hola mundo")
    
} 

