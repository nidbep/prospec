//Eventos
$(document).ready(function(e){
	
	

	document.addEventListener("deviceready", function(){
		if(!isLogin())
			window.location.href = '#login';
	   $('#regSend').tap(function(){
		  if($('#regNom').val()!='' && $('#regTel').val()!='' && $('#regMail').val()!='' ){
			  var nom = $('#regNom').val();
			  var tel = $('#regTel').val();
			  var mail = $('#regMail').val();
			  
			  
			  enviarDatos(nom, tel, mail);
			  //navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel","Aceptar");
		  }else{
			  navigator.notification.alert('Todos los campos son requeridos', null, "Hotel","Ok");
		  }
	   });
	   
	   
	   //---------------datos 
	   $('#datos').tap(function(){
		   var cla = $('#clave').val();
		   
		   obtener_clave(cla);
			 
		
			  //navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel","Aceptar");
		  
	   });
	   //---------------guarda encuesta
	   
	    $('#guarda').tap(function(){
			
		  var valrad1 = $('input:radio[name=pregunta1]:checked').val();
			if ( !valrad1 ) {
   	 			alert("Please select your option on pregunta1.");
    			return false;
			}
			var valrad2 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad2 ) {
   	 			alert("Please select your option on pregunta2.");
    			return false;
			}
			var valrad3 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad3 ) {
   	 			alert("Please select your option on pregunta3.");
    			return false;
			}
			var valrad4 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad4 ) {
   	 			alert("Please select your option on pregunta4.");
    			return false;
			}
			var valrad5 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad5 ) {
   	 			alert("Please select your option on pregunta5.");
    			return false;
			}
			var valrad6 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad6 ) {
   	 			alert("Please select your option on pregunta6.");
    			return false;
			}
		   
		   guarda_calif(valrad1,valrad2,valrad3,valrad4,valrad5,valrad6);
			 
		document.location.reload();
			 
		  
	   });
	   $('#guarda2').tap(function(){
			
		  var valrad1 = $('input:radio[name=pregunta1]:checked').val();
			if ( !valrad1 ) {
   	 			alert("Please select your option on pregunta1.");
    			return false;
			}
			var valrad2 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad2 ) {
   	 			alert("Please select your option on pregunta2.");
    			return false;
			}
			var valrad3 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad3 ) {
   	 			alert("Please select your option on pregunta3.");
    			return false;
			}
			var valrad4 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad4 ) {
   	 			alert("Please select your option on pregunta4.");
    			return false;
			}
			var valrad5 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad5 ) {
   	 			alert("Please select your option on pregunta5.");
    			return false;
			}
			var valrad6 = $('input:radio[name=pregunta2]:checked').val();
			if ( !valrad6 ) {
   	 			alert("Please select your option on pregunta6.");
    			return false;
			}
		   
		   guarda_calif(valrad1,valrad2,valrad3,valrad4,valrad5,valrad6);
			document.location.reload()
		
			 
		  
	   });
	   
	 
	   //---------------Reservaciones---------------//
	   var nr1 = $('#nr1');
	   nr1.find('ul[data-role=listview] li').tap(function(){
		   if($(this).index()!=0){
				nr1.attr('th',$(this).index());
				$(this).css('background','#0ff000');
		   }
	   });
	   $('#sh').tap(function(){
		  
			   var cla = $('#clave').val();
			   //obtener_clave(cla);
			   navigator.notification.alert("clave="+cla, null, "Registro", "Aceptar");
			   //window.location.href = '#nr2';
		   
	   });
	   $('#rh').tap(function(){
		   if(isConnected())
		   		subirReserva(0,nr1.attr('th'), $('#rHabitaciones').val(), $('#rDias').val(), $('#rPersonas').val());
			else
				guardarReserva(nr1.attr('th'), $('#rHabitaciones').val(), $('#rDias').val(), $('#rPersonas').val());
	   });
		$('a[href=#historial]').tap(function(event){
			leerHistorial();
		});
	}, false);
});

function isLogin(){
	if(window.localStorage.getItem('id')!=undefined)
		return true;
	else
		return false;
}