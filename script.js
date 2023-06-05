let passwordareahtml =document.getElementById("passwordarea")
let superhtml =document.getElementById("super")
let stronghtml =document.getElementById("strong")
let weakhtml =document.getElementById("weak")


class Password {
    constructor(){

    }
    
    GenerateSuperStrongPassword(){
        function superpass() {
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
            for (let i = 1; i <= 10; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;
        }
        this.superpass = superpass;
        passwordareahtml.innerHTML= `" ${superpass()} "`;
}
    GenerateStrongPassword(){
        function strongpass() {
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
            for (let i = 1; i <= 8; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;
        }
        this.strongpass = strongpass;
        passwordareahtml.innerHTML=  `" ${strongpass()} "` ;
    }
    GenerateWeakPassword(){
        function weakpass() {
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
            for (let i = 1; i <= 5; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
                pass += str.charAt(char)
            }
              
            return pass;
        }
        this.weakpass = weakpass;
        passwordareahtml.innerHTML= `" ${weakpass()} "`;
    }


}

let a = new Password();
a.GenerateSuperStrongPassword();
a.GenerateStrongPassword();
a.GenerateWeakPassword();



superhtml.addEventListener("click", ()=>{a.GenerateSuperStrongPassword()})
stronghtml.addEventListener("click", ()=>{a.GenerateStrongPassword()})
weakhtml.addEventListener("click", ()=>{a.GenerateWeakPassword()})