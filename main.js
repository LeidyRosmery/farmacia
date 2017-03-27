var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var direccion = document.getElementById("direccion");
var edad=document.getElementById("edad");
var div = document.getElementById("mostrar");
var input=document.getElementsByClassName("input");
input[0].onblur=function(e){
  if(this.value.trim().length==0){
    this.value="";
    this.nextElementSibling.nextElementSibling.innerText= "* Este campo es obligatorio";
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

var validaEdad =function(e){

}
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
