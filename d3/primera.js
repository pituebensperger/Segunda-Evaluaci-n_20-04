//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.

var w = 450;
var h = 450;

  var premios = [
    {name:'Física',premio:111},
    {name:'Química',premio:109},
    {name:'Medicina',premio:108},
    {name:'Literatura',premio:110},
      {name:'Paz',premio:98},
      {name:'Economía',premio:49}
  ];

  d3.selectAll('circle')
    .data(premios)
    .attr('fill','#FFAC33')
    .attr('r', function(d) {
      return d.premio/ 4;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(premios)
    .attr('fill','#222222')                      
    .text(function(d) {
      return ". " + d.name;
    });