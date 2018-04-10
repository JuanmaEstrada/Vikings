var Vikingo = function(nombre, salud, fuerza){

		this.nombre = nombre;
		this.salud = salud;
		this.fuerza = fuerza;

		}

var ragnar = new Vikingo('Ragnar',100,25);
var bior = new Vikingo('Bior',150,15);
var contador=0;

do{


	if(this.ragnar.fuerza > this.bior.fuerza){
	contador=contador+1;
	this.bior.salud=this.bior.salud-this.ragnar.fuerza;
	console.log("Ragnar nº de golpes: " +contador);
	}

}while((this.bior.salud-this.ragnar.fuerza) > 1);


console.log("Salud de Bior "+this.bior.salud);

