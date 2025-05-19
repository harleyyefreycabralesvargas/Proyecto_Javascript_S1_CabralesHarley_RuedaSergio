function gethomo() {
    let link = `https://682b2bf7ab2b5004cb396ecf.mockapi.io/usuarios`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            console.log(response["data"][0]);
        }
    });
}
gethomo();
function postuser(usuario,correo,contrasena,tipo_usuario) {
    let link = `https://682b2bf7ab2b5004cb396ecf.mockapi.io/usuarios`;
    axios.post(link, {
        "usuario": usuario,
        "correo": correo,
        "tipo_usuario": tipo_usuario,
        "contrasena": contrasena,
    })
    .then((response) => {
        console.log(response)
        document.getElementById("formulariologin").reset();
    })
}

document.getElementById("formulariologin").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("xd")
    let usuario = document.getElementById("usuario").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contraseña").value;
    let tipo_usuario = "usuario";
    postuser(usuario,correo,contrasena,tipo_usuario);
})


// function posthomo(nombre_personaje, nombre_actor, edad, ubicacion, poster, fecha_de_nacimiento, compania,iterador) {
//     let link = `https://682b2bf7ab2b5004cb396ecf.mockapi.io/usuarios`;
//     axios.post(link, {
//         "Name": nombre_personaje,
//         "Actor": nombre_actor,
//         "Age": edad,
//         "Location": ubicacion,
//         "Poster":poster,
//         "Date":fecha_de_nacimiento,
//         "Company":compania,
//         "Skin":[iterador]
        
//     })
//     .then((response) => {
//         console.log(response)
//         document.getElementById("formularioHeroe").reset();
//     })
// }
// document.getElementById("formularioHeroe").addEventListener("submit", function(e) {
//     e.preventDefault();

//     let nombre_personaje = document.getElementById("personaje").value;
//     let nombre_actor = document.getElementById("actor").value;
//     let edad = document.getElementById("edad").value;
//     let ubicacion = document.getElementById("ubicacion").value;
//     let poster = document.getElementById("poster").value;
//     let fecha_de_nacimiento = document.getElementById("fecha").value;
//     let compania = document.getElementById("productora").value;
//     let count = 0;
//     let iterador = {};

//     for (let i = 1; document.getElementById(`numerito_${i}`) !== null; i++) {
//         count++;
//         let elemento = document.getElementById(`numerito_${i}`);

//         iterador += {i:elemento.value}
//     }

//     posthomo(nombre_personaje, nombre_actor, edad, ubicacion, poster, fecha_de_nacimiento, compania, iterador);
// });
// let numerito = 0;
// document.getElementById("boton_mas").addEventListener("click", function(e) {
//     e.preventDefault();
//     numerito++;

//     let nuevo = document.getElementById("registro_trajes");

//     let xd = `<br>
//     <div class="traje_nuevo">
//             <p>Nombre traje</p>
//             <input id="numerito_${numerito}"type="text">
//             <button type="button" class="eliminar">-</button>}
//     </div>`;
//     nuevo.insertAdjacentHTML("beforeend", xd);
// });

// function posthomo2(name_skins){
//     let skinzzz = name_skins
// }