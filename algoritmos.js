const parrafo1= document.querySelector("#contenedor");
const select1= document.querySelector("#opciones");

const VALOR_MAXIMO=100;
const CANTIDAD_DE_UNIDADES= 1;

let vectorValorMaximo=[VALOR_MAXIMO,VALOR_MAXIMO,VALOR_MAXIMO]


function verifica() {

vectorValorMaximo[select1.value]-=CANTIDAD_DE_UNIDADES;
parrafo1.innerHTML=`<p>Producto 1 Cantidad=${vectorValorMaximo[0]}</p>
                    <p>Producto 2 Cantidad=${vectorValorMaximo[1]}</p>
                    <p>Producto 3 Cantidad=${vectorValorMaximo[2]}</p>`

                    
}
