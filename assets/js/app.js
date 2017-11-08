/*var boton = document.getElementById("botonPrincipal");
boton.addEventListener("click", function(){
	var input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "Agrega tarea");
	input.classList.add("inputTitulo");
	input.value;

	var nuevoBoton = document.createElement("button");
	var textBoton = document.createTextNode("Guardar");
	nuevoBoton.setAttribute("type", "button");
	nuevoBoton.classList.add("botonGuardar");

	var divPadre = document.getElementById("tareas");
	divPadre.appendChild(input);
	nuevoBoton.appendChild(textBoton);
	divPadre.appendChild(nuevoBoton);
})*/
function add(){
	/*if(event.keyCode == 13){*/
		/*var textArea = document.createElement("textarea");*/
		var boton = document.createElement("button");
		var textBoton = document.createTextNode("Guardar");
		boton.setAttribute("type", "button");
		boton.classList.add("botonGuardar");
		var divPadre = document.getElementById("añadirLista");
		/*divPadre.appendChild(textArea);*/
		boton.appendChild(textBoton);
		divPadre.appendChild(boton);
	
		boton.addEventListener("click", function(){
		var divSegundo = document.createElement("div");
		var input = document.createElement("input");
		var segundoBoton = document.createElement("button");
		var textoSegundoBoton = document.createTextNode("Guardar");
		divSegundo.appendChild(input);
		segundoBoton.appendChild(textoSegundoBoton);
		divSegundo.appendChild(segundoBoton);
		containerTareas.appendChild(divSegundo);
	})
}

