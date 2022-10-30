let control = false;
let aux = false;

function comparar(varUno,varDos){
  if(varUno==varDos){
    alert("Los valores ingresados son iguales");
  }else{
    alert("Los valores ingresados no son iguales")
  }
}

do{
alert("Ingrese los valores de las variables 1 y 2, solo son validos números enteros");
let cuadroUno = parseInt(prompt("Ingrese valor de la variable 1"));
let cuadroDos = parseInt(prompt("Ingrese valor de la variable 2"));

alert("El valor de la variable 1 es: "+cuadroUno+"\nEl valor de la variable 2 es: "+cuadroDos);

comparar(cuadroUno,cuadroDos);

aux=parseInt(prompt("Desea continuar ingresando valores?\nPresione 1 para continuar\nPresione 2 para salir"));
if(aux==1){
control=true;
}else if(aux==2){
control=false;
}
}while(control);
