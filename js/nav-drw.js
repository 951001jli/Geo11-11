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
    Geolocalización
   </a>

     <a ${resaltaSiEstasEn(["/media.html"])} href="media.html">
     <span class="material-symbols-outlined">add_photo_alternate</span>
    Media
   </a>

   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">help</span>
    Ayuda
   </a>`

   
 }

}

customElements.define("nav-drw", NavDrw)