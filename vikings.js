
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


//EMPIEZA LA GUERRA-------------------------------------------------
function guerra(){
    ejercitoVikingo(Vikingo,100);
    ejercitoSajon(Sajon, 100);

    console.log("El sol sube.");
    console.log(""+ragnar.grito);

var contadorsajon=0;
var contadorvikingo=0;
var num=Math.round (Math.random()*3+5);

for(var i=1; i<=num; i++){

    console.log("Turno: "+i);

    while(pueblosajon[contadorsajon].salud >= 0 && ejercito[contadorvikingo].salud >= 0) {

    pueblosajon[contadorsajon].salud -= ejercito[contadorvikingo].fuerza; 
    console.log("Vida sajón: "+pueblosajon[contadorsajon].salud + " daño vikingo: " +ejercito[contadorvikingo].fuerza );  
   
    ejercito[contadorvikingo].salud -= pueblosajon[contadorsajon].fortaleza;
    console.log(ejercito[contadorvikingo].nombre+" Vida: " +ejercito[contadorvikingo].salud + " daño sajon: "+ pueblosajon[contadorsajon].fortaleza); 
   
}
    if (pueblosajon[contadorsajon].salud <= 0) {
        console.log("ha muerto un sajón");
        contadorsajon++;


    }

    else if (ejercito[contadorvikingo].salud <= 0) {
        console.log("ha muerto " + ejercito[contadorvikingo].nombre);
        contadorvikingo++;


    }

    
}
    console.log("La batalla ha terminado");
    console.log("Nº de muertos sajones: "+contadorsajon);
    console.log("Nº de muertos vikingos: "+contadorvikingo);


}
//FIN DE LA GUERRA------------------------------------------------
