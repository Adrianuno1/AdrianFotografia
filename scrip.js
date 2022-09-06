// const iconoMenu = document.querySelector(".icon_menu");

const conteMenu = document.querySelector(".icono_menu");

const navDespegable = document.querySelector(".menu_despegable");

const logo = document.querySelector(".logo");

const btnCerrar = document.querySelector(".btn_cerrar")

const btnAbajo = document.querySelector(".flecha_abajo");

const seccionPortafolio = document.querySelector("#portafolio");

const contemenudespegable = document.querySelector(".menudespegable");

const imagenes = document.querySelectorAll(".col-lg-4")

const opcionboda = document.querySelector(".txt_boda")

const opcionXv = document.querySelector(".txt_xv")

const opcioncasual = document.querySelector(".txt_casuales")

const textoTitulo = document.querySelector(".pfo_txt_titulo")

const textoDescripcion = document.querySelector(".pfo_txt_desc")



function desplegarMenu(){
    navDespegable.style.display = "flex";
    navDespegable.classList.remove("animate__slideOutRight")
    console.log("click icono"); 
    // conteMenu.style.visibility = "hidden"
    // logo.style.visibility = "hidden"
    navDespegable.classList.add("animate__slideInRight")

    contemenudespegable.style.display = "flex"
}

function cerrarMenuDespegable (){
    navDespegable.classList.remove("animate__slideInRight")
    navDespegable.classList.add("animate__slideOutRight")
    console.log("click cerrar")
    conteMenu.style.visibility = "visible"
    logo.style.visibility = "visible"
    setTimeout(()=>{
        contemenudespegable.style.display = "none"
    }, 2000)
}

function clickScroll(){
    seccionPortafolio.classList.add("animate__fadeIn")
}



opcionboda.addEventListener("click", () =>{
    textoDescripcion.classList.add("animate__fadeIn")
    textoDescripcion.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    textoTitulo.classList.add("animate__fadeIn")
    textoTitulo.textContent = "Boda"
    setTimeout(()=>{
        textoTitulo.classList.remove("animate__fadeIn")
        textoDescripcion.classList.remove("animate__fadeIn")
    }, 1000)
});

opcionXv.addEventListener("click", () =>{
    textoDescripcion.classList.add("animate__fadeIn")
    textoDescripcion.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    textoTitulo.classList.add("animate__fadeIn")
    textoTitulo.textContent = "Xv años"
    setTimeout(()=>{
        textoTitulo.classList.remove("animate__fadeIn")
        textoDescripcion.classList.remove("animate__fadeIn")
    }, 1000)
});

opcioncasual.addEventListener("click", () =>{
    textoDescripcion.classList.add("animate__fadeIn")
    textoDescripcion.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    textoTitulo.classList.add("animate__fadeIn")
    textoTitulo.textContent = "Casuales"
    setTimeout(()=>{
        textoTitulo.classList.remove("animate__fadeIn")
        textoDescripcion.classList.remove("animate__fadeIn")
    }, 1000)
});

//variable para guardar el src de cada imagene en el foreach
let imgSrc;

//obtener las src con funcion onclick

imagenes.forEach((img)=>{
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc)
    })
})

//crear la imagen y agregarla al modal

let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //agregar el modal en la seccion del elemento padre
    document.querySelector("#galeria").append(modal)
    const newImage = document.createElement("img")
    newImage.setAttribute("src", src)
    
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);

};




