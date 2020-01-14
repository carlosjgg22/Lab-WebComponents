let tempElemento3 = document.createElement('template'); 

tempElemento3.innerHTML=`

<input class="input-mail" type="text"  name="clave">
<style>
.input-mail{
padding:20px;
border: 1px solid rgba(0,0,0,0.3);
margin-bottom:1px;
width:90%;
background=transparent;
}
</style>
`; 

class ElementoPassword extends HTMLElement{
    constructor(){
        super(); 

        this._shadowRoot = this.attachShadow({mode:'open'}); 
        this._shadowRoot.appendChild(tempElemento3.content, true); 

        var password = this._shadowRoot.querySelector("input[name='clave']"); 
        let keysPressed = {}; 
        let newpass=[];
        valorPassword=password; 
        valorPassword.valor=password;
       

        password.addEventListener('keyup', ocultarClave=>{
    
    valorPassword.value=valorPassword.value.replace(/\w/g,"X");

    });
    
    password.addEventListener('keydown', (guardarClave)=>{
        keysPressed[guardarClave.key] = true;
        
      console.log(guardarClave.key);
       
     });
      
  

}

}

customElements.define('neoris-password', ElementoPassword);