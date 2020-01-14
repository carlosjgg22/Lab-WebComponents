let tempElemento1=document.createElement('template'); 


tempElemento1.innerHTML=` 
<input class="input-nombre" type="text" name="nombre">
<style>
.input-nombre{
padding:20px;
border: 1px solid rgba(0,0,0,0.3);
margin-bottom:1px;
width:90%;
}
</style>
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