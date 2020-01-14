let tempElemento4= document.createElement('template');

tempElemento4.innerHTML=`

<button class="input-button">Enviar Datos</button>
<style>
.input-button{
padding:20px;
border: 1px solid rgba(0,0,0,0.3);
margin-bottom:1px;
width:100%;
background=transparent;
}
</style>
`; 

class  ElementoBoton extends HTMLElement{
constructor(){
    super();
this._shadowRoot= this.attachShadow({mode:'open'});
this._shadowRoot.appendChild(tempElemento4.content,true);

var boton= this._shadowRoot.querySelector('button');



boton.addEventListener('click',()=>{
    nametoUpperCase(valorGlobal);
    validateToEmail(valorEmail);
    changePassword(valorPassword)
} );


//--->Funcion para cambiar el nombre a Mayúscula
function nametoUpperCase(variable){
    var nombre= valorGlobal.value;
    console.log('Nombre:'+nombre.toUpperCase());
    }

//--->Funcion para validar el Email con @ y .com
function validateToEmail(algo){
    var correo = valorEmail.value;

//expresion regular para validación de correo electronico
    const validacion=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

    if(validacion.test(correo)){
        
    console.log(`El correo ingresado: ${correo} es Válido` )
    }else{
        console.log(`El correo ingresado: ${correo} es Inválido`)
    }
    }

  
//---> Para cambiar el valor de la contraseña por X y almacenarlo. 
  function changePassword(clave){

    var contra= valorPassword.value; 
  
//creo un arrego vacio
    var newpass=[];

//guardo cada valor de la contraseña dentro de arreglo
for(var i=0; i<contra.length;i++){
newpass[i]=contra.charAt(i);
}     

//igualo cada valor del arreglo a X
for(var i=0; i<newpass.length;i++){
newpass[i]='X';
}

//convierto el arreglo a un string
var newpassX=newpass.join('');

//imprimo la contraseña 
console.log('Su Password es:'+newpassX);
//en esta variable se guarda la contraseña del usuario sin ser modificada,
// muestro el mensaje solo para que veas el valor almacenado.
alert(`Su contraseña ha sido guardada con el siguiente valor: ${valorPassword.valor.value}`)
}

    }
}
customElements.define('neoris-boton',ElementoBoton);