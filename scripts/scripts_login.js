

function getusuarios(tomar_correo1, tomar_contraseña1){
    let link = `https://682b2bf7ab2b5004cb396ecf.mockapi.io/usuarios`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            console.log(response["data"][0]);
            let daticos=response.data;
            let i=0

let correo_userc = "";

for(i=0;i<daticos.length;i++){

    correo_userc = daticos[i].correo;

    let a="";
    if(correo_userc ==tomar_correo1){
        a=i
        let usuarios_user =daticos[a].tipo_usuario
        let correo_user = daticos[a].correo
        let contrasena_user = daticos[a].contrasena
        console.log(usuarios_user);
        console.log(correo_user);
        console.log(contrasena_user)
        if(tomar_correo1==correo_user && usuarios_user=="user"){
            console.log("tomaron los datos para verificar user")
            let link_incio=document.getElementById("redirecciones")
                link_incio.innerHTML=`  
            <div id="redirecciones">
            <button class="boton" type="button" id="entrar"><a class="text_boton" href="./menu_opciones_user.html"><p class="text_boton">Entrar user</p></a></button>
            <p class="text_Register">Si no tienes cuenta, crea una ||</p>
            <a href="./index_register.html">
                <p class="create_account">Crear cuenta</p>
            </a>
            </div>`
            }
        else if(tomar_correo1==correo_user && usuarios_user=="admin"){
            if(tomar_contraseña1==contrasena_user){
                let link_incio=document.getElementById("redirecciones")
                console.log("probar si es admin")
                link_incio.innerHTML=`  
                
                    <div id="redirecciones">
                    <button class="boton" type="button" id="entrar"><a class="text_boton" href="./menu_opciones_admin.html"><p class="text_boton">Entrar admin</p></a></button>
                    <p class="text_Register">Si no tienes cuenta, crea una ||</p>
                    <a href="./index_register.html">
                        <p class="create_account">Crear cuenta</p>
                    </a>
                    </div>`
            }
        }
        else{
            console.log("no existe")
            let link_incio=document.getElementById("redirecciones")
            link_incio.innerHTML=` 
            
            <div id="redirecciones">
            <h1>correo o contraseña incorrectos</h1>
            <button class="boton" type="button" id="entrar"><a class="text_boton" href=""><p class="text_boton">no Entrar</p></a></button>
            <p class="text_Register">Si no tienes cuenta, crea una ||</p>
            <a href="./index_register.html">
                <p class="create_account">Crear cuenta</p>
            </a>
            </div>`
        }
    }





        
            
        
    }
    }
})};








// 
// let o=0
// let administradores_admin ="";
// let correo_admin = "";
// let contrasena_admin = "";
// for(o=0;o<daticos.administradores.length;o++){
// administradores_admin =daticos.administradores[o].usuario
// correo_admin = daticos.administradores[o].correo
// contrasena_admin = daticos.administradores[o].contraseña
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
        getusuarios(tomar_correo1, tomar_contraseña1)
    }})