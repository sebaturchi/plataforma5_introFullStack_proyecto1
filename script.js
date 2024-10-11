document.getElementById('botonVerDisco').addEventListener('click', function() {
    // Selecciona el contenedor donde se agregará el nuevo contenido
    const contenedor = document.querySelector('.discografiaHomeDerecha');

    // Crea el nuevo contenido HTML
    const nuevoContenido = `<div class="miniGrillaCanciones">
    <div class="grillaCancionesHeader">#</div>
    <div class="grillaCancionesHeader">Titulo</div>
    <div class="grillaCancionesHeader">Duracion</div>
    <div class="grillaCancionesHeader">Eliminar</div>
    <div class="grillaCancionesHeader">Reproducir</div>
    <div class="grillaCancionesItem">1</div>
    <div class="grillaCancionesItem">"Last Rites/Loved to Death"</div>
    <div class="grillaCancionesItem">4:38</div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-trash"></i></div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-play"></i></div>
    <div class="grillaCancionesItem">2</div>
    <div class="grillaCancionesItem">"Killing Is My Business... and Business Is Good!"</div>
    <div class="grillaCancionesItem">3:05</div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-trash"></i></div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-play"></i></div>
    <div class="grillaCancionesItem">3</div>
    <div class="grillaCancionesItem">"The Skull Beneath the Skin"</div>
    <div class="grillaCancionesItem">3:46</div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-trash"></i></div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-play"></i></div>
    <div class="grillaCancionesItem">4</div>
    <div class="grillaCancionesItem">"These Boots"</div>
    <div class="grillaCancionesItem">3:44</div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-trash"></i></div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-play"></i></div>
    <div class="grillaCancionesItem">5</div>
    <div class="grillaCancionesItem">"Rattlehead"</div>
    <div class="grillaCancionesItem">3:42</div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-trash"></i></div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-play"></i></div>
    <div class="grillaCancionesItem">6</div>
    <div class="grillaCancionesItem">"Chosen Ones"</div>
    <div class="grillaCancionesItem">2:54</div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-trash"></i></div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-play"></i></div>
    <div class="grillaCancionesItem">7</div>
    <div class="grillaCancionesItem">"Looking Down the Cross"</div>
    <div class="grillaCancionesItem">5:01</div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-trash"></i></div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-play"></i></div>
    <div class="grillaCancionesItem">8</div>
    <div class="grillaCancionesItem">"Mechanix"</div>
    <div class="grillaCancionesItem">4:20</div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-trash"></i></div>
    <div class="grillaCancionesItem"><i class="fa-solid fa-play"></i></div>

</div>`;

    // Agrega el nuevo contenido al contenedor usando innerHTML
    contenedor.innerHTML += nuevoContenido; // o contenedor.innerHTML = contenedor.innerHTML + nuevoContenido;
});