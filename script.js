    //'e': 'enter',
       // 'i': 'imes',
       // 'a': 'ai',
        //'o': 'ober',
    //    'u': 'ufat',

    function encriptar(){
        var texto = document.getElementById("texto-inicial").value.toLowerCase();
        var textoCifrado = texto.replace(/e/igm,"enter");
        var textoCifrado = textoCifrado.replace(/o/igm,"ober");
        var textoCifrado = textoCifrado.replace(/i/igm,"imes");
        var textoCifrado = textoCifrado.replace(/a/igm,"ai");
        var textoCifrado = textoCifrado.replace(/u/igm,"ufat");
        
        document.getElementById("imagen-der").style.display = "none";
        document.getElementById("texto-der").style.display = "none";
        document.getElementById("texto-final").innerHTML = textoCifrado;
        document.getElementById("copiar").style.display = "inherit";
    }

    function desencriptar(){
        var texto = document.getElementById("texto-inicial").value.toLowerCase();
        var textoCifrado = texto.replace(/enter/igm,"e");
        var textoCifrado = textoCifrado.replace(/ober/igm,"o");
        var textoCifrado = textoCifrado.replace(/imes/igm,"i");
        var textoCifrado = textoCifrado.replace(/ai/igm,"a");
        var textoCifrado = textoCifrado.replace(/ufat/igm,"u");
        
        document.getElementById("imagen-der").style.display = "none";
        document.getElementById("texto-der").style.display = "none";
        document.getElementById("texto-final").innerHTML = textoCifrado;
        document.getElementById("copiar").style.display = "inherit";
    }
      
    function copiar(){
        let contenido = document.querySelector("#texto-final");
        contenido.select();
        navigator.clipboard.writeText(contenido.value);
        alert("se copio!");
    }
    function limpiar() {
        document.querySelector("#texto-inicial").value = "";
        document.querySelector("#texto-final").value = "";
    }