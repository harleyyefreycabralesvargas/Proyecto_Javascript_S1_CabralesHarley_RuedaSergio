function getusuarios(){
    let link = `https://682b2bf7ab2b5004cb396ecf.mockapi.io/informacion/1`;
    axios.get(link)
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            let daticos=response.data;
            let i=0


for(i=0;i<daticos.pilotos.length ;i++){
    
    let link_incio=document.getElementById("contenedor_pilotos")
    link_incio.innerHTML+=` 
    <div class="background_card">
    <p class="nombre_piloto">${daticos.pilotos[i].nombre}</p>
    <p class="cargo">${daticos.pilotos[i].rol}</p>
    <p class="team">${daticos.pilotos[i].equipo}</p>
    <img src="${daticos.pilotos[i].imagen_coche}" alt="" class="coche">
    <img src="${daticos.pilotos[i].imagen_piloto}" alt="" class="piloto">
</div>`
        
    }
}
}
    )
}
    getusuarios();
