document.getElementById("entrar").addEventListener("click", function(e){
    e.preventDefault()
    tomar_correo = document.getElementById("correo").value
    tomar_contraseña = document.getElementById("contraseña").value
    console.log(correo)
    console.log(contraseña)
  
})

import datos from '../data/data.json' with { type: 'json' };



let i=0
let usuarios_user ="";
let correo_user = "";
let contrasena_user = "";
for(i=0;i<datos.usuarios.length;i++){
usuarios_user =datos.usuarios[i].usuario
correo_user = datos.usuarios[i].correo
contrasena_user = datos.usuarios[i].contraseña


console.log(usuarios_user);
console.log(correo_user);
console.log(contrasena_user)
}




let o=0
let administradores_admin ="";
let correo_admin = "";
let contrasena_admin = "";
for(o=0;o<datos.administradores.length;o++){
administradores_admin =datos.administradores[o].usuario
correo_admin = datos.administradores[o].correo
contrasena_admin = datos.administradores[o].contraseña


console.log(administradores_admin);
console.log(correo_admin);
console.log(contrasena_admin)
}