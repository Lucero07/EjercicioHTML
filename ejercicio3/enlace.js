+function() {
	// Elementos
	var Fahrenheit = document.getElementById("Fahrenheit");
	var Celsius = document.getElementById("Celsius");
  // función principal
  var operar = function (operacion) {
          var temperaturaF = document.getElementById("temperaturaF").value;
          var temperaturaC = document.getElementById("temperaturaC").value;
          // Manejadores de Evento
          	temperaturaF.addEventListener("click", function () {
                  operar(Fahrenheit);
            temperaturaC.addEventListener("click", function () {
                        operar(Celsius);
  });
  }();
