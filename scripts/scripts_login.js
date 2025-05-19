

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



// 
// let o=0
// let administradores_admin ="";
// let correo_admin = "";
// let contrasena_admin = "";
// for(o=0;o<datos.administradores.length;o++){
// administradores_admin =datos.administradores[o].usuario
// correo_admin = datos.administradores[o].correo
// contrasena_admin = datos.administradores[o].contraseña
// 
// 
// console.log(administradores_admin);
// console.log(correo_admin);
// console.log(contrasena_admin)
// }


document.getElementById("contraseña").addEventListener("input",function(){
    if(this.value !==""){
        let tomar_correo1=document.getElementById("correo").value
        let tomar_contraseña1 = document.getElementById("contraseña").value
        console.log(tomar_contraseña1)
        console.log(tomar_correo1)

let i=0
let usuarios_user ="";
let correo_user = "";
let contrasena_user = "";
for(i=0;i<datos.usuarios.length;i++){
usuarios_user =datos.usuarios[i].tipo_usuario
correo_user = datos.usuarios[i].correo
contrasena_user = datos.usuarios[i].contraseña


console.log(usuarios_user);
console.log(correo_user);
console.log(contrasena_user)


        if(tomar_correo1==correo_user && usuarios_user=="usuario"){
            console.log("xd")
            if(tomar_contraseña1==contrasena_user){
                console.log("tttt")
                let link_incio=document.getElementById("redirecciones")
                console.log(link_incio)
                link_incio.innerHTML=`  
            <div id="redirecciones">
            <button class="boton" type="button" id="entrar"><a class="text_boton" href="./menu_opciones_user.html"><p class="text_boton">Entrar</p></a></button>
            <p class="text_Register">Si no tienes cuenta, crea una ||</p>
            <a href="./index_register.html">
                <p class="create_account">Crear cuenta</p>
            </a>
            </div>`
            }
            }
            else if(tomar_correo1==correo_user && usuarios_user=="admin"){
                if(tomar_contraseña1==contrasena_user){
                let link_incio=document.getElementById("redirecciones")
                console.log(link_incio)
                link_incio.innerHTML=`  
            <div id="redirecciones">
            <button class="boton" type="button" id="entrar"><a class="text_boton" href="./menu_opciones_admin.html"><p class="text_boton">Entrar</p></a></button>
            <p class="text_Register">Si no tienes cuenta, crea una ||</p>
            <a href="./index_register.html">
                <p class="create_account">Crear cuenta</p>
            </a>
            </div>`
                }
            }
            
            else{
                console.log("ssss")
                let link_incio=document.getElementById("redirecciones")
                link_incio.innerHTML=` 
                
                <div id="redirecciones">
                <h1>correo o contraseña incorrectos</h1>
                <button class="boton" type="button" id="entrar"><a class="text_boton" href="./index.html"><p class="text_boton">Entrar</p></a></button>
                <p class="text_Register">Si no tienes cuenta, crea una ||</p>
                <a href="./index_register.html">
                    <p class="create_account">Crear cuenta</p>
                </a>
                </div>`
            }
            
        
    }
    }
});
