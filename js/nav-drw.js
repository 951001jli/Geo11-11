import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"
import { MdNavigationDrawer } from "../lib/js/custom/MdNavigationDrawer.js"

export class NavDrw extends MdNavigationDrawer {

 /**
  * @override
  */
 getHipervinculos() {
  return /* HTML */`
   <h1>ChisTec - PWA</h1>

  
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
   </a>`

   
 }

}

customElements.define("nav-drw", NavDrw)