const circuitos = [
    {
    nombre: "Circuito de Mónaco",
    pais: "Francia",
    longitud_km: 3.34,
    vueltas: 78,
    descripcion: "Uno de los circuitos más prestigiosos y difíciles del calendario, conocido por sus calles angostas yla falta de zonas de adelantamiento.",
    record_vuelta: { tiempo: "1:10.166", piloto: "Lewis Hamilton", año: 2019 },
    imagen: "https://s03.s3c.es/imag/_v0/770x420/d/8/2/Circuito-Montecarlo.jpg"
    },


    {
    nombre: "Silverstone",
    pais: "Reino Unido",
    longitud_km: 5.89,
    vueltas: 52,
    descripcion: "Uno de los circuitos más rápidos del calendario, con curvas de alta velocidad como Maggotts yBecketts.",
    record_vuelta: { tiempo: "1:27.097", piloto: "Max Verstappen", año: 2020 },
    imagen: "https://img2.51gt3.com/rac/article/202412/c9159132d5fc40c2b246e1869299f1bc.jpg"
    },


    {
    nombre: "Circuito de Spa-Francorchamps",
    pais: "Bélgica",
    longitud_km: 7.00,
    vueltas: 44,
    descripcion: "Famoso por la curva Eau Rouge y la larga recta de Kemmel, un circuito donde la potencia delmotor es clave.",
    record_vuelta: { tiempo: "1:46.286", piloto: "Valtteri Bottas", año: 2018 },
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPRy_uQ0N7n26LHRUdpMOUVt4f9EP-FChiQ&s"
    },


    {
    nombre: "Circuito de Monza",
    pais: "Italia",
    longitud_km: 5.79,
    vueltas: 53,
    descripcion: "Conocido como 'El Templo de la Velocidad', Monza es el circuito más rápido del calendario conlargas rectas y chicanes icónicas.",
    record_vuelta: { tiempo: "1:21.046", piloto: "Rubens Barrichello", año: 2004 },
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG12AG7RUQ5y0vET3pYdff912eTnDh9AGluA&s"
    },


    {
    nombre: "Interlagos",
    pais: "Brasil",
    longitud_km: 4.31,
    vueltas: 71,
    descripcion: "Interlagos es un circuito legendario con cambios de elevación y un trazado técnico que ha sidosede de algunas de las carreras más emocionantes de la historia.",
    record_vuelta: { tiempo: "1:10.540", piloto: "Valtteri Bottas", año: 2018 },
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OtWY9DSBchQ-HqbY1fjc1iVZDILEJm-Vlw&s"
    },


    {
    nombre: "Circuito de Yas Marina",
    pais: "Emiratos Árabes Unidos",
    longitud_km: 5.28,
    vueltas: 58,
    descripcion: "Ubicado en Abu Dhabi, es famoso por ser el circuito donde se definen muchos campeonatos, conun diseño moderno y una espectacular carrera nocturna.",
    record_vuelta: { tiempo: "1:39.283", piloto: "Lewis Hamilton", año: 2019 },
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GJdCSc28ytty2J_sNmKoO9ooyo66qyUISQ&s"
    },

    ];
