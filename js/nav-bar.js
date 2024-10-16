import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavBar extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-navigation-bar")

  this.innerHTML = /* HTML */`
 <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">home</span>
    Inicio
   </a>

   <a ${resaltaSiEstasEn(["/archivos.html"])} href="archivos.html">
    <span class="material-symbols-outlined">add_photo_alternate</span>
    Archivos
   </a>

   <a ${resaltaSiEstasEn(["/camara.html"])}
     href="camara.html">
    <span class="material-symbols-outlined">add_a_photo</span>
    Cámara
   </a>

   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">help</span>
    Ayuda
   </a>`

 }

}

customElements.define("nav-bar", NavBar)