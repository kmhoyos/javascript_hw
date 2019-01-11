// from data.js
var tableData = data;

// YOUR CODE HERE!

//Select table
var tbody = d3.select("tbody");

//Populate Table with JSON data
data.forEach(function(UFOdata) {
  var row = tbody.append("tr");
  Object.entries(UFOdata).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

//Add User Input to Select Date
filterTable = d3.select("#filter-btn");

filterTable.on("click", function() {
    d3.event.preventDefault();
  
    tbody.html("");
    
    
    var inputElement = d3.select("#datetime");
    
    var inputValue = inputElement.property("value");
    
    var filteredDate = tableData.filter(data => data.datetime === inputValue);

    filteredDate.forEach(function(UFOdata) {  
      var row = tbody.append("tr");
        Object.entries(UFOdata).forEach(function([key, value]) {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
});