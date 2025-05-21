function getusuarios(usuario,correo,tipo_usuario,contrasena) {
    let link = `https://682b2bf7ab2b5004cb396ecf.mockapi.io/usuarios`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            console.log(response["data"][0]);
            let confirm_user = ""
            let confirm_correo = ""
            for(let i=0;i<response.data.length;i++){
                if (response.data[i]["usuario"]==usuario || response.data[i]["correo"]==correo){
                    confirm_user = response.data[i]["usuario"]
                    confirm_correo = response.data[i]["correo"]
                }
            }
            if (confirm_user=="" && confirm_correo==""){
                console.log(confirm_correo)
                console.log(confirm_user)
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
            } else{
                alert("Correo o usuario repetido")
            }
        
        }
        })
};


document.getElementById("formulariologin").addEventListener("submit",async function(e) {
    e.preventDefault();
    console.log("xd")
    let usuario = document.getElementById("usuario").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contraseña").value;
    let tipo_usuario = "user";
    getusuarios(usuario,correo,tipo_usuario,contrasena)
})