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
		//declarar variables
		var divPadre = document.getElementById("añadirLista");
		divPadre.setAttribute("id", "divPadre");
		
		//crear boton
		var boton = document.createElement("button");
		var textBoton = document.createTextNode("Guardar");
		boton.setAttribute("type", "button");
		boton.classList.add("botonGuardar");
		/*divPadre.appendChild(textArea);*/
		//asignar padres
		boton.appendChild(textBoton);
		divPadre.appendChild(boton);
		


	
		boton.addEventListener("click", function(){
			var inputUno = document.getElementById("lista");
			inputUno.setAttribute("id", "valor");
			var valorInput = document.getElementById("valor").value;
			document.getElementById("valor").value = "";

			var parrafo = document.createElement("p");
			var textoNuevo = document.createTextNode(valorInput);

			var divSegundo = document.createElement("div");
			divSegundo.setAttribute("id", "divSegundo");

			var añadir = document.createElement("a");
			añadir.setAttribute("href", "#");
			var textoAñadir = document.createTextNode("Añandir una tarea");


			var inputDos = document.createElement("input");
			inputDos.setAttribute("placeholder", "Añadir una lista", "id", "inputDos");

			var segundoBoton = document.createElement("button");
			segundoBoton.setAttribute("id", "segundoBoton");

			var textoSegundoBoton = document.createTextNode("Guardar");
			//var textArea = document.createElement("textarea");

			//divPadre.appendChild(textArea);
			divSegundo.appendChild(inputDos);
			segundoBoton.appendChild(textoSegundoBoton);
			divSegundo.appendChild(segundoBoton);
			containerTareas.appendChild(divSegundo);
			parrafo.appendChild(textoNuevo);
			divSegundo.appendChild(parrafo);
			añadir.appendChild(textoAñadir);
			divPadre.appendChild(añadir);
			divSegundo.insertBefore(parrafo, inputDos);

			añadir.addEventListener("click", function(){
				var textArea = document.createElement("textarea");
				//var add = document.createElement("a");
				//add.setAttribute("href", "#");
				//var textAdd = document.createTextNode("Añandir una tarea");
				//add.appendChild(textAdd);
				divPadre.appendChild(textArea);
				//divPadre.appendChild(add);
			})
		})
}

