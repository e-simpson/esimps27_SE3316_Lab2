/*global $*/
var fruits = ["Pineapple", "Guapple", "Apple", "Starfruit", "Loquat"]

$(document).ready(function(){
    for (var f in fruits){
        $('#fruits').append('<li>' + fruits[f] + '</li>')
    }
   
    $( "#enter" ).click(function() {
        $('#basket').append( $( '#fruits > li:contains("' + $('#enterFruit').val() + '")' ))
        $('#enterFruit').val('')
    });
    
    $( "#enterFruit" ).keyup(function (e) {
        if (e.which == 13) { $("#enter").click();}
    });
});
    