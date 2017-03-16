+function() {
	// Elementos
	var botonFahrenheit = document.getElementById("convert-to-celsius");
	var botonCelsius = document.getElementById("convert-to-fahrenheit");

  botonFahrenheit.addEventListener("click", function (e) {
    e.preventDefault();
      var temperaturaF = document.getElementById("temperaturaF").value;
    var resultado =  celsius(temperaturaF);
    document.getElementById("temperaturaC").value = parseInt( resultado);
  });
  botonCelsius.addEventListener("click", function (e) {
      e.preventDefault();
    var temperaturaC = document.getElementById("temperaturaC").value;
  var resultado =  fahrenheit(temperaturaC);
  document.getElementById("temperaturaF").value = parseInt( resultado);
  });
  // función principal
  // var operar = function (operacion) {
  //         var temperaturaF = document.getElementById("temperaturaF").value;
  //         var temperaturaC = document.getElementById("temperaturaC").value;
  //         // Manejadores de Evento
  //
  // };
}();
