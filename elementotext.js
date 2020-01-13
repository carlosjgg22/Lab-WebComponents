let tempElemento1=document.createElement('template'); 


tempElemento1.innerHTML=` 
<br>Nombre: <input type="text" name="nombre">
`; 

class ElementoText extends HTMLElement{
    constructor(){
        super(); 

        this._shadowRoot= this.attachShadow({mode:'open'});
        this._shadowRoot.appendChild(tempElemento1.content,true); 

        var inp= this._shadowRoot.querySelector("input[name='nombre']");
        //alamacenando el valor del input en la variable global declarada 

        valorGlobal=inp;
    }
}

customElements.define('neoris-text',ElementoText);