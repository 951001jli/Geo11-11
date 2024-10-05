import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavTabFixed extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-tab", "fixed")

  this.innerHTML = /* HTML */`
   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">map</span>
    GPS
   </a>

      <a ${resaltaSiEstasEn(["/media.html"])} href="media.html">
     <span class="material-symbols-outlined">add_photo_alternate</span>
    Archivos
   </a>

         <a ${resaltaSiEstasEn(["/camara.html"])} href="camara.html">
    <span class="material-symbols-outlined">add_a_photo</span>
    Cámara
   </a>

   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">help</span>
    Ayuda
   </a>

   `
 }

}

customElements.define("nav-tab-fixed", NavTabFixed)