function putcircuito() {
    let link="https://682b2bf7ab2b5004cb396ecf.mockapi.io/informacion/1";
    axios.put(`${link}`, {
        "circuitos":circuitos
    })
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            let daticos=response.data;
            let i=0


for(i=0;i<daticos.circuitos.length ;i++){
    
    let mostrar=document.getElementById("circuitos")
    mostrar.innerHTML+=` 
    <div class="imagen_click">
    <img id="imagen_circuito${i}" src="${daticos.circuitos[i].imagen}" alt="" class="circuito"">
    <p class="nombre_circuito"> ${daticos.circuitos[i].nombre}</p>
</div>`
    }
    document.getElementById(`imagen_circuito0`).addEventListener("click",function(){
        let infi_adc=document.getElementById("todo")
        infi_adc.innerHTML=`
        <div class="container_circuito">
        <img src="${daticos.circuitos[0].imagen}" alt="" class="imagen_click">
        <p class="nombre_circuito_card">Circuito: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[0].nombre}</span></p>
        <p class="nombre_pais_card">Pais: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[0].pais}</span></p>
        <p class="descripcion_card">Descripcion: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[0].descripcion}</span></p>
        <p class="num_vueltas">Vueltas: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[0].vueltas}</span></p>
        <p class="longitud">Longitud KM: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[0].longitud_km} KM</span></p>
        <p class="record">Record de vuelta: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[0].record_vuelta.tiempo}, ${daticos.circuitos[0].record_vuelta.piloto}, ${daticos.circuitos[0].record_vuelta.año}.</span></p>
        <a class="link" href="./menu_circuitos.html" >atras</a>
        </div>
        `
    
    
    })
    document.getElementById(`imagen_circuito1`).addEventListener("click",function(){
        let infi_adc=document.getElementById("todo")
        infi_adc.innerHTML=`
        <div class="container_circuito">
        <img src="${daticos.circuitos[1].imagen}" alt="" class="imagen_click">
        <p class="nombre_circuito_card">Circuito: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[1].nombre}</span></p>
        <p class="nombre_pais_card">Pais: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[1].pais}</span></p>
        <p class="descripcion_card">Descripcion: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[1].descripcion}</span></p>
        <p class="num_vueltas">Vueltas: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[1].vueltas}</span></p>
        <p class="longitud">Longitud KM: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[1].longitud_km} KM</span></p>
        <p class="record">Record de vuelta: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[1].record_vuelta.tiempo}, ${daticos.circuitos[1].record_vuelta.piloto}, ${daticos.circuitos[1].record_vuelta.año}.</span></p>
        <a class="link" href="./menu_circuitos.html" >atras</a>
        </div>
        `
    
    
    })
    document.getElementById(`imagen_circuito2`).addEventListener("click",function(){
        let infi_adc=document.getElementById("todo")
        infi_adc.innerHTML=`
        <div class="container_circuito">
        <img src="${daticos.circuitos[2].imagen}" alt="" class="imagen_click">
        <p class="nombre_circuito_card">Circuito: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[2].nombre}</span></p>
        <p class="nombre_pais_card">Pais: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[2].pais}</span></p>
        <p class="descripcion_card">Descripcion: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[2].descripcion}</span></p>
        <p class="num_vueltas">Vueltas: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[2].vueltas}</span></p>
        <p class="longitud">Longitud KM: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[2].longitud_km} KM</span></p>
        <p class="record">Record de vuelta: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[2].record_vuelta.tiempo}, ${daticos.circuitos[2].record_vuelta.piloto}, ${daticos.circuitos[2].record_vuelta.año}.</span></p>
        <a class="link" href="./menu_circuitos.html" >atras</a>
        </div>
        `
    
    
    })
    document.getElementById(`imagen_circuito3`).addEventListener("click",function(){
        let infi_adc=document.getElementById("todo")
        infi_adc.innerHTML=`
        <div class="container_circuito">
        <img src="${daticos.circuitos[3].imagen}" alt="" class="imagen_click">
        <p class="nombre_circuito_card">Circuito: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[3].nombre}</span></p>
        <p class="nombre_pais_card">Pais: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[3].pais}</span></p>
        <p class="descripcion_card">Descripcion: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[3].descripcion}</span></p>
        <p class="num_vueltas">Vueltas: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[3].vueltas}</span></p>
        <p class="longitud">Longitud KM: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[3].longitud_km} KM</span></p>
        <p class="record">Record de vuelta: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[3].record_vuelta.tiempo}, ${daticos.circuitos[3].record_vuelta.piloto}, ${daticos.circuitos[3].record_vuelta.año}.</span></p>
        <a class="link" href="./menu_circuitos.html" >atras</a>
        </div>
        `
    
    
    })
    document.getElementById(`imagen_circuito4`).addEventListener("click",function(){
        let infi_adc=document.getElementById("todo")
        infi_adc.innerHTML=`
        <div class="container_circuito">
        <img src="${daticos.circuitos[4].imagen}" alt="" class="imagen_click">
        <p class="nombre_circuito_card">Circuito: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[4].nombre}</span></p>
        <p class="nombre_pais_card">Pais: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[4].pais}</span></p>
        <p class="descripcion_card">Descripcion: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[4].descripcion}</span></p>
        <p class="num_vueltas">Vueltas: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[4].vueltas}</span></p>
        <p class="longitud">Longitud KM: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[4].longitud_km} KM</span></p>
        <p class="record">Record de vuelta: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[4].record_vuelta.tiempo}, ${daticos.circuitos[4].record_vuelta.piloto}, ${daticos.circuitos[4].record_vuelta.año}.</span></p>
        <a class="link" href="./menu_circuitos.html" >atras</a>
        </div>
        `
    
    
    })
    document.getElementById(`imagen_circuito5`).addEventListener("click",function(){
        let infi_adc=document.getElementById("todo")
        infi_adc.innerHTML=`
        <div class="container_circuito">
        <img src="${daticos.circuitos[5].imagen}" alt="" class="imagen_click">
        <p class="nombre_circuito_card">Circuito: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[5].nombre}</span></p>
        <p class="nombre_pais_card">Pais: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[5].pais}</span></p>
        <p class="descripcion_card">Descripcion: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[5].descripcion}</span></p>
        <p class="num_vueltas">Vueltas: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[5].vueltas}</span></p>
        <p class="longitud">Longitud KM: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[5].longitud_km} KM</span></p>
        <p class="record">Record de vuelta: <span style="color: rgb(255, 255, 255);">${daticos.circuitos[5].record_vuelta.tiempo}, ${daticos.circuitos[5].record_vuelta.piloto}, ${daticos.circuitos[5].record_vuelta.año}.</span></p>
        <a class="link" href="./menu_circuitos.html" >atras</a>
        </div>
        `
    
    
    })
    


}})}

putcircuito();