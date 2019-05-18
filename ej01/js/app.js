$("#btn").click( () => {
	
	let cot = $("#cotizacion").val();
	let mon = $("#monto").val();
	let cam = cot * mon;
	
	let rs = {cot,mon,cam};
	
	cargar(rs);
	
});

cargar = a => {

	$("#rsCot").text(a.cot);
	$("#rsMon").text(a.mon);
	$("#rsCam").text(a.cam);

};