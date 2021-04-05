function validaFechaMenor(campo){
    var bRet = false;
    var dHoy = new Date();
    var dCapt = "";
    eliminar();
    if (campo.value == null)
        alert("Faltan datos");
    else{
        dCapt = validaFecha(campo.value);
    campo.value="";

    if (dCapt != null && dCapt < dHoy)
        bRet = true;
    else
        alert("La fecha debe ser menor a la fecha actual");
    }
    return bRet;
}

function validaFecha(valor){
    var dConvertida = null;
    var sAnio = "";
    var sMes = "";
    var sDia = "";
    var nAnio=0, nMes=0, nDia = 0;
    if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
        nDia = parseInt(valor.substring(8), 10);
        nMes = parseInt(valor.substring(5,7), 10);
        nAnio = parseInt(valor.substring(0,4), 10);
    if (nDia <1 || nDia>31)
        alert("El día no es válido")
    else{
        if (nMes <1 || nMes>12)
        alert("El mes no es válido");
    else{
        if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 || nMes==8 || nMes==10 || nMes==12) && nDia > 31)
        alert("El mes tiene máximo 31 días");
    else if ((nMes==4 || nMes==6 || nMes==9 || nMes==11) && nDia > 30)
        alert("El mes tiene máximo 30 días");
    else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
        alert("Febrero tiene 28 días o 29 en bisiesto");
    else{
        dConvertida = new Date();
        dConvertida.setFullYear(nAnio, nMes, nDia);
    }//fin validaci�n día-mes
    }//mes válido
    }//día válido
    creasigno(nDia,nMes);
    }//formato válido
    else{
        alert("No tiene formato de fecha");
    }
        return dConvertida;
}

function creasigno(nDia,nMes){
    var newDiv = document.createElement("div");
    var imagen1 = new Image(600,300);
    var n=0;
    var f=0;
    if((nDia>=20) && (nMes==3) || (nDia <=20) && (nMes==4)){
    var newContent = document.createTextNode("SIGNO ARIES");
    f=1;
    n="#F33131";
    }
    else if ((nDia>=20) && (nMes==4) || (nDia <=20) && (nMes==5)){
    var newContent = document.createTextNode("SIGNO TAURO");
    f=2;
    n="#F38F31";
    }
    else if ((nDia>=20) && (nMes==5) || (nDia <=20) && (nMes==6)){
    var newContent = document.createTextNode("SIGNO GEMINIS");
    f=3;
    n="#F3C731";
    }
    else if ((nDia>=20) && (nMes==6) || (nDia <=22) && (nMes==7)){
    var newContent = document.createTextNode("SIGNO CANCER");
    f=4;
    n= "#B7EE2D";
    }
    else if ((nDia>=22) && (nMes==7) || (nDia <=23) && (nMes==8)){
    var newContent = document.createTextNode("SIGNO LEO");
    f=5;
    n="#63DB26";
    }
    else if ((nDia>=23) && (nMes==8) || (nDia <=22) && (nMes==9)){
    var newContent = document.createTextNode("SIGNO VIRGO");
    f=6;
    n="#558F60";
    }
    else if ((nDia>=22) && (nMes==9) || (nDia <=22) && (nMes==10)){
    var newContent = document.createTextNode("SIGNO LIBRA");
    f=7;
    n="#33D687";
    }
    else if ((nDia>=22) && (nMes==10) || (nDia <=22) && (nMes==11)){
    var newContent = document.createTextNode("SIGNO ESCORPIO");
    f=8;
    n="#3CCBCB";
    }
    else if ((nDia>=22) && (nMes==11) || (nDia <=21) && (nMes==12)){
    var newContent = document.createTextNode("SIGNO SAGITARIO");
    f=9;
    n="#3F73C7";
    }
    else if ((nDia>=21) && (nMes==12) || (nDia <=21) && (nMes==1)){
    var newContent = document.createTextNode("SIGNO CAPRICORNIO");
    f=10;
    n="#CF67DD";
    }
    else if ((nDia>=21) && (nMes==1) || (nDia <=21) && (nMes==2)){
    var newContent = document.createTextNode("SIGNO ACUARIO");
    f=11;
    n="#C45C7F ";
    }
    else if ((nDia>=22) && (nMes==2) || (nDia <=23) && (nMes==3)){
    var newContent = document.createTextNode("SIGNO PICIS");
    f=12;
    n="#9D3D3D";
    }
    //var newContent = document.createTextNode("SIGNO");
    newDiv.appendChild(newContent); //añade texto al div creado.
    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
    imagen1.src = 'img/'+f+'.jpg';
    newDiv.appendChild(imagen1);
    newDiv.style="border: 15px solid "+n+"; background-color:#9804FF; text-align:center; font-family:georgia; font-size: 170%; width: 600px ;height:335px; margin:auto";
}

function eliminar(){
    lista = document.getElementsByTagName('div')[0];
    if (lista){
        padre = lista.parentNode;
        padre.removeChild(lista);
    }
}