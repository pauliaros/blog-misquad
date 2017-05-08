function miSquad(id,nombreApellido,edad,hobbies){
	this.nombreApellido = nombreApellido;
	this.edad = edad;
  	this.hobbies = hobbies;
}

var sopaipas = [];


var marcela = new miSquad(1,"Marcela Cabello",31,["Cantar", "Yoga", "Cocinar"]);
var valentina = new miSquad(2,"Valentina Amala Kamala",29,["Bordar", "Tejer","Dormir"]);
var karla = new miSquad(3,"Karla Jeria",35,["Comer Chocolates", "Viajar","Ir al Cine"]);
var tanya = new miSquad(4,"Tanya Ramirez",29,["Gatos", "Viajar","Tomar tecito a las 4"]);
var paula = new miSquad(5,"Paula Ponce",28,["Música", "Aves","Heroes of the storm"]);
var paulina = new miSquad(6,"Paulina Aros",28,["Hacer libretas", "Acariciar Gatos", "Manicure"]);
var mariela = new miSquad(7,"Mariela Cubillos",36,["Tejer", "Comer chocolate","Cocinar"]);
var melissa = new miSquad(8,"Melissa Pacheco",25,["Dormir", "Comer", "Matilda"]);


sopaipas.push(marcela, valentina, karla, tanya, paula, paulina, mariela, melissa);






var imprimir = document.getElementById("mi-squad");

sopaipas.forEach(function(persona){

    imprimir.innerHTML +=  '<b>Nombre y Apellido:</b> ' + persona.nombreApellido + '<br><b>Edad:</b> ' + persona.edad + "  años" + '<br><b>Hobbies: </b>';
    var listaHobbie =  persona.hobbies.forEach(function(miembro){
    	return (imprimir.innerHTML += "<li>" + miembro + "</li>" )});
   imprimir.innerHTML += '<br>' + "<textarea name='comment' id='comment'></textarea>" + "<br>" + 
   "<input type='submit' value='Dejar comentario'/>" + "<input type='button' id='button' value='Like! ♥'/>" + "<br><br>"; 
})

