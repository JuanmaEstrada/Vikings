
//CREACIÓN DE VIKINGOS-----------------------------------------------------

function Vikingo(nombre, salud, fuerza){


        this.nombre = nombre || "Vikings" + Math.round (Math.random()*50+50);
        this.salud = salud || Math.round (Math.random()*50+50);
        this.fuerza = fuerza || Math.round (Math.random()*10+20);
        this.grito ="vamos al valhalla"

        }

var ragnar = new Vikingo('Ragnar',100,25);
var bior = new Vikingo('Bior',75,15);

// Vikingo.prototype.warCry=function(){
//     console.log(this.grito);
// }

// var contadorLuchador1=0;
// var contadorLuchador2=0;




//CREAR EJERCITO VIKINGO---------------------------------------------

var ejercito=[];
var ejercitoVikingo = function(Vikingo , number){
    

    for (var i =0; i< number; i++) {
        var theVinking = new Vikingo()
        ejercito.push(theVinking);
    }
    return ejercito;
}






//ENTRENAMIENTO VIKINGO-----------------------------------------------------

function entrenar(){
    var luchadoraleatorio=Math.round (Math.random()*1+10);

    var luchadoraleatoriodos=Math.round (Math.random()*1+10);

do{

 

    this.ejercito[luchadoraleatorio].salud -= this.ejercito[luchadoraleatoriodos].fuerza;
    console.log("Ataca "+this.ejercito[luchadoraleatorio].nombre + " con una fuerza de: " +this.ejercito[luchadoraleatorio].fuerza + " le queda de salud: "+this.ejercito[luchadoraleatorio].salud );

    this.ejercito[luchadoraleatoriodos].salud -= this.ejercito[luchadoraleatorio].fuerza;
    console.log("Ataca "+this.ejercito[luchadoraleatoriodos].nombre + " con una fuerza de: " +this.ejercito[luchadoraleatoriodos].fuerza + " le queda de salud: "+this.ejercito[luchadoraleatoriodos].salud );


}while((this.ejercito[luchadoraleatorio].salud - this.ejercito[luchadoraleatoriodos].fuerza) > 1 && ((this.ejercito[luchadoraleatorio].salud-this.ejercito[luchadoraleatoriodos].fuerza) > 1));


if (this.ejercito[luchadoraleatorio].salud > this.ejercito[luchadoraleatoriodos].salud){
    console.log("El ganador es: " +this.ejercito[luchadoraleatorio].nombre);


}

else if (this.ejercito[luchadoraleatoriodos].salud > this.ejercito[luchadoraleatorio].salud){
    console.log("El ganador es: " +this.ejercito[luchadoraleatoriodos].nombre);


}

}




//CREAR SAJONES-----------------------------------------------------


function Sajon( salud, fortaleza){


        this.salud = salud || Math.round (Math.random()*10+10);
        this.fortaleza = fortaleza || Math.round (Math.random()*10+10);

        }





//CREAR EJERCITOS---------------------------------------------

var pueblosajon=[];
var ejercitoSajon = function(Sajon , number){
    

    for (var i =0; i< number; i++) {
        var theSajon = new Sajon()
        pueblosajon.push(theSajon);
    }


        return pueblosajon;

}


//EL ASALTO EMPIEZA-------------------------------------------------
function guerra(){
    //ejercitoVikingo(Vikingo,100);
    //ejercitoSajon(Sajon, 100);

    console.log("El sol sube.");
    console.log(""+ragnar.grito);


var num=Math.round (Math.random()*3+5);

for(var i=0; i<=num; i++){

    while(pueblosajon[0].salud >= 0 && ejercito[0].salud >= 0) {

    pueblosajon[0].salud -= ejercito[0].fuerza; 
    console.log("Vida sajon: "+pueblosajon[0].salud + " daño vikingo " +ejercito[0].fuerza );  
    ejercito[0].salud -= pueblosajon[0].fortaleza;
    console.log("Vida viking" +ejercito[0].salud + " daño sajon "+ pueblosajon[0].fortaleza);  

    }

}
    console.log("La batalla ha terminado");

}

