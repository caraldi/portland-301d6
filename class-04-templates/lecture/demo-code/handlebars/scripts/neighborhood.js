var neighborhoods = [];

function Neighborhood (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
};

Neighborhood.prototype.toHtml = function() {
  // Gets stored html content (script take with id neighborhood-template)
  var source = $('#neighborhood-template').html();
  // Takes source template string and turns into function stored on var template --> function takes Handlebars object to insert data into each expression in template
  var template = Handlebars.compile(source);
  // Create new object for each neighborhood object attribute in data set (3) to pass through
  var testContext = {name: 'first expression'};
  // 
  var html = template(this);

  // Get back rendered html
  return html;
};

neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(function(ourNewNeighborhoodObject){
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
