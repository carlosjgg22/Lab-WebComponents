let tempElemento2 = document.createElement('template'); 

tempElemento2.innerHTML=`
<div class="email-div">
<br>Email:<input type="mail" id="email" name="correo">
</div>
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