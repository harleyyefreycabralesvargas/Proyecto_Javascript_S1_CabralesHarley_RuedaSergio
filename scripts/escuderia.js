const equipos = [
    {
    nombre: "Red Bull Racing",
    pais: "Austria",
    motor: "Honda",
    pilotos: ["Max Verstappen","Sergio Perez"],
    imagen: "https://cdn-6.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg"
    },

    {
    nombre: "Mercedes-AMG Petronas",
    pais: "Alemania",
    motor: "Mercedes",
    pilotos: ["Lewis Hamilton", "George Russel"],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mercedes-Benz_Star.svg/1200px-Mercedes-Benz_Star.svg.png"
    },

    {
    nombre: "Ferrari",
    pais: "Italia",
    motor: "Ferrari",
    pilotos: ["Charles Leclerc", "Carlos Sainz"],
    imagen: "https://img.remediosdigitales.com/96633b/140013_cor/450_1000.jpg"
    },

    {
    nombre: "McLaren",
    pais: "Inglaterra",
    motor: "Mercedes",
    pilotos: ["Lando Norris", "Oscar Piastri"],
    imagen: "https://play-lh.googleusercontent.com/OFYikqwqD_VeGP8edlTN5wet-GCoufba7JppkgpzUBM9c8uwgJiqaqoIjSBecl3vkQ"
    },

    {
    nombre: "Aston Martin",
    pais: "Reino Unido",
    motor: "Mercedes",
    pilotos:["Fernando Alonso", "Lance Stroll"],
    imagen: "https://cdn-5.motorsport.com/images/mgl/0rGRlkm2/s8/aston-martin-logo-2022-1.jpg"
    },

    {
    nombre: "Alpine",
    pais: "Francia",
    motor: "Renault",
    pilotos:["Esteban Ocon", "Pierre Gasly"],
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlgCOHTdPgUDdYPCzhx8ttR1ydkjMht4Vwg&s"
    },

    {
    nombre: "Alfa Romeo",
    pais: "Suiza",
    motor: "Ferrari",
    pilotos:["Valtteri Bottas", "Zhou Guanyu"],
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-SX3AChfKTqFFocL3xVELn1VQjX4Dl82d11_S6_NAb4JFhLqs7oY_7_9Lt8_uAwvAK0&usqp=CAU"
    },

    {
    nombre: "Haas",
    pais: "Estados Unidos",
    motor: "Ferrari",
    pilotos:["Kevin Magnussen", "Nico Hülkenberg"],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Logo_Haas_F1.png/800px-Logo_Haas_F1.png"
    },

    {
    nombre: "Alpha Tauri",
    pais: "Italia",
    motor: "Honda",
    pilotos:["Yuki Tsunoda", "Daniel Ricciardo"],
    imagen: "https://a.espncdn.com/photo/2024/0124/r1281611_1296x729_16-9.jpg"
    },

    {
    nombre: "Williams",
    pais: "Reino Unido",
    motor: "Mercedes",
    pilotos:["Alexander Albon", "Logan Sargeant"],
    imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Logo_Williams_F1.png"
    },
    ];
    
function putpiloto() {
    let link="https://682b2bf7ab2b5004cb396ecf.mockapi.io/informacion/1";
    axios.put(`${link}`, {
        "escuderias":equipos
    })
    .then((response) => {
        console.log(response)
        let daticos=response.data
        console.log(daticos)
        let mostrar=document.getElementById("mostrar_escudos")
        for(let i=0;i<daticos.escuderias.length;i++){
            mostrar.innerHTML+=`
                <img class="logo" src="${daticos.escuderias[i].imagen}" data-id="${i}" onclick="logo_espacio1(this)" >
            `


        }
    })
}
putpiloto();
function mostrarinfo(elemento){
    let link = "https://682b2bf7ab2b5004cb396ecf.mockapi.io/informacion";
    axios.get(link)
    .then((response)=>{
        console.log(response)
        let daticos=response.data
        let id = elemento.getAttribute("data-id")
        let recurso = document.getElementById("logo_espacio")
        console.log(id)
        recurso.style.display = "block";
        recurso.innerHTML = `
        <p>Nombre: ${daticos.escuderias[0].nombre}</p>
        <img class="loguito" src="${daticos.escuderias[id].imagen}">
        <p>País: ${daticos.escuderias[id].país || daticos.escuderias[id].pais} </p>
        <p>Marca del motor: ${daticos.escuderias[id].motor}</p>
        <p>Numero pilotos: ${daticos.escuderias[id].pilotos[0]}, ${daticos.escuderias[id].pilotos[1]}</p>
        `
    })
}
function ocultar(data){
    data.style.display = "none";
}