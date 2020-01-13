let tempElemento3 = document.createElement('template'); 

tempElemento3.innerHTML=`

<br>Password:<input type="password" name="clave">
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