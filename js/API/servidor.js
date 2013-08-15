//Servidor
function enviarDatos(nom, tel, email){
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/enviar.php",
		data: "nom="+nom+"&tel="+tel+"&mai="+email
	}).done(function(msg) {
		if(msg==1){
			//subirFoto(foto,nom);
			window.location.href="#page";
		}else{
			navigator.notification.alert("Error al Registrarse"+msg, null, "Registro", "Aceptar");	
		}
	});
}

function guarda_calif(valrad1,valrad2,valrad3,valrad4,valrad5,valrad6){
		
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/g_preguntas.php",
		data: "c1="+valrad1+"&c2="+valrad2+"&c3="+valrad3+"&c4="+valrad4+"&c5="+valrad5+"&c6="+valrad6
	}).done(function(msg) {
		
		if(msg==1){
			
			//subirFoto(foto,nom);
			window.location.href="#page";
			navigator.notification.alert("se guardo calificacion", null, "Registro", "Aceptar");	
		}else{
			navigator.notification.alert("Error al guardar calificacion", null, "Registro", "Aceptar");	
		}
	});
}
function subirReserva(id,th,ha,di,pe){
	$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/enviar.php",
		data: "nom="+th+"&tel="+ha+"&mai="+di+"&pe="+pe
	}).done(function(msg){
		if(msg==1){
			navigator.notification.alert("Reserva Sincronizada Satisfactoriamente",function(){
				
				guardarHistorial(th,ha,di,pe);
				borrarReserva(id);
			},"Reserva Realizada", "Aceptar");
		}else{
			navigator.notification.alert("Error al Registrarse", null, "Registro", "Aceptar");	
		}
	});
}

	function obtener_clave(clave)
	{
		navigator.notification.alert("clave de funcion="+clave, null, "Registro", "Aceptar");
		$.ajax({
		type: "POST",
		url: "http://testapp2.260mb.net/sincronizar/d_o.php",
		data: "clave="+clave
	}).done(function(msg) {
		if(msg[0]==0){
			//subirFoto(foto,nom);
			
			
		}else{
			var obj=$.parseJSON(msg);
			;	
		 $('#descripcion').val(obj.descripcion);
		 $('#precio').val(obj.precio);
		 
		 
		}
		
	});
	}

