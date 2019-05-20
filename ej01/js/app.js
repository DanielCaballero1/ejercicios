
//evento click del boton
$("#btn").click( function(){
   // se recupera lo ingresado en el primer campo y se guarda en la variable
   let cot = $("#cotizacion").val();

   // se recupera lo ingresado en el segundo campo y se guarda en la variable
   let mon = $("#monto").val();
		
   
   // los valores se pasan a la funcion para realizar los calculos
   calcular(cot, mon);
	
});



/** 
 * Funcion calcular.
 * recibe dos valores como parametros, que son utilizados para realizar los calculos
 * */
function calcular(x, y){
   
   // los valores recibidos se parsean a entero para que no hayan errores en los calculos
   // luego se guardan en la variable
   let cam = parseInt(x) * parseInt(y);

   // Una vez realizados los calculos se muestran los resultados en la pagina
   $("#rsCot").text(x);
   $("#rsMon").text(y);
   $("#rsCam").text(cam);

};
