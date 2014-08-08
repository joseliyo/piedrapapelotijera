//genera una funcion entre 0,1 ó 2
function aleatorio(minimo,maximo){
				/*math.floor redondea a numeros decimales*/
	var numero=Math.floor(Math.random()*(maximo-minimo+1)+minimo);
	return numero;
}

var piedra=0;
var papel=1;
var tijera=2;
var opciones = ["piedra","papel","tijera","opcion de salida. Hasta luego"];

var opcionUsuario=piedra+1;
var opcionMaquina=aleatorio(0,2);
while((opcionUsuario-1)==piedra||(opcionUsuario-1)==papel||(opcionUsuario-1)==tijera||(opcionUsuario)>4){
	opcionUsuario=prompt("¿Que elijes?\n1) Piedra\n2) papel\n3) tijera\n4) Salir",1);
	/*buenas practicas: codigo legible es un codigo cool*/
	alert("Elejiste "+ opciones[opcionUsuario-1]);
	alert("La Maquina escoje "+ opciones[opcionMaquina]);
	if((opcionUsuario-1)== piedra)
	{
		
		if((opcionMaquina)==piedra){
			alert("Piedra empata a Piedra");
		}
		else{
			if(opcionMaquina==papel){
				alert("Piedra pierde con Papel");
			}else{
				if(opcionMaquina==tijera){
					alert("Piedra Gana con Tijera");
				}
			}
		}
	}else{
		if((opcionUsuario-1)==papel){
			
			if((opcionMaquina)==piedra){
				alert("Papel gana a Piedra");
			}
			else{
				if(opcionMaquina==papel){
					alert("Papel empata con Papel");
				}else{
					if(opcionMaquina==tijera){
						alert("Papel pierde con Tijera");
					}
				}
			}
		}else{
			
			if((opcionUsuario-1)==tijera){
				if((opcionMaquina)==piedra){
					alert("Tijera pierde con Piedra");
				}
				else{
					if(opcionMaquina==papel){
						alert("Tijera gana a Papel");
					}else{
						if(opcionMaquina==tijera){
							alert("Tijera empata con Tijera");
						}
					}
				}
			}else{
				if(opcionUsuario>4)
				alert("Debe Escojer entre las opciones 1,2,3,4");
			}
		}
	}
}