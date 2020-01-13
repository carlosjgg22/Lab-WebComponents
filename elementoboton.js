let tempElemento4= document.createElement('template');

tempElemento4.innerHTML=`

<br><button>Enviar Datos</button>
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
    function validateToEmail(email){
   //tomo el valor del input de email 
  var mailcap= valorEmail.value;
  //guardo el valor de la longitud del email del input en una variable para iterarlo 
  var dimension= mailcap.length;
  //declaro una constante para una validación 
  const word=".com";
  //ejecuto ciclo for con la dimesion del campo del input
  for(var i=0;i<dimension-1;i++){
      if(mailcap.charAt(i)=="@"){
       var premisa1= true; 
      } 
  //busco si en la cadena de texto existe un punto, se ser verdadero evaluo si seguido existe
      if(mailcap.charAt(i)=="."){
          //hago un substring desde el punto hasta el final de la cadena para  formar la .com
        var cadena = mailcap.substring(i,dimension);  
          //comparo con la constate de validación 
         if(cadena==word){
             var premisa2=true; 
         }
      }
  }
    //para los mensajes de validación de email  
  if(premisa1&&premisa2){
      console.log("Validación de mail: El email es válido, contiene el carácter @ y el .com");
  }  else {
      console.log("Validación de mail: El email introducido no es una dirección válida");
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