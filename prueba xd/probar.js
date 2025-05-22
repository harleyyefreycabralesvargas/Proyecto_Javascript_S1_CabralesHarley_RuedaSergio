// // URL de la API
// const apiURL = 'https://682b2bf7ab2b5004cb396ecf.mockapi.io/informacion';

// // Datos a enviar
// const nuevoDato = {
//   nombre: "Harley Cabrales",
//   edad: 17,
//   ciudad: "Bogotá"
// };

// // Enviar datos con POST usando Axios
// axios.post(apiURL, nuevoDato)
//   .then(response => {
//     console.log("Dato guardado exitosamente:", response.data);
//   })
//   .catch(error => {
//     console.error("Hubo un error al guardar el dato:", error);
//   });
const pilotos = [
    { id: 1, nombre: "Max Verstappen", equipo: "Red Bull Racing", rol: "Líder", imagen_piloto:"https://www.hsbnoticias.com/wp-content/uploads/2025/04/3.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/red-bull-racing.png"},
    { id: 2, nombre: "Sergio Pérez", equipo: "Red Bull Racing", rol: "Escudero", imagen_piloto:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5002171-beba-44a9-b181-42f4291e6f7a/diu3ula-a962b55f-cd5a-46ca-aa10-7f6169e78e57.png/v1/fill/w_512,h_512/sergio_perez_formula_1_2024_driver_by_chito728_diu3ula-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZjUwMDIxNzEtYmViYS00NGE5LWIxODEtNDJmNDI5MWU2ZjdhXC9kaXUzdWxhLWE5NjJiNTVmLWNkNWEtNDZjYS1hYTEwLTdmNjE2OWU3OGU1Ny5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.LojLBba7GgoIV3FuViDog1gErtGq6WkiofLsv0NoY6s",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/red-bull-racing.png" },
    { id: 3, nombre: "Lewis Hamilton", equipo: "Mercedes-AMG Petronas", rol: "Líder", imagen_piloto:"https://celebs.infoseemedia.com/wp-content/uploads/2020/10/Lewis-Hamilton.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mercedes.png" },
    { id: 4, nombre: "George Russell", equipo: "Mercedes-AMG Petronas", rol: "Escudero", imagen_piloto:"https://cdn.pli-petronas.com/2023-06/russel.png?VersionId=IruZZg734FSiSJa8J6QPVH7t1n7vffwi",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mercedes.png" },
    { id: 5, nombre: "Charles Leclerc", equipo: "Ferrari", rol: "Líder", imagen_piloto:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5002171-beba-44a9-b181-42f4291e6f7a/diu3s56-9116f0dd-23c3-4209-a8e5-fd0bbb1872c9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1MDAyMTcxLWJlYmEtNDRhOS1iMTgxLTQyZjQyOTFlNmY3YVwvZGl1M3M1Ni05MTE2ZjBkZC0yM2MzLTQyMDktYThlNS1mZDBiYmIxODcyYzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tLpFz4Wir34ke-DugRHKCZGHmhIaYnEUhd_ORl_KTvM",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/ferrari.png" },
    { id: 6, nombre: "Carlos Sainz", equipo: "Ferrari", rol: "Escudero", imagen_piloto:"https://www.carlossainz.es/upload/media/default/0001/18/5d079623d92331fe912be990fdc9395866369966.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/ferrari.png" },
    { id: 7, nombre: "Lando Norris", equipo: "McLaren", rol: "Líder", imagen_piloto:"https://sportrenders.com/wp-content/uploads/2024/05/Norris-PNG-F1-Render-Formula-1-1-1.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mclaren.png" },
    { id: 8, nombre: "Oscar Piastri", equipo: "McLaren", rol: "Escudero", imagen_piloto:"https://sportrenders.com/wp-content/uploads/2024/09/Oscar-Piastri-PNG-Formula-1-Mclaren-Render.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mclaren.png" },
    { id: 9, nombre: "Fernando Alonso", equipo: "Aston Martin", rol: "Líder", imagen_piloto:"https://e00-especiales-marca.uecdn.es/motor/images/formula1/escuderias/2025/astonmartin/alonso.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/aston-martin.png" },
    { id: 10, nombre: "Lance Stroll", equipo: "Aston Martin", rol: "Escudero", imagen_piloto:"https://e00-especiales-marca.uecdn.es/motor/images/formula1/escuderias/2025/astonmartin/stroll.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/aston-martin.png" },
    { id: 11, nombre: "Esteban Ocon", equipo: "Alpine", rol: "Líder", imagen_piloto:"https://premaracing.com/pictures/hall-of-fame/card/esteban-ocon.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/alpine.png" },
    { id: 12, nombre: "Pierre Gasly", equipo: "Alpine", rol: "Escudero", imagen_piloto:"https://premaracing.com/pictures/hall-of-fame/card/pierre-gasly.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/alpine.png" },
    { id: 13, nombre: "Valtteri Bottas", equipo: "Alfa Romeo", rol: "Líder", imagen_piloto:"https://premaracing.com/pictures/hall-of-fame/card/valtteri-bottas.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/kick-sauber.png" },
    { id: 14, nombre: "Zhou Guanyu", equipo: "Alfa Romeo", rol: "Escudero", imagen_piloto:"https://premaracing.com/pictures/hall-of-fame/card/guanyu-zhou.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/kick-sauber.png" },
    { id: 15, nombre: "Kevin Magnussen", equipo: "Haas", rol: "Líder", imagen_piloto:"https://lifeextensioneurope.b-cdn.net//media/2e/f2/8d/1697606471/Kevin_700x770.png?width=3000&height={height}",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/haas.png" },
    { id: 16, nombre: "Nico Hülkenberg", equipo: "Haas", rol: "Escudero", imagen_piloto:"https://www.kymillman.com/wp-content/uploads/f1/pages/driver-profiles/nico-hulkenberg/nico-hulkenberg-walking.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/haas.png" },
    { id: 17, nombre: "Yuki Tsunoda", equipo: "AlphaTauri", rol: "Líder", imagen_piloto:"https://www.kymillman.com/wp-content/uploads/f1/pages/driver-profiles/yuki-tsunoda/yuki-tsunoda-walking.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/racing-bulls.png" },
    { id: 18, nombre: "Daniel Ricciardo", equipo: "AlphaTauri", rol: "Escudero", imagen_piloto:"https://e00-especiales-marca.uecdn.es/motor/images/formula1/escuderias/2022/v2/mclaren/ricciardo.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/racing-bulls.png" },
    { id: 19, nombre: "Alexander Albon", equipo: "Williams", rol: "Líder", imagen_piloto:"https://www.kymillman.com/wp-content/uploads/f1/pages/driver-profiles/alexander-albon/alexander-albon-walking.png",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/williams.png" },
    { id: 20, nombre: "Logan Sargeant", equipo: "Williams", rol: "Escudero", imagen_piloto:"https://cdn.williamsf1.tech/images/fnx611yr/production/81af34166fa93b27bfa286e3a2386e29fcab9132-1200x1200.png?w=625&h=625&auto=format",imagen_coche:"https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/williams.png" }
    ]

function putpiloto() {
    let link="https://682b2bf7ab2b5004cb396ecf.mockapi.io/informacion/1";
    axios.put(`${link}`, {
        "pilotos":pilotos
    })
    .then((response) => {
        console.log(response)
    })
}
putpiloto();
