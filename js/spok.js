function sleep(milliSeconds)
    {
        // Obtenemos la fecha en milisegundos desde 1/1/1970
        var startTime = new Date().getTime();
        // Hacemos un bucle hasta que la fecha actual sea superior a la
        // fecha inicial mas los milisegundos indicados
        while (new Date().getTime() < startTime + milliSeconds);
    }
function aleatorio(minimo,maximo){
				/*math.floor redondea a numeros decimales*/
	var numero=Math.floor(Math.random()*(maximo-minimo+1)+minimo);
	return numero;
}
function llamar(opcionUsuario){
	var piedra=0;
	var papel=1;
	var tijera=2;
	var lagarto=3;
	var spock=4;
	var opciones=["Piedra","Papel","Tijera","Lagarto","Spock"];
	var opcionMaquina;
	
	opcionMaquina=aleatorio(0,4);
	
	var tiempo=3000;
	
	/*alert(opciones[opcionUsuario]);
	alert(opciones[opcionMaquina]);*/

	if(opcionUsuario==piedra){
		
		if(opcionMaquina==piedra){
			muestra_oculta('empatepiedra');
			setTimeout(function(){muestra_oculta('empatepiedra')}, tiempo);
		}
		else if (opcionMaquina==papel){
			muestra_oculta('piedrapapel');
			setTimeout(function(){muestra_oculta('piedrapapel')}, tiempo);
			
		}
		else if (opcionMaquina==tijera){
			muestra_oculta('piedratijera');
			
			setTimeout(function(){muestra_oculta('piedratijera')}, tiempo);
		}
		else if (opcionMaquina==lagarto){
			muestra_oculta('piedralagarto');
			setTimeout(function(){muestra_oculta('piedralagarto')}, tiempo);
		}
		else if (opcionMaquina==spock){
			muestra_oculta('piedraspock');
			
			setTimeout(function(){muestra_oculta('piedraspock')}, tiempo);
		}
	}
	else if (opcionUsuario==papel){
		
		if(opcionMaquina==piedra){
			muestra_oculta('papelpiedra');
			setTimeout(function(){muestra_oculta('papelpiedra')}, tiempo);
		}
		else if (opcionMaquina==papel){
			muestra_oculta('empatepapel');
			setTimeout(function(){muestra_oculta('empatepapel')}, tiempo);
		}
		else if (opcionMaquina==tijera){
			muestra_oculta('papeltijera');
			setTimeout(function(){muestra_oculta('papeltijera')}, tiempo);
		}
		else if (opcionMaquina==lagarto){
			muestra_oculta('papellagarto');
			setTimeout(function(){muestra_oculta('papellagarto')}, tiempo);
		}
		else if (opcionMaquina==spock){
			muestra_oculta('papelspock');
			setTimeout(function(){muestra_oculta('papelspock')}, tiempo);
		}
	}
	else if(opcionUsuario==tijera){
		
		if(opcionMaquina==piedra){
			muestra_oculta('tijerapiedra');
			setTimeout(function(){muestra_oculta('tijerapiedra')}, tiempo);
		}
		else if (opcionMaquina==papel){
			muestra_oculta('tijerapapel');
			setTimeout(function(){muestra_oculta('tijerapapel')}, tiempo);
		}
		else if (opcionMaquina==tijera){
			muestra_oculta('empatetijera');
			setTimeout(function(){muestra_oculta('empatetijera')}, tiempo);
		}
		else if (opcionMaquina==lagarto){
			muestra_oculta('tijeralagarto');
			setTimeout(function(){muestra_oculta('tijeralagarto')}, tiempo);
		}
		else if (opcionMaquina==spock){
			muestra_oculta('tijeraspock');
			setTimeout(function(){muestra_oculta('tijeraspock')}, tiempo);
		}
		
	}
	else if(opcionUsuario==lagarto){
		
		if(opcionMaquina==piedra){
			muestra_oculta('lagartopiedra');
			setTimeout(function(){muestra_oculta('lagartopiedra')}, tiempo);
		}
		else if (opcionMaquina==papel){
			muestra_oculta('lagartopapel');
			setTimeout(function(){muestra_oculta('lagartopapel')}, tiempo);
		}
		else if (opcionMaquina==tijera){
			muestra_oculta('lagartotijera');
			setTimeout(function(){muestra_oculta('lagartotijera')}, tiempo);
		}
		else if (opcionMaquina==lagarto){
			muestra_oculta('empatelagarto');
			setTimeout(function(){muestra_oculta('empatelagarto')}, tiempo);
		}
		else if (opcionMaquina==spock){
			muestra_oculta('lagartospock');
			setTimeout(function(){muestra_oculta('lagartospock')}, tiempo);
		}
		
	}
	else if(opcionUsuario==spock){
		
		if(opcionMaquina==piedra){
			muestra_oculta('spocktopiedra');
			setTimeout(function(){muestra_oculta('spockpiedra')}, tiempo);
		}
		else if (opcionMaquina==papel){
			muestra_oculta('spockpapel');
			setTimeout(function(){muestra_oculta('spockpapel')}, tiempo);
		}
		else if (opcionMaquina==tijera){
			muestra_oculta('spocktijera');
			setTimeout(function(){muestra_oculta('spocktijera')}, tiempo);
		}
		else if (opcionMaquina==lagarto){
			muestra_oculta('spocklagarto');
			setTimeout(function(){muestra_oculta('spocklagarto')}, tiempo);
		}
		else if (opcionMaquina==spock){
			muestra_oculta('empatespock');
			setTimeout(function(){muestra_oculta('empatespock')}, tiempo);
		}
		
	}
}
function muestra_oculta(id){
	if (document.getElementById){ //se obtiene el id
		var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
		el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
	}
}
window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
	muestra_oculta('reglas');/* "contenido_a_mostrar" es el nombre de la etiqueta DIV que deseamos mostrar */
	muestra_oculta('empatepiedra');
	muestra_oculta('piedrapapel');
	muestra_oculta('piedratijera');
	muestra_oculta('piedralagarto');
	muestra_oculta('piedraspock');
	muestra_oculta('empatepapel');
	muestra_oculta('papelpiedra');
	muestra_oculta('papeltijera');
	muestra_oculta('papellagarto');
	muestra_oculta('papelspock');
	muestra_oculta('empatetijera');
	muestra_oculta('tijerapiedra');
	muestra_oculta('tijerapapel');
	muestra_oculta('tijeralagarto');
	muestra_oculta('tijeraspock');
	muestra_oculta('empatelagarto');
	muestra_oculta('lagartopiedra');
	muestra_oculta('lagartopapel');
	muestra_oculta('lagartotijera');
	muestra_oculta('lagartospock');
	muestra_oculta('empatespock');
	muestra_oculta('spockpiedra');
	muestra_oculta('spockpapel');
	muestra_oculta('spocktijera');
	muestra_oculta('spocklagarto');
	muestra_oculta('creditos');
	
	
}
