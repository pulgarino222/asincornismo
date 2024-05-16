console.log(`uno`)
console.log(`dos`)
// setTimeout(() => {
// //     alert("hola mundo")
// // }, 10000);

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
    name:"lemguajes de programacion777",
    image:"https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg",
}





const btn=document.querySelector("#btn-enviar")
btn.addEventListener("click",eliminar)


async function enviarDatosALaAppi(){
    await fetch("https://api.escuelajs.co/api/v1/categories",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newCategory)
    })
    
    
} 

async function eliminar(){
    let id=prompt("ingrese el id de la categoria que quieres eliminar")
    await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`,{
        method:"DELETE",
            headers:{
                "content-type":"application/json"
            },
    })
    location.reload()
}
