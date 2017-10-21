/*global $*/
var fruits = ["Pineapple", "Guapple", "Apple", "Starfruit", "Loquat"]

$(document).ready(function(){
    for (var f in fruits){
        $('#fruits').append('<li>' + fruits[f] + '</li>')
    }
   
    $( "#enter" ).click(function() {
        var text = $('#enterFruit').val()
        var find = ($('#fruits > li:contains("' + text + '")' ))
        find.filter(function() {return $(this).text() === text })
        $('#basket').append(find)
        $('#enterFruit').val('')
    });
    
    $( "#enterFruit" ).keyup(function (e) {
        if (e.which == 13) { $("#enter").click();}
    });
});
