let tempElemento3 = document.createElement('template'); 

tempElemento3.innerHTML=`

<input class="input-mail" type="password" name="clave">
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
        
        valorPassword=password; 
        valorPassword.valor=password;
    }

}

customElements.define('neoris-password', ElementoPassword);