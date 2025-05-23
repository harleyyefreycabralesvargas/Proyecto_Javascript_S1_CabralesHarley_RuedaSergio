

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
let h=1;
console.log("yaaaa")
let link_incio=document.getElementById("redirecciones")
            link_incio.innerHTML=` 
            
            <div id="redirecciones">
            <button class="boton" type="button" id="entrar"><a class="text_boton" href="./index_login.html"><p class="text_boton">Entrar</p></a></button>
            <p class="text_Register">Si no tienes cuenta, crea una ||</p>
            <a href="./index_register.html">
                <p class="create_account">Crear cuenta</p>
            </a>
            </div>`
for(i=0;i<daticos.length ;i++){
    console.log(daticos[i].correo)
    correo_userc = daticos[i].correo;
    let ñ=0
    let a="";
    let usuarios_user ="";
    let correo_user ="";
    let contrasena_user = "";
    if(correo_userc ==tomar_correo1){
        h=h+1
        a=i
        usuarios_user =daticos[a].tipo_usuario;
        correo_user = daticos[a].correo;
        contrasena_user = daticos[a].contrasena;
        console.log(usuarios_user);
        console.log(correo_user);
        console.log(contrasena_user);
        if(tomar_correo1== correo_user && usuarios_user=="user"){
            if(tomar_contraseña1==contrasena_user){
            h=1
            console.log("tomaron los datos para verificar user")
            let link_incio=document.getElementById("redirecciones")
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
                console.log("probar si es admin")
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
            console.log("no existe")
            let link_incio=document.getElementById("redirecciones")
            link_incio.innerHTML=` 
            <div id="redirecciones">
            <button class="boton" type="button" id="entrar"><a class="text_boton" href="./index_login.html"><p class="text_boton">Entrar</p></a></button>
            <p class="text_Register">Si no tienes cuenta, crea una ||</p>
            <a href="./index_register.html">
                <p class="create_account">Crear cuenta</p>
            </a>
            </div>`
        }
    }
    else{
        h=h+1
       
    }
}




        
            
        
    }})};



document.getElementById("contraseña").addEventListener("input",function(){
    if(this.value !==""){
        let tomar_correo1=document.getElementById("correo").value
        let tomar_contraseña1 = document.getElementById("contraseña").value
        console.log(tomar_contraseña1)
        console.log(tomar_correo1)
        getusuarios(tomar_correo1, tomar_contraseña1)
    }})