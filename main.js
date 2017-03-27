var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var direccion = document.getElementById("direccion");
var edad=document.getElementById("edad");
var div = document.getElementById("mostrar");
var input=document.getElementsByClassName("input");
// evalua cada uno dependiendo del focus
for (var i = 0; i < input.length; i++) {
  input[i].onblur=function(e){
  if(e.target.value.trim().length==0){
    e.target.value="";
    e.target.nextElementSibling.nextElementSibling.innerText= "* Este campo es obligatorio";
  }else {
      e.target.nextElementSibling.nextElementSibling.innerText= "";
  }
 if(this.getAttribute("type")=="text"){
   var arrDato=this.value.split(" ");
   var datoConMayuscula="";
   for (var i = 0; i < arrDato.length; i++) {
     datoConMayuscula+=arrDato[i].charAt(0).toUpperCase()+ arrDato[i].substring(1).toLowerCase() + " " ;
   }
   this.value=datoConMayuscula;
 }
}
}
console.log(input);
var fichasArr=[];
function ficha(nombre,apellido,edad,direccion,genero,ciudad){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
  this.direccion=direccion;
  this.genero=genero;
  this.ciudad=ciudad;
  this.imprimir=function(){
  var result=  "nombre : "+this.nombre +"<br> apellido : "+this.apellido+"<br> direccion : "+this.direccion  ;
  return result;
  }
  this.estructura=function (){
    var resultado = this.imprimir();
    var field=document.createElement("fieldset");
    field.innerHTML=resultado;
    div.appendChild(field);
  }

}
function limpiar(){
  nombre.value="";
  apellido.value="";
  edad.value="";
  direccion.value="";
}


// funciona con addeventliste
/*document.getElementById("nombre").addEventListener("keypress",function(e){
  var tecla = e.keyCode ;

  if (tecla>= 97 && tecla <= 122) {
    console.log(tecla);
   return true ;
  }else {
    console.log("numeros");
   e.preventDefault() ;
  }
});*/


var soloLetras=function(e){
  var codigoTecla=e.keyCode;
  if ((codigoTecla>=97 && codigoTecla <=122)|| (codigoTecla>=65 && codigoTecla <= 90) || codigoTecla==32 || codigoTecla==39) {
return true;
  }else {
    return false;
  }
};


nombre.onkeypress=soloLetras;
apellido.onkeypress=soloLetras;
document.getElementById("enviar").addEventListener("click",function(e){
  e.preventDefault();

  var ficha1= new ficha(nombre.value , apellido.value ,edad.value , direccion.value);
 fichasArr.push(ficha1);
    ficha1.estructura();
    limpiar();
});
