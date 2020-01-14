let tempElemento2 = document.createElement('template'); 

tempElemento2.innerHTML=`

<input class="input-mail" "type="text" id="email" name="correo">
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

class ElementoEmail extends HTMLElement{
    constructor(){
        super(); 

        this._shadowroot= this.attachShadow({mode:'open'});
        this._shadowroot.appendChild(tempElemento2.content,true); 

        var email = this._shadowroot.querySelector("input[name='correo']");

        valorEmail=email;
        

    }
}

customElements.define('neoris-mail',ElementoEmail);