var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var direccion = document.getElementById("direccion");
var div = document.getElementById("mostrar");

var fichasArr=[];
function ficha(nombre,apellido,edad,genero,ciudad){
  this.nombre=nombre;
  this.apellido=apellido;
  this.edad=edad;
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
  direccion.value="";
}
document.getElementById("enviar").addEventListener("click",function(e){
  e.preventDefault();
  var ficha1= new ficha(nombre.value , apellido.value , direccion.value);
 fichasArr.push(ficha1);
    ficha1.estructura();
    limpiar();

});